import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Velour Atelier | Creative Direction Portfolio',
  description:
    'A premium digital portfolio template inspired by modern editorial experiences and luxury-focused creative direction.',
  keywords: [
    'creative director',
    'portfolio',
    'luxury design',
    'brand strategy',
    'web design'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
