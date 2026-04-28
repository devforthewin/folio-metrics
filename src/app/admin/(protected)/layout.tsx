import { redirect } from 'next/navigation'
import { Metadata } from 'next'

import { auth } from '@/auth'
import { AdminHeader } from '@/widgets/admin/layout'

import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Dashboard | Folio-Metrics Admin',
  description: 'Analytics dashboard and management panel.',
  robots: { index: false, follow: false },
}

function isDemoUser(user: { email?: string | null; name?: string | null }) {
  const email = user.email ?? ''
  const demoEmail = process.env.SECRET_DEMO_USER
  return Boolean(demoEmail && email === demoEmail)
}

type ProtectedLayoutProps = {
  children?: ReactNode
}

export default async function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const session = await auth()
  if (!session?.user) redirect('/admin/login?reason=auth')

  return (
    <div className="min-h-screen bg-background">
      <AdminHeader isDemo={isDemoUser(session.user)} />
      <main className="mx-auto w-full max-w-[1200px] p-4 md:p-8">
        {children}
      </main>
    </div>
  )
}
