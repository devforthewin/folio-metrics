import Link from 'next/link'

export default function DashboardHeader() {
  return (
    <nav>
      <Link href="/admin">1</Link>
      <Link href="/admin/analytics">2</Link>
    </nav>
  )
}
