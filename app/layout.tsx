import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eventa MG | Communauté d\'Experts et d\'Innovation',
  description: 'Une communauté de développeurs, experts IA, photographes, commerciaux, profs de math, DJs et créateurs unie pour innover à Madagascar et à l\'international.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
