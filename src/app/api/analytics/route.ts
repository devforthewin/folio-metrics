import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

import { getAnalyticsSummary } from '@/lib/analytics/tracker'
import { mockVisits } from '@/lib/mockData'

function getJwtSecret() {
  const s = process.env.JWT_SECRET
  if (!s) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(s)
}

export async function GET(request: NextRequest) {
  const token = request.cookies.get('admin-auth')?.value
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  let payload: any
  try {
    const { payload: p } = await jwtVerify(token, getJwtSecret(), { algorithms: ['HS256'] })
    payload = p
  } catch {
    return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 })
  }

  if (payload?.isDemo) {
    const summary = { totalVisits: 138, uniqueVisitors: 97, avgDuration: 112 }
    return NextResponse.json({ summary, visits: mockVisits }, { headers: { 'Cache-Control': 'no-store' } })
  }

  try {
    const { summary, visits } = await getAnalyticsSummary()
    return NextResponse.json({ summary, visits }, { headers: { 'Cache-Control': 'no-store' } })
  } catch (err: any) {
    if (err?.code === 'P2021') {
      return NextResponse.json(
        { message: 'Database not initialized: table Visit is missing' },
        { status: 503 }, // сервис временно недоступен/не инициализирован
      )
    }
    console.error('Analytics error:', err)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
