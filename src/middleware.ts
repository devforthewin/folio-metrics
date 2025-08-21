import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

const LOCALES = ['en', 'ru', 'ro'] as const
const DEFAULT_LOCALE = 'ro'
const TRACKING_PARAMS = ['subid', 'fbclid', 'gclid'] as const
const COOKIE_MAX_AGE = 90 * 24 * 60 * 60 // 90 дней

const ADMIN_ROOT = '/admin'
const ADMIN_LOGIN = '/admin/login'

const norm = (p: string) => (p !== '/' ? p.replace(/\/+$/, '') : '/')
const hasLocale = (p: string) => LOCALES.some(l => p === `/${l}` || p.startsWith(`/${l}/`))
const isHTMLNav = (req: NextRequest) =>
  req.method === 'GET' && (req.headers.get('accept') || '').includes('text/html')

const isAsset = (p: string) =>
  p.startsWith('/_next/') ||
  p.startsWith('/uploads') ||
  p.startsWith('/icon') ||
  p.startsWith('/.well-known') ||
  p === '/favicon.ico' ||
  p.startsWith('/robots') ||
  p.startsWith('/sitemap') ||
  p.startsWith('/manifest') ||
  /\.(?:js|mjs|css|map|png|jpg|jpeg|gif|webp|svg|ico|txt|xml|woff2?|ttf|eot)$/.test(p)

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl

  if (isAsset(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  const localeAdmin = pathname.match(new RegExp(`^/(${LOCALES.join('|')})(/${ADMIN_ROOT.slice(1)}(?:/.*)?$)`))
  // if (localeAdmin) {
  //   const url = req.nextUrl.clone()
  //   url.pathname = localeAdmin[2] // '/admin' или '/admin/...'
  //   return NextResponse.redirect(url)
  // }

  const nPath = norm(pathname)
  const inAdmin = nPath === ADMIN_ROOT || nPath.startsWith(`${ADMIN_ROOT}/`)
  const onLogin = nPath === ADMIN_LOGIN
  const token = req.cookies.get('admin-auth')?.value ?? null

  if (inAdmin || onLogin) {
    if (!isHTMLNav(req)) return NextResponse.next()

    if (onLogin) {
      if (token) {
        const to = req.nextUrl.clone()
        to.pathname = ADMIN_ROOT
        to.search = ''
        return NextResponse.redirect(to)
      }
      return NextResponse.next()
    }

    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = ADMIN_LOGIN

      if (nPath !== ADMIN_ROOT) {
        url.search = `?next=${encodeURIComponent(pathname + search)}`
      } else {
        url.search = ''
      }
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  const params = req.nextUrl.searchParams
  const res = NextResponse.next()
  if (params.has('subid')) {
    for (const key of TRACKING_PARAMS) {
      const v = params.get(key)
      if (!v) continue
      res.cookies.set({
        name: key,
        value: v,
        maxAge: COOKIE_MAX_AGE,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    }
  }
  //
  // if (!hasLocale(pathname)) {
  //   const url = req.nextUrl.clone()
  //   url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
  //   return NextResponse.redirect(url)
  // }

  return res
}

export const config = {
  matcher: [
    '/((?!_next/|uploads/|icon/|api/|\\.well-known/|sitemap|sitemap\\.xml|robots\\.txt|manifest|favicon\\.ico|.*\\..*).*)',
  ],
}
