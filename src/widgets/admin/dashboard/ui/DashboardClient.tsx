'use client'

import { DashboardInitialState } from '../model'

import { AnalyticsChartsAsync } from './analytics'
import { SummaryCards } from './SummaryCards'
import { VisitsTable } from './visits-table'

type Props = {
  initialState: DashboardInitialState
}

export function DashboardClient({ initialState }: Props) {
  const { data, range } = initialState

  return (
    <div className="space-y-8">
      <SummaryCards summary={data.summary} />
      <AnalyticsChartsAsync
        initialRange={range}
        initialDaily={data.dailyActivity}
        initialSections={data.sectionStats}
      />
      <VisitsTable visits={data.recentVisits} />
    </div>
  )
}