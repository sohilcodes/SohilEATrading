type StatCardProps = {
  label: string;
  value: string;
  note: string;
};

export function StatCard({ label, value, note }: StatCardProps) {
  return (
    <div className="card p-5 shadow-soft">
      <p className="text-sm text-muted">{label}</p>
      <h3 className="mt-3 text-3xl font-semibold">{value}</h3>
      <p className="mt-2 text-sm text-muted">{note}</p>
    </div>
  );
}
