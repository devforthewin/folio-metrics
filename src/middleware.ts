import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const response = NextResponse.next()
  const start = Date.now()

  response.cookies.set('track-start', start.toString(), {
    httpOnly: true,
    sameSite: 'strict',
  })

  return response
}

export const config = {
  matcher: ['/((?!api|_next|favicon.ico|admin).*)'],
}