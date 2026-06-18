import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/signals', label: 'Signals' },
  { href: '/autotrade', label: 'Auto Trade' },
  { href: '/telegram', label: 'Telegram' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">sohiltrader</Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-text">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="rounded-full border border-border px-4 py-2 text-sm">
            Login
          </Link>
          <Link href="/signup" className="rounded-full bg-primary px-4 py-2 text-sm text-white">
            Get Started
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
