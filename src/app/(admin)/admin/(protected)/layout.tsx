import AdminHeader from '@/components/admin/AdminHeader'

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  )
}
