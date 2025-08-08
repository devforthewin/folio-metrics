import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const DEFAULT_LOCALE = 'en'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('admin-auth')?.value

  const { pathname } = request.nextUrl

  //Check if the current page is a protected admin page
  const isAdminPage = pathname.startsWith('/admin') && pathname !== '/admin/login'

  //if there is no token and the page is not protected
  if (isAdminPage && !authToken) {
    // create an absolute URL for redirect
    const loginParh = new URL('/admin/login', request.url)
    return NextResponse.redirect(loginParh)
  }

  // Skipping anything that looks like Next.js files or service paths
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next()
  }

  //Check if locale is missing from path (for all public pages)
  const pathnameIsMissingLocale = /^\/(?!en|ru)(.*)/.test(pathname)
  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

//Run middleware on all paths except static files and api
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}