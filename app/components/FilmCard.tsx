'use client';
import Link from 'next/link';
import { Film } from '../data/films';

export default function FilmCard({ film }: { film: Film }) {
  return (
    <Link href={`/film/${film.id}`} style={{ textDecoration: 'none' }}>
      <div className="card-cinema" style={{
        borderRadius: '2px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Poster */}
        <div style={{ position: 'relative', paddingTop: '145%', overflow: 'hidden' }}>
          <img
            src={film.poster}
            alt={film.titolo}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          {/* Overlay gradient */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%',
            background: 'linear-gradient(to top, rgba(8,8,8,0.95), transparent)',
          }} />

          {/* Eta */}
          <div style={{
            position: 'absolute', top: 12, right: 12,
            background: 'rgba(8,8,8,0.85)',
            border: '1px solid var(--gold-dim)',
            color: 'var(--gold)',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.6rem',
            padding: '3px 8px',
            letterSpacing: '0.1em',
          }}>
            {film.eta}
          </div>

          {/* Voto */}
          <div style={{
            position: 'absolute', bottom: 80, left: 16,
            display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>★</span>
            <span style={{ color: 'var(--gold)', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.85rem' }}>
              {film.voto}
            </span>
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: '16px' }}>
          <div style={{ fontFamily: 'Cinzel, serif', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '6px', lineHeight: 1.3 }}>
            {film.titolo}
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '10px' }}>
            {film.genere.slice(0, 2).join(' · ')} · {film.durata} min
          </div>

          {/* Orari oggi */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
            {film.orari.filter(o => o.data === '2025-05-29').map((o, i) => (
              <span key={i} style={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.7rem',
                color: 'var(--gold)',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                padding: '3px 8px',
              }}>
                {o.ora}
              </span>
            ))}
          </div>

          <div style={{
            fontFamily: 'Cinzel, serif',
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            borderTop: '1px solid var(--black-border)',
            paddingTop: '10px',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>{film.sala}</span>
            <span style={{ color: 'var(--gold)' }}>Dettagli →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
