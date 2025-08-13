import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

import { mockVisits } from '@/lib/mockData'
import { getAnalyticsSummary } from '@/lib/analytics/tracker'

function getJwtSecret() {
  const s = process.env.JWT_SECRET
  if (!s) throw new Error('JWT_SECRET is not set')
  return new TextEncoder().encode(s)
}

export async function GET(request: NextRequest) {
  // Guard protect
  // get token from cookie
  const token = request.cookies.get('admin-auth')?.value
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  //Checking the validity of the token
  try {
    const secret = getJwtSecret()
    const { payload } = await jwtVerify(token, secret,{ algorithms: ['HS256'] })

    //for demo fake data
    if (payload.isDemo) {
      const summary = { totalVisits: 138, uniqueVisitors: 97, avgDuration: 112 }
      return NextResponse.json({ summary, visits: mockVisits })
    }

    //parallel make quieries to the DB
    const { summary, visits } = await getAnalyticsSummary()
    return NextResponse.json({ summary, visits })

  } catch (error) {
    console.error('Authentication error:', error)
    return NextResponse.json({ message: 'Unauthorized: Invalid token' }, { status: 401 })
  }
}