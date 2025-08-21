'use client'

import useSWR from 'swr'

import StatCard from '@/components/features/admin/StatCard'
import VisitsTable from '@/components/features/admin/VisitsTable'
import { fetcher } from '@/lib/fetcher'

export default function AdminDashboard() {
  const { data, error, isLoading } = useSWR('/api/analytics', fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
    shouldRetryOnError: false, // 401 don't spin in circles
  })
  console.log('next-intl/config ->', require.resolve('next-intl/config'));

  if (error) {
    return (
      <div className="p-8 text-red-500">
        {error.status === 401
          ? 'Session expired. Redirecting to login...'
          : 'Failed to load analytics data. Please try again.'}
      </div>
    )
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard
          title="Total Visits" value={data?.summary?.totalVisits ?? '...'}
          isLoading={isLoading} />
        <StatCard
          title="Unique Visitors" value={data?.summary?.uniqueVisitors ?? '...'}
          isLoading={isLoading} />
        <StatCard
          title="Avg. Session Duration"
          value={data ? `${(data.summary.avgDuration / 1000).toFixed(1)}s` : '...'}
          isLoading={isLoading}
        />
      </div>
      <VisitsTable visits={data?.visits ?? []} isLoading={isLoading} />
    </div>
  )
}
