import { DashboardLayout } from '@/components/dashboard-layout';

export default function AutoTradePage() {
  return (
    <DashboardLayout>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card p-6 shadow-soft">
          <p className="text-sm text-muted">Execution rules</p>
          <h1 className="mt-2 text-4xl font-semibold">Auto trade settings</h1>

          <form className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Amount per trade e.g. 10"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Max simultaneous trades"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Daily stop loss"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Take profit target"
            />
            <button className="w-full rounded-2xl bg-primary px-4 py-3 font-medium text-white">
              Save settings
            </button>
          </form>
        </div>

        <div className="card p-6 shadow-soft">
          <p className="text-sm text-muted">Automation switch</p>
          <h2 className="mt-2 text-2xl font-semibold">Execution state</h2>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-border p-4">Auto Trade: Enabled</div>
            <div className="rounded-2xl border border-border p-4">Trade Filter: High confidence only</div>
            <div className="rounded-2xl border border-border p-4">Loss streak protection: Enabled</div>
            <div className="rounded-2xl border border-border p-4">Telegram confirmation: Enabled</div>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
