import { DashboardLayout } from '@/components/dashboard-layout';

export default function TelegramPage() {
  return (
    <DashboardLayout>
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="card p-6 shadow-soft">
          <p className="text-sm text-muted">Bot integration</p>
          <h1 className="mt-2 text-4xl font-semibold">Telegram connection</h1>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-border p-4">Bot status: Ready</div>
            <div className="rounded-2xl border border-border p-4">Notifications: Trade open / close / errors</div>
            <div className="rounded-2xl border border-border p-4">Linked chat id: Pending backend setup</div>
          </div>
        </div>

        <div className="card p-6 shadow-soft">
          <h2 className="text-2xl font-semibold">Connect Telegram bot</h2>

          <form className="mt-6 space-y-4">
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Bot token"
            />
            <input
              className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Chat ID"
            />
            <textarea
              className="min-h-32 w-full rounded-2xl border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Optional welcome message template"
            />
            <button className="w-full rounded-2xl bg-primary px-4 py-3 font-medium text-white">
              Save Telegram settings
            </button>
          </form>
        </div>
      </section>
    </DashboardLayout>
  );
}
