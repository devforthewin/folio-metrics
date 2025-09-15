import { prisma } from '@/lib/db'

interface VisitData {
  sectionId: string
  duration: number
  ipAddress: string
  userAgent: string
  country: string
  city: string
}

export async function trackVisit(data: VisitData) {
  try {
    await prisma.visit.create({
      data: {
        sectionId: data.sectionId,
        country: data.country,
        city: data.city,
        ipAddress: data.ipAddress,
        userAgent: data.userAgent,
        duration: data.duration,
      },
    })
  } catch (error) {
    console.error('Visit tracking failed:', error)
  }
}

export async function getAnalyticsSummary() {
  const [totalVisits, uniqueVisitorsByIp, avgDurationResult, visits] = await Promise.all([
    prisma.visit.count(),
    prisma.visit.groupBy({ by: ['ipAddress'] }),
    prisma.visit.aggregate({ _avg: { duration: true } }),
    prisma.visit.findMany({ orderBy: { createdAt: 'desc' }, take: 50 }),
  ])

  return {
    summary: {
      totalVisits,
      uniqueVisitors: uniqueVisitorsByIp.length,
      avgDuration: Math.round(avgDurationResult._avg.duration || 0),
    },
    visits,
  }
}
