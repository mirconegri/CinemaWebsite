'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '20px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #1E1E1E' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div>
          <div className="font-display" style={{ color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '0.3em' }}>
            CINEWORLD
          </div>
          <div className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.55rem', letterSpacing: '0.4em', marginTop: '2px' }}>
            TRENTO · EST. 1927
          </div>
        </div>
      </Link>

      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        {[
          { href: '/', label: 'Programmazione' },
          { href: '#sale', label: 'Le Sale' },
          { href: '#info', label: 'Info & Prezzi' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} style={{
            textDecoration: 'none',
            fontFamily: 'Cinzel, serif',
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
