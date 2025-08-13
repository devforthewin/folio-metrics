import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'

function getJwtSecret() {
  const s = process.env.JWT_SECRET
  if (!s) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(s)
}

function isHttps(req: NextRequest) {
  const xfProto = req.headers.get('x-forwarded-proto')
  if (xfProto) return xfProto.split(',')[0].trim() === 'https'
  return req.nextUrl.protocol === 'https:'
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()
  const { ADMIN_USER, ADMIN_PASS, DEMO_USER, DEMO_PASS } = process.env

  const isAdmin = email === ADMIN_USER && password === ADMIN_PASS
  const isDemo = email === DEMO_USER && password === DEMO_PASS

  if (!isAdmin && !isDemo) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  try {
    const token = await new SignJWT({
      email,
      isDemo,
      role: 'admin',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h')
      .sign(getJwtSecret())

    const res = NextResponse.json({ message: 'Login successful' })

    res.cookies.set('admin-auth', token, {
      httpOnly: true,
      secure: isHttps(request), // in dev on http will be false -> cookie will not fall off
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 2, // 2 ours (ms!)
    })

    return res
  } catch (error) {
    console.error('JWT Signing Error:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}