export default function DashboardLayout({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="">
      <header className="dashboard-header">
        {header}
      </header>

      {/* <aside className="dashboard-sidebar">{sidebar}</aside> */}

      <main className="dashboard-main-content">
        {children}
      </main>

      <footer className="dashboard-footer">
        {footer}
      </footer>
    </div>
  )
}