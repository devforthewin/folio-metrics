import { NextResponse } from 'next/server'

import { auth } from '@/auth'

export const runtime = 'nodejs'

export default auth((req) => {
  const session = req.auth
  const url = req.nextUrl

  const isLoggedIn = !!session?.user
  const isAdminPage = url.pathname.startsWith('/admin') && url.pathname !== '/admin/login'
  const isAuthPage = url.pathname === '/admin/login'

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/admin/:path*', '/admin/login'],
}