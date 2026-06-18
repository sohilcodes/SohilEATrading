import { DashboardLayout } from '@/components/dashboard-layout';

const trades = [
  { pair: 'EUR/USD', result: 'WIN', pnl: '+$8.70', time: '12:20 PM' },
  { pair: 'USD/JPY', result: 'LOSS', pnl: '-$10.00', time: '12:42 PM' },
  { pair: 'BTC/USD', result: 'WIN', pnl: '+$8.10', time: '01:10 PM' },
];

export default function TradesPage() {
  return (
    <DashboardLayout>
      <section>
        <p className="text-sm text-muted">Execution records</p>
        <h1 className="mt-2 text-4xl font-semibold">Trade history</h1>

        <div className="mt-6 grid gap-4">
          {trades.map((trade) => (
            <div
              key={trade.pair + trade.time}
              className="card flex flex-col gap-4 p-5 shadow-soft md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold">{trade.pair}</h3>
                <p className="text-sm text-muted">Executed at {trade.time}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-border px-4 py-2 text-sm">
                  {trade.result}
                </span>
                <span className="text-lg font-semibold">{trade.pnl}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DashboardLayout>
  );
}
