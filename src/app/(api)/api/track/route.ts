import { NextRequest } from 'next/server'

import { trackVisit } from '@/lib/analytics/tracker'

export async function POST(req: NextRequest) {
  try {
    // receive the data sent by useSectionObserver via sendBeacon
    const { sectionId, duration } = await req.json()

    // receive server data
    const geo = req.geo || {}
    const city = geo.city || 'Unknown'
    const country = geo.country || 'Unknown'

    const ip = req.ip || '127.0.0.1'
    const userAgent = req.headers.get('user-agent') || 'Unknown'

    // call tracking function with the full data set
    await trackVisit({
      sectionId,
      duration,
      ipAddress: ip,
      userAgent,
      country,
      city,
    })

    // successful response
    return new Response('Tracked', {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('API Track Error:', error)
    return new Response('Error processing request', { status: 400 })
  }
}