'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { films } from '../../data/films';
import SeatSelector from '../../components/SeatSelector';

export default function FilmPage() {
  const params = useParams();
  const film = films.find(f => f.id === params.id);
  const [orarioScelto, setOrarioScelto] = useState<{data:string;ora:string;tipo:string}|null>(null);

  if (!film) return (
    <div style={{ textAlign: 'center', padding: '200px 40px', color: 'var(--text-muted)' }}>
      Film non trovato. <Link href="/" style={{ color: 'var(--gold)' }}>← Torna alla home</Link>
    </div>
  );

  const orariOggi = film.orari.filter(o => o.data === '2025-05-29');
  const orariDomani = film.orari.filter(o => o.data === '2025-05-30');

  return (
    <main style={{ minHeight: '100vh' }}>
      {/* Hero con poster */}
      <div style={{
        position: 'relative',
        height: '70vh',
        overflow: 'hidden',
      }}>
        <img src={film.poster} alt={film.titolo}
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3) saturate(0.6)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, var(--black) 15%, transparent 60%)',
        }} />

        {/* Back */}
        <Link href="/" style={{
          position: 'absolute', top: '100px', left: '40px',
          textDecoration: 'none',
          fontFamily: 'Cinzel, serif',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          display: 'flex', alignItems: 'center', gap: '8px',
        }}>
          ← Programmazione
        </Link>

        {/* Title overlay */}
        <div style={{
          position: 'absolute', bottom: '60px', left: '40px', right: '40px',
          maxWidth: '800px',
        }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {film.genere.map(g => (
              <span key={g} style={{
                fontFamily: 'Cinzel, serif', fontSize: '0.6rem',
                letterSpacing: '0.2em', color: 'var(--gold)',
                border: '1px solid var(--gold-dim)',
                padding: '3px 10px', textTransform: 'uppercase',
              }}>
                {g}
              </span>
            ))}
          </div>
          <h1 className="font-display" style={{
            fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
            letterSpacing: '0.08em',
            lineHeight: 1.1,
            marginBottom: '12px',
          }}>
            {film.titolo}
          </h1>
          <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', gap: '24px' }}>
            <span>{film.anno}</span>
            <span>{film.durata} min</span>
            <span>Regia: {film.regia}</span>
            <span style={{ color: 'var(--gold)' }}>★ {film.voto}</span>
          </div>
        </div>
      </div>

      {/* Contenuto */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '60px' }}>

          {/* Sinistra */}
          <div>
            <h2 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '16px' }}>
              SINOSSI
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-primary)', marginBottom: '40px', fontStyle: 'italic' }}>
              {film.sinossi}
            </p>

            <h2 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '16px' }}>
              CAST
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
              {film.cast.map(a => (
                <span key={a} style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  color: 'var(--text-muted)',
                  borderBottom: '1px solid var(--black-border)',
                  paddingBottom: '4px',
                }}>
                  {a}
                </span>
              ))}
            </div>

            {/* Orari */}
            <h2 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '0.3em', marginBottom: '20px' }}>
              SCEGLI ORARIO
            </h2>

            {[{ label: 'Oggi · Giovedì 29 Maggio', orari: orariOggi, data: '2025-05-29' },
              { label: 'Domani · Venerdì 30 Maggio', orari: orariDomani, data: '2025-05-30' }].map(({ label, orari, data }) => (
              <div key={data} style={{ marginBottom: '24px' }}>
                <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.65rem', letterSpacing: '0.3em', marginBottom: '12px' }}>
                  {label}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {orari.map((o, i) => (
                    <button key={i}
                      onClick={() => setOrarioScelto(o)}
                      style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.85rem',
                        padding: '10px 20px',
                        border: '1px solid',
                        borderColor: orarioScelto?.ora === o.ora && orarioScelto?.data === o.data
                          ? 'var(--gold)' : 'var(--black-border)',
                        color: orarioScelto?.ora === o.ora && orarioScelto?.data === o.data
                          ? 'var(--gold)' : 'var(--text-muted)',
                        background: orarioScelto?.ora === o.ora && orarioScelto?.data === o.data
                          ? 'rgba(201,168,76,0.12)' : 'transparent',
                        cursor: 'none',
                        transition: 'all 0.2s',
                      }}
                    >
                      {o.ora}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Destra - info */}
          <div>
            <div style={{
              background: 'var(--black-card)',
              border: '1px solid var(--black-border)',
              padding: '28px',
              marginBottom: '24px',
            }}>
              <h3 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '20px' }}>
                DETTAGLI
              </h3>
              {[
                ['Sala', film.sala],
                ['Lingua', film.lingua],
                ['Durata', `${film.durata} min`],
                ['Età', film.eta],
                ['Regia', film.regia],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '10px 0',
                  borderBottom: '1px solid var(--black-border)',
                  fontSize: '0.85rem',
                }}>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'Cinzel, serif', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <div style={{
              background: 'var(--black-card)',
              border: '1px solid var(--black-border)',
              padding: '28px',
            }}>
              <h3 className="font-display" style={{ color: 'var(--gold)', fontSize: '0.75rem', letterSpacing: '0.2em', marginBottom: '16px' }}>
                PREZZI
              </h3>
              {[['Intero', '€ 9,00'], ['Ridotto', '€ 7,00'], ['Under 14', '€ 5,50'], ['Tesserati', '€ 6,50']].map(([k, v]) => (
                <div key={k} style={{
                  display: 'flex', justifyContent: 'space-between',
                  padding: '8px 0',
                  fontSize: '0.85rem',
                  borderBottom: '1px solid var(--black-border)',
                }}>
                  <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', color: 'var(--gold)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Selettore posti */}
        {orarioScelto && (
          <div style={{ marginTop: '60px' }}>
            <div className="divider" style={{ marginBottom: '40px' }} />
            <SeatSelector film={film} orario={orarioScelto} />
          </div>
        )}
      </div>
    </main>
  );
}
