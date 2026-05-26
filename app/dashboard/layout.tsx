// Persistent layout for /dashboard and /dashboard/settings
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        {/* Sidebar nav goes here */}
      </aside>
      <section className="dashboard-content">{children}</section>
    </div>
  );
}
