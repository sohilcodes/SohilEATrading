import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sohiltrader',
  description: 'Auto trading dashboard for Quotex',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
