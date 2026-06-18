import { DashboardLayout } from '@/components/dashboard-layout';

export default function BrokerPage() {
  return (
    <DashboardLayout>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-6 shadow-soft">
          <p className="text-sm text-muted">Broker status</p>
          <h1 className="mt-2 text-4xl font-semibold">Quotex connection</h1>
          <p className="mt-4 text-muted">
            placeholder for account binding, connection and execution readiness.
          </p>

          <div className="mt-8 space-y-3">
            <div className="rounded-2xl border border-border p-4">Connection mode: Session / Token</div>
            <div className="rounded-2xl border border-border p-4">Status: Not Connected</div>
            <div className="rounded-2xl border border-border p-4">Executor health: Waiting for backend</div>
          </div>
        </div>

        <div className="card p-6 shadow-soft">
          <h2 className="text-2xl font-semibold">Connect broker account</h2>

          <form className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Registered email"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              type="password"
              placeholder="Broker password or token"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Optional session id"
            />
            <button className="w-full rounded-2xl bg-primary px-4 py-3 font-medium text-white">
              Test connection
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}
