import { NextRequest } from 'next/server'

import { prisma } from '@/lib/db/prisma'

export async function trackVisit(req: NextRequest) {
  const start = parseInt(req.cookies.get('track-start')?.value || '0')
  const duration = Date.now() - start
  const geo = req.geo || {}

  try {
    await prisma.visit.create({
      data: {
        page: req.nextUrl.pathname,
        country: geo.country || 'Unknown',
        city: geo.city || 'Unknown',
        duration: duration > 0 ? duration : null,
      },
    })
  } catch (error) {
    console.error('Visit tracking failed:', error)
  }
}