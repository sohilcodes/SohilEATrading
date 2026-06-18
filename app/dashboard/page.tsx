import { DashboardLayout } from '@/components/dashboard-layout';
import { StatCard } from '@/components/stat-card';

const stats = [
  { label: 'Today P&L', value: '+$128.40', note: '8 trades completed' },
  { label: 'Win Rate', value: '74%', note: 'Last 50 signals performance' },
  { label: 'Bot Status', value: 'Active', note: 'Auto mode is enabled' },
  { label: 'Telegram Sync', value: 'Connected', note: 'Trade alerts are enabled' },
];

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <section>
        <p className="text-sm text-muted">Overview</p>
        <h1 className="mt-2 text-4xl font-semibold">Trading dashboard</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="card p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted">Live execution queue</p>
                <h2 className="mt-1 text-2xl font-semibold">Recent activity</h2>
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                Running
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {[
                'EUR/USD signal received',
                'Risk layer approved amount $10',
                'Trade pushed to Quotex connector',
                'Telegram bot delivered success alert',
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-border p-4">
                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium">{item}</p>
                    <p className="text-sm text-muted">
                      Mock event card for live integration later.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 shadow-soft">
            <p className="text-sm text-muted">Quick controls</p>
            <h2 className="mt-1 text-2xl font-semibold">Auto trade panel</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <span>Auto mode</span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    ON
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <span>Risk per trade</span>
                  <span className="font-medium">$10</span>
                </div>
              </div>

              <div className="rounded-2xl border border-border p-4">
                <div className="flex items-center justify-between">
                  <span>Daily stop loss</span>
                  <span className="font-medium">$50</span>
                </div>
              </div>

              <button className="w-full rounded-2xl bg-primary px-4 py-3 font-medium text-white">
                Open full settings
              </button>
            </div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
