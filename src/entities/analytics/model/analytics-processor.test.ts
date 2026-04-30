import { AnalyticsProcessor } from '@/entities/analytics/model/analytics-processor'

import { VisitData } from './types'

const mockTimestamp = 1777420800000

const createVisit = (overrides: Partial<VisitData> = {}): VisitData => ({
  sectionId: 'hero',
  duration: 1000,
  timestamp: mockTimestamp,
  visitorId: 'visitor - 1',
  ...overrides,
})

describe('AnalyticsProcessor', () => {
  afterEach(() => {
    jest.restoreAllMocks()
    jest.useRealTimers()
  })

  describe('filterByRange', () => {
    beforeEach(() => {
      jest.useFakeTimers()
      jest.setSystemTime(new Date('2026-04-28T12:00:00.000Z'))
    })

    it('return all visits when range is 0', () => {
      const visits = [
        createVisit({ sectionId: 'hero' }),
        createVisit({ sectionId: 'projects' }),
      ]

      expect(AnalyticsProcessor.filterByRange(visits, 0)).toBe(visits)
    })
    it('filters visits by the provided day range', () => {
      const now = Date.now()
      const oneDay = 24 * 60 * 60 * 1000

      const visits = [
        createVisit({ sectionId: 'exact-boundary', timestamp: now - 7 * oneDay }),
        createVisit({ sectionId: 'inside-range', timestamp: now - oneDay }),
        createVisit({ sectionId: 'outside-range', timestamp: now - 10 * oneDay }),
      ]

      const result = AnalyticsProcessor.filterByRange(visits, 7)

      expect(result).toEqual([
        expect.objectContaining({ sectionId: 'exact-boundary' }),
        expect.objectContaining({ sectionId: 'inside-range' }),
      ])
    })
  })

  describe('calculateSummary', () => {
    it('calculates total visits, unique visitors and average duration in seconds', () => {
      const visits = [
        createVisit({ visitorId: 'visitor-1', duration: 1000 }),
        createVisit({ visitorId: 'visitor-1', duration: 3000 }),
        createVisit({ visitorId: 'visitor-2', duration: 5000 }),
      ]

      expect(AnalyticsProcessor.calculateSummary(visits)).toEqual({
        totalVisits: 3,
        uniqueVisitors: 2,
        avgDuration: 3,
      })
    })

    it('returns zero values for empty data', () => {
      expect(AnalyticsProcessor.calculateSummary([])).toEqual({
        totalVisits: 0,
        uniqueVisitors: 0,
        avgDuration: 0,
      })
    })

    it('rounds average duration to the nearest whole second', () => {
      // 10000 / 3 = 3333.33ms -> 3.33s -> to 3
      const visitsRoundDown = [
        createVisit({ duration: 4000 }),
        createVisit({ duration: 3000 }),
        createVisit({ duration: 3000 }),
      ]
      expect(AnalyticsProcessor.calculateSummary(visitsRoundDown).avgDuration).toBe(3)

      // 11000 / 3 = 3666.66ms -> 3.66s -> to 4
      const visitsRoundUp = [
        createVisit({ duration: 5000 }),
        createVisit({ duration: 3000 }),
        createVisit({ duration: 3000 }),
      ]
      expect(AnalyticsProcessor.calculateSummary(visitsRoundUp).avgDuration).toBe(4)
    })

  })

  describe('calculateDailyActivity', () => {
    it('groups visits by day and sorts days ascending', () => {
      const visits = [
        createVisit({ timestamp: new Date('2026-04-28T10:00:00.000Z').getTime() }),
        createVisit({ timestamp: new Date('2026-04-27T10:00:00.000Z').getTime() }),
        createVisit({ timestamp: new Date('2026-04-28T12:00:00.000Z').getTime() }),
      ]

      expect(AnalyticsProcessor.calculateDailyActivity(visits)).toEqual([
        { day: '2026-04-27', count: 1 },
        { day: '2026-04-28', count: 2 },
      ])
    })
    it('returns an empty array when provided with empty data', () => {
      expect(AnalyticsProcessor.calculateDailyActivity([])).toEqual([])
    })
  })

  describe('calculateSectionStats', () => {
    it('groups visits by section id', () => {
      const visits = [
        createVisit({ sectionId: 'hero' }),
        createVisit({ sectionId: 'hero' }),
        createVisit({ sectionId: 'projects' }),
      ]

      const result = AnalyticsProcessor.calculateSectionStats(visits)

      expect(result).toHaveLength(2)
      expect(result).toEqual(
        expect.arrayContaining([
          { sectionId: 'hero', count: 2 },
          { sectionId: 'projects', count: 1 },
        ]),
      )
    })
  })

  describe('sortAndSlice', () => {
    it('sorts visits by timestamp descending and limits result size', () => {
      const visits = [
        createVisit({ sectionId: 'old', timestamp: 1000 }),
        createVisit({ sectionId: 'new', timestamp: 3000 }),
        createVisit({ sectionId: 'middle', timestamp: 2000 }),
      ]

      const result = AnalyticsProcessor.sortAndSlice(visits, 2)

      expect(result.map((visit) => visit.sectionId)).toEqual(['new', 'middle'])
    })

    it('uses section id as a stable tie-breaker when timestamps are equal', () => {
      const visits = [
        createVisit({ sectionId: 'projects', timestamp: 1000 }),
        createVisit({ sectionId: 'hero', timestamp: 1000 }),
      ]

      const result = AnalyticsProcessor.sortAndSlice(visits, 2)

      expect(result.map((visit) => visit.sectionId)).toEqual(['hero', 'projects'])
    })

    it('does not mutate the original array', () => {
      const visits = [
        createVisit({ sectionId: 'old', timestamp: 1000 }),
        createVisit({ sectionId: 'new', timestamp: 3000 }),
      ]

      AnalyticsProcessor.sortAndSlice(visits, 2)

      expect(visits.map((visit) => visit.sectionId)).toEqual(['old', 'new'])
    })

    it('filters out visits invalid timestamps', () => {
      const visits = [
        createVisit({ sectionId: 'valid', timestamp: 1000 }),
        createVisit({ sectionId: 'invalid', timestamp: NaN }),
        createVisit({ sectionId: 'infinity', timestamp: Infinity }),
      ]
      const result = AnalyticsProcessor.sortAndSlice(visits, 3)

      expect(result).toHaveLength(1)
      expect(result.map((visit) => visit.sectionId)).toEqual(['valid'])
    })

    it('keeps visits with timestamp 0', () => {
      const visits = [createVisit({ sectionId: 'epoch', timestamp: 0 })]
      const result = AnalyticsProcessor.sortAndSlice(visits, 1)
      expect(result).toHaveLength(1)
    })
  })
})