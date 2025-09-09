import { NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { auth } from '@/auth'
import { DEFAULT_LOCALE, LOCALES } from '@/i18n/config'

export const runtime = 'nodejs'

const intlMiddleware = createMiddleware({
  locales: LOCALES as unknown as string[],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
})

export default auth((req) => {
  const session = req.auth
  const url = req.nextUrl

  const intlResponse = intlMiddleware(req)

  const isLoggedIn = !!session?.user
  const isAdminPage = url.pathname.startsWith('/admin') && url.pathname !== '/admin/login'
  const isAuthPage = url.pathname === '/admin/login'

  if (isAuthPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  if (isAdminPage && !isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/login', req.url))
  }

  return intlResponse
})

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
    // '/admin/:path*',
  ],
}