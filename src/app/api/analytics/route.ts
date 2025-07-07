import { NextRequest } from 'next/server'

import { trackVisit } from '@/lib/analytics/tracker'

export async function POST(req: NextRequest) {
  await trackVisit(req)
  return new Response('Tracked', {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
    },
  })
}