import Link from 'next/link';
import { BarChart3, Bot, History, LayoutDashboard, PlugZap, Radio, Send } from 'lucide-react';

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/signals', label: 'Signals', icon: Radio },
  { href: '/trades', label: 'Trade History', icon: History },
  { href: '/broker', label: 'Broker Connect', icon: PlugZap },
  { href: '/autotrade', label: 'Auto Trade', icon: Bot },
  { href: '/telegram', label: 'Telegram Bot', icon: Send },
  { href: '/signup', label: 'Upgrade', icon: BarChart3 },
];

export function Sidebar() {
  return (
    <aside className="card hidden h-[calc(100vh-110px)] w-72 shrink-0 p-4 lg:block">
      <div className="mb-6 border-b border-border pb-4">
        <p className="text-xs uppercase tracking-[0.25em] text-muted">Control Center</p>
        <h2 className="mt-2 text-2xl font-semibold">sohiltrader</h2>
      </div>

      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-surface-2 hover:text-text"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
