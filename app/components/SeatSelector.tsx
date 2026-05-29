'use client';
import { useState, useMemo } from 'react';
import { Film } from '../data/films';

interface Props {
  film: Film;
  orario: { data: string; ora: string; tipo: string };
}

function generateSeats(rows: number, cols: number, seed: number) {
  const seats: boolean[][] = [];
  let rand = seed;
  for (let r = 0; r < rows; r++) {
    seats.push([]);
    for (let c = 0; c < cols; c++) {
      rand = (rand * 1664525 + 1013904223) & 0xffffffff;
      seats[r].push((rand & 0xff) < 60);
    }
  }
  return seats;
}

const ROWS = 8;
const COLS = 12;
const ROW_LABELS = ['A','B','C','D','E','F','G','H'];
const VIP_ROWS = [5, 6];

export default function SeatSelector({ film, orario }: Props) {
  const seed = film.id.charCodeAt(0) * 31 + orario.ora.charCodeAt(0);
  const occupati = useMemo(() => generateSeats(ROWS, COLS, seed), [seed]);
  const [selezionati, setSelezionati] = useState<string[]>([]);
  const [prenotato, setPrenotato] = useState(false);

  const toggleSeat = (key: string, taken: boolean) => {
    if (taken) return;
    setSelezionati(prev =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const prezzoUnitario = 9.0;
  const totale = selezionati.length * prezzoUnitario;

  if (prenotato) {
    return (
      <div style={{ textAlign: 'center', padding: '60px', background: 'var(--black-card)', border: '1px solid var(--gold-dim)' }}>
        <div style={{ color: 'var(--gold)', fontSize: '2rem', marginBottom: '16px' }}>✦</div>
        <div className="font-display" style={{ color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '0.2em', marginBottom: '12px' }}>
          PRENOTAZIONE CONFERMATA
        </div>
        <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
          {film.titolo} · {orario.data === '2025-05-29' ? 'Oggi' : 'Domani'} ore {orario.ora}
        </div>
        <div className="font-mono" style={{ color: 'var(--gold)', fontSize: '0.9rem', marginTop: '16px' }}>
          Posti: {selezionati.join(', ')} · Totale: € {totale.toFixed(2)}
        </div>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '12px', fontStyle: 'italic' }}>
          (Simulazione — nessuna transazione reale effettuata)
        </div>
        <button
          className="btn-outline"
          style={{ marginTop: '24px' }}
          onClick={() => { setPrenotato(false); setSelezionati([]); }}
        >
          Nuova prenotazione
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '8px' }}>
        SELEZIONE POSTI
      </h2>
      <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem', marginBottom: '32px' }}>
        {film.sala} · {orario.data === '2025-05-29' ? 'Oggi' : 'Domani'} {orario.ora}
      </div>

      {/* Schermo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          width: '60%', margin: '0 auto',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
          marginBottom: '6px',
        }} />
        <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.6rem', letterSpacing: '0.4em' }}>
          SCHERMO
        </div>
      </div>

      {/* Griglia posti */}
      <div style={{ overflowX: 'auto' }}>
        <div style={{ display: 'inline-block', margin: '0 auto' }}>
          {Array.from({ length: ROWS }, (_, r) => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
              <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem', width: '20px', textAlign: 'right' }}>
                {ROW_LABELS[r]}
              </span>
              {Array.from({ length: COLS }, (_, c) => {
                const key = `${ROW_LABELS[r]}${c + 1}`;
                const taken = occupati[r][c];
                const selected = selezionati.includes(key);
                const isVip = VIP_ROWS.includes(r);
                return (
                  <div
                    key={c}
                    data-hover="true"
                    className={`seat ${taken ? 'taken' : selected ? 'selected' : 'free'} ${isVip ? 'vip' : ''}`}
                    onClick={() => toggleSeat(key, taken)}
                    title={taken ? 'Occupato' : `Posto ${key}${isVip ? ' (VIP)' : ''}`}
                  />
                );
              })}
              <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem', width: '20px' }}>
                {ROW_LABELS[r]}
              </span>
            </div>
          ))}

          {/* Numerazione colonne */}
          <div style={{ display: 'flex', gap: '6px', marginTop: '8px', paddingLeft: '26px' }}>
            {Array.from({ length: COLS }, (_, i) => (
              <span key={i} className="font-mono" style={{
                width: '28px', textAlign: 'center',
                color: 'var(--text-muted)', fontSize: '0.55rem',
              }}>
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Legenda */}
      <div style={{ display: 'flex', gap: '24px', marginTop: '24px', flexWrap: 'wrap' }}>
        {[
          { cls: 'seat free', label: 'Disponibile' },
          { cls: 'seat selected', label: 'Selezionato' },
          { cls: 'seat taken', label: 'Occupato' },
          { cls: 'seat free vip', label: 'VIP (F–G)' },
        ].map(({ cls, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div className={cls} style={{ cursor: 'default' }} />
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{label}</span>
          </div>
        ))}
      </div>

      {/* Riepilogo e prenotazione */}
      {selezionati.length > 0 && (
        <div style={{
          marginTop: '32px',
          padding: '24px',
          background: 'var(--black-card)',
          border: '1px solid var(--gold-dim)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <div className="font-display" style={{ color: 'var(--gold)', fontSize: '0.7rem', letterSpacing: '0.2em', marginBottom: '6px' }}>
              POSTI SELEZIONATI
            </div>
            <div className="font-mono" style={{ fontSize: '0.85rem' }}>
              {selezionati.join(', ')}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '4px' }}>
              {selezionati.length} posto{selezionati.length !== 1 ? 'i' : ''} · € {totale.toFixed(2)}
            </div>
          </div>
          <button className="btn-gold" onClick={() => setPrenotato(true)}>
            Conferma prenotazione
          </button>
        </div>
      )}
    </div>
  );
}
