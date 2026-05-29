import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Cursor from './components/Cursor';

export const metadata: Metadata = {
  title: 'Cineworld Trento — Programmazione',
  description: 'Programmazione film del Cineworld Trento. Progetto didattico.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
