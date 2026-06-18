import { ReactNode } from 'react';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="container py-8">
        <div className="flex gap-6">
          <Sidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
