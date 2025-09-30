import '../../../lib/fontawesome'
import '../../../styles/globals.css'

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
