import Link from 'next/link';
import { ArrowRight, Bot, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/navbar';

const features = [
  {
    title: 'Auto Trading Control',
    desc: 'Create a clean control layer for Quotex-based automation with toggle states, risk blocks, and execution overview.',
    icon: Bot,
  },
  {
    title: 'Telegram Linked Alerts',
    desc: 'Push signals, trade execution logs, and win-loss updates directly to your Telegram bot flow.',
    icon: Sparkles,
  },
  {
    title: 'User Safety Settings',
    desc: 'Expose risk amount, stop conditions, and account status before real backend execution starts.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <section className="container py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted">
              Quotex test stack • Vercel frontend • Supabase ready
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
              Build your <span className="gradient-text">auto trading</span> control room with sohiltrader.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
              Premium for traders who want dashboard clarity, Telegram sync, live signal visibility, and a clean route toward automated execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white">
                Start Project <ArrowRight size={18} />
              </Link>
              <Link href="/dashboard" className="rounded-full border border-border px-6 py-3 font-medium">
                Open Dashboard
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <p className="text-sm text-muted">Signals processed</p>
                <h3 className="mt-2 text-3xl font-semibold">1.2K</h3>
              </div>
              <div className="card p-5">
                <p className="text-sm text-muted">Connected users</p>
                <h3 className="mt-2 text-3xl font-semibold">248</h3>
              </div>
              <div className="card p-5">
                <p className="text-sm text-muted">Bot uptime</p>
                <h3 className="mt-2 text-3xl font-semibold">99.2%</h3>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden p-6 shadow-soft">
            <div className="rounded-3xl border border-border bg-surface-2 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted">Execution Pulse</p>
                  <h3 className="mt-2 text-2xl font-semibold">Auto trading preview</h3>
                </div>
                <TrendingUp className="text-primary" />
              </div>

              <div className="mt-8 space-y-4">
                {['Signal received', 'Risk check approved', 'Trade sent to executor', 'Telegram alert delivered'].map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{step}</p>
                      <p className="text-sm text-muted">Live pipeline preview for frontend testing.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-2 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-muted">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
