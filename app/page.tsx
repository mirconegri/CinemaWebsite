'use client';
import { useState } from 'react';
import FilmCard from './components/FilmCard';
import { films, generi } from './data/films';

export default function Home() {
  const [filtroGenere, setFiltroGenere] = useState('Tutti');
  const [filtroData, setFiltroData] = useState('2025-05-29');

  const filmsFiltrati = films.filter(f => {
    const genereOk = filtroGenere === 'Tutti' || f.genere.includes(filtroGenere);
    const dataOk = f.orari.some(o => o.data === filtroData);
    return genereOk && dataOk;
  });

  const date = [
    { val: '2025-05-29', label: 'Oggi · Gio 29' },
    { val: '2025-05-30', label: 'Domani · Ven 30' },
  ];

  return (
    <main>
      {/* Hero */}
      <section style={{
        minHeight: '60vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 40px 60px',
        position: 'relative',
        background: `
          radial-gradient(ellipse 80% 60% at 50% -20%, rgba(201,168,76,0.08) 0%, transparent 70%),
          linear-gradient(180deg, #080808 0%, #0D0A06 100%)
        `,
      }}>
        {/* Decorative lines */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '300px',
          border: '1px solid rgba(201,168,76,0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }} />

        <div className="font-mono" style={{ color: 'var(--gold-dim)', fontSize: '0.65rem', letterSpacing: '0.5em', marginBottom: '24px' }}>
          ✦ MULTISALA TRENTO ✦
        </div>

        <h1 className="font-display" style={{
          fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          letterSpacing: '0.2em',
          lineHeight: 1.1,
          background: 'linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dim))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '16px',
        }}>
          IN PROGRAMMA
        </h1>

        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '1.1rem', maxWidth: '400px' }}>
          Tre sale nel cuore di Trento. Cinema da vivere.
        </p>

        <div className="divider" style={{ marginTop: '32px' }} />
      </section>

      {/* Filtri */}
      <section style={{ padding: '0 40px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '32px' }}>

          {/* Filtro data */}
          <div style={{ display: 'flex', gap: '0' }}>
            {date.map(d => (
              <button
                key={d.val}
                onClick={() => setFiltroData(d.val)}
                className={filtroData === d.val ? 'btn-gold' : 'btn-outline'}
                style={{ borderRadius: 0 }}
              >
                {d.label}
              </button>
            ))}
          </div>

          {/* Filtro genere */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {generi.map(g => (
              <button
                key={g}
                onClick={() => setFiltroGenere(g)}
                style={{
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  padding: '6px 16px',
                  border: '1px solid',
                  borderColor: filtroGenere === g ? 'var(--gold)' : 'var(--black-border)',
                  color: filtroGenere === g ? 'var(--gold)' : 'var(--text-muted)',
                  background: filtroGenere === g ? 'rgba(201,168,76,0.1)' : 'transparent',
                  cursor: 'none',
                  transition: 'all 0.2s',
                  textTransform: 'uppercase',
                }}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Contatore */}
        <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '28px' }}>
          {filmsFiltrati.length} film in programmazione
        </div>

        {/* Grid film */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {filmsFiltrati.map(film => (
            <FilmCard key={film.id} film={film} />
          ))}
        </div>

        {filmsFiltrati.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            Nessun film trovato per i filtri selezionati.
          </div>
        )}
      </section>

      {/* Footer */}
      <footer id="info" style={{
        borderTop: '1px solid var(--black-border)',
        padding: '60px 40px',
        marginTop: '60px',
        textAlign: 'center',
      }}>
        <div className="font-display" style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: '0.3em', marginBottom: '8px' }}>
          CINEWORLD TRENTO
        </div>
        <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.6rem', letterSpacing: '0.3em' }}>
          PROGETTO DIDATTICO · NON AFFILIATO A CINEWORLD TRENTO S.R.L.
        </div>
        <div style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          Biglietti: € 9,00 · Ridotto: € 7,00 · Under 14: € 5,50
        </div>
      </footer>
    </main>
  );
}
