import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const DEFAULT_LOCALE = 'en'
const LOCALES = new Set<string>(['en', 'ru'])

function splitPath(pathname: string) {
  // '/en/admin/stats' -> locale: 'en', rest: '/admin/stats'
  const segments = pathname.split('/').filter(Boolean)
  const maybeLocale = segments[0]
  const hasLocale = LOCALES.has(maybeLocale)
  const locale = hasLocale ? maybeLocale : null
  const rest = '/' + (hasLocale ? segments.slice(1).join('/') : segments.join('/'))
  return { locale, rest }
}

function isAdminPath(pathWithoutLocale: string) {
  return pathWithoutLocale === '/admin' || pathWithoutLocale.startsWith('/admin/')
}
function isAdminLoginPath(pathWithoutLocale: string) {
  return pathWithoutLocale === '/admin/login'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skipping anything that looks like Next.js files or service paths
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  // locale and path without locale
  const { locale, rest } = splitPath(pathname)
  const token = request.cookies.get('admin-auth')?.value ?? null

  // /admin/login to dashboard
  if (isAdminLoginPath(rest) && token) {
    const to = request.nextUrl.clone()
    to.pathname = `/${locale ?? DEFAULT_LOCALE}/admin`
    to.search = '' // clear login params
    return NextResponse.redirect(to)
  }

  // admin routes (except /admin/login) require a token for login
  if (isAdminPath(rest) && !isAdminLoginPath(rest) && !token) {
    const url = request.nextUrl.clone()
    url.pathname = `/${locale ?? DEFAULT_LOCALE}/admin/login`
    // Save the desired path (for post-login)
    const nextParam = encodeURIComponent(request.nextUrl.pathname + request.nextUrl.search)
    url.search = `?next=${nextParam}`
    return NextResponse.redirect(url)
  }

  //locale for public pages
  if (!locale && !isAdminPath(rest) && !isAdminLoginPath(rest)) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
    return NextResponse.redirect(url)
  }

  // skip the rest
  return NextResponse.next()
}
//Run middleware on all paths except static files and api
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}