'use client'

import { useAnalytics } from '@/features/admin/analytics/provider'

export function useTrackSectionVisit() {
  const { trackSectionVisit } = useAnalytics()
  return trackSectionVisit
}