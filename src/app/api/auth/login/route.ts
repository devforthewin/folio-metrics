import { NextRequest, NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  // Getting data from the request body
  const body = await request.json()
  const { email, password } = body

  const { ADMIN_USER, ADMIN_PASS, DEMO_USER, DEMO_PASS, JWT_SECRET } = process.env

  //Checking who is trying to log in: admin or demo user
  const isAdmin = email === ADMIN_USER && password === ADMIN_PASS
  const isDemo = email === DEMO_USER && password === DEMO_PASS

  if (!isAdmin && !isDemo) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
  }

  //Create a JWT token
  try {
    const secret = new TextEncoder().encode(JWT_SECRET)

    const token = await new SignJWT({
      email,
      isDemo, // Adding a demo mode flag to the token
      role: 'admin',
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h') // The token will be valid for 2 hours.
      .sign(secret)

    const response = NextResponse.json({ message: 'Login successful' })

    //Set the token to a secure httpOnly cookie
    response.cookies.set('admin-auth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/', // for all pages
      maxAge: 60 * 60 * 2, // 2 hours in ms
    })
    return NextResponse.json({ message: 'Login successful' }, { status: 200 })
  } catch (error) {
    console.error('JWT Signing Error:', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}