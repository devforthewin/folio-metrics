export const metadata = {
  title: 'Admin Panel | Folio-Metrics',
  description: 'Visitor analytics dashboard for Folio-Metrics.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
