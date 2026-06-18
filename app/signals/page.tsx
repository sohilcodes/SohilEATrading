import { DashboardLayout } from '@/components/dashboard-layout';

const rows = [
  ['EUR/USD', 'BUY', '1m', '87%', 'Live'],
  ['GBP/JPY', 'SELL', '5m', '81%', 'Pending'],
  ['BTC/USD', 'BUY', '1m', '79%', 'Executed'],
  ['USD/BRL', 'SELL', '3m', '84%', 'Live'],
];

export default function SignalsPage() {
  return (
    <DashboardLayout>
      <section className="card p-6 shadow-soft">
        <p className="text-sm text-muted">Signal center</p>
        <h1 className="mt-2 text-4xl font-semibold">Live signals</h1>

        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="text-muted">
              <tr>
                <th className="pb-4">Asset</th>
                <th className="pb-4">Direction</th>
                <th className="pb-4">Expiry</th>
                <th className="pb-4">Confidence</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.join('-')} className="border-t border-border">
                  {row.map((cell) => (
                    <td key={cell} className="py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
}
