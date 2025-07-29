import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Оставляем API, админку и файлы без изменений
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale = /^\/(?!en|ru)(.*)/.test(pathname)
  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/((?!api|_next|favicon.ico|admin).*)'],
}

// matcher: ['/((?!api|_next/static|_next/image|admin|favicon.ico).*)'],
