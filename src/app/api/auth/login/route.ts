// app/api/admin/login/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'

function getJwtSecret() {
  const s = process.env.JWT_SECRET
  if (!s) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(s)
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  const { ADMIN_USER, ADMIN_PASS, DEMO_USER, DEMO_PASS } = process.env

  const ok =
    (email === ADMIN_USER && password === ADMIN_PASS) ||
    (email === DEMO_USER && password === DEMO_PASS)

  if (!ok) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  const token = await new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(getJwtSecret())

  const res = NextResponse.redirect(new URL('/admin', request.url), { status: 303 })
  res.cookies.set('admin-auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production', // в dev без Secure
    path: '/',
    maxAge: 60 * 60 * 2, // секунды
  })
  res.headers.set('Cache-Control', 'no-store')
  return res
}
