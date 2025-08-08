import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

import { mockVisits } from '@/lib/mockData'
import { getAnalyticsSummary } from '@/lib/analytics/tracker'

export async function GET(request: NextRequest) {
  // Guard protect
  // get token from cookie
  const token = request.cookies.get('admin-auth')?.value
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }
  //Checking the validity of the token
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    const { payload } = await jwtVerify(token, secret)

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