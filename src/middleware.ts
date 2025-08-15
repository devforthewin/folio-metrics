// middleware.ts
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

// --- настройки из твоего проекта
const LOCALES = ['en', 'ru', 'ro'] as const
const DEFAULT_LOCALE = 'ro'
const TRACKING_PARAMS = ['subid', 'fbclid', 'gclid'] as const
const COOKIE_MAX_AGE = 90 * 24 * 60 * 60 // 90 дней

// --- служебные константы
const ADMIN_ROOT = '/admin'
const ADMIN_LOGIN = '/admin/login'

const norm = (p: string) => (p !== '/' ? p.replace(/\/+$/, '') : '/')
const hasLocale = (p: string) => LOCALES.some(l => p === `/${l}` || p.startsWith(`/${l}/`))
const isHTMLNav = (req: NextRequest) =>
  req.method === 'GET' && (req.headers.get('accept') || '').includes('text/html')

// ассеты/служебные пути, которые НИКОГДА не должны попадать под i18n/админ-редиректы
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

  // 0) ассеты/api — пропускаем сразу
  if (isAsset(pathname) || pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  // 1) Нормализация: /{locale}/admin* -> /admin*
  //    (делаем ПЕРЕД любой авторизацией/локалями)
  const localeAdmin = pathname.match(new RegExp(`^/(${LOCALES.join('|')})(/${ADMIN_ROOT.slice(1)}(?:/.*)?$)`))
  if (localeAdmin) {
    const url = req.nextUrl.clone()
    url.pathname = localeAdmin[2] // '/admin' или '/admin/...'
    return NextResponse.redirect(url)
  }

  // 2) Ветка админки
  const nPath = norm(pathname)
  const inAdmin = nPath === ADMIN_ROOT || nPath.startsWith(`${ADMIN_ROOT}/`)
  const onLogin = nPath === ADMIN_LOGIN
  const token = req.cookies.get('admin-auth')?.value ?? null

  if (inAdmin || onLogin) {
    // ассеты/данные внутри админки (JS, CSS, data) — пропускаем
    if (!isHTMLNav(req)) return NextResponse.next()

    // /admin/login
    if (onLogin) {
      if (token) {
        const to = req.nextUrl.clone()
        to.pathname = ADMIN_ROOT
        to.search = ''
        return NextResponse.redirect(to)
      }
      return NextResponse.next()
    }

    // /admin* требует токен
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = ADMIN_LOGIN
      url.search = `?next=${encodeURIComponent(pathname + search)}`
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  // 3) Публичная зона — выставим tracking-cookies, если есть subid/gclid/fbclid
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

  // 4) Публичная i18n — добавляем префикс ТОЛЬКО здесь
  if (!hasLocale(pathname)) {
    const url = req.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
    return NextResponse.redirect(url)
  }

  return res
}

// Матчер — дополнительно отсекаем статику/иконки/аплоады/сайтмапы/robots/etc
export const config = {
  matcher: [
    '/((?!_next/|uploads/|icon/|api/|\\.well-known/|sitemap|sitemap\\.xml|robots\\.txt|manifest|favicon\\.ico|.*\\..*).*)',
  ],
}
