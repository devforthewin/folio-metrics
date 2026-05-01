import { trackVisitSchema } from './visit.schema'

type InvalidPayloadCase = [
  name: string,
  payload: Record<string, unknown>,
  expectedErrorPath: string,
]

describe('trackVisitSchema', () => {
  describe('Valid cases', () => {
    it('accepts a valid visit payload', () => {
      const payload = {
        sectionId: 'hero',
        duration: 1500,
        timestamp: 1714300000000,
        visitorId: 'visitor-1',
        country: 'MD',
        city: 'Chisinau',
      }

      const result = trackVisitSchema.safeParse(payload)

      expect(result.success).toBe(true)
    })

    it('accepts payload without optional fields', () => {
      const payload = {
        sectionId: 'hero',
        duration: 1500,
        visitorId: 'visitor-1',
      }

      const result = trackVisitSchema.safeParse(payload)

      expect(result.success).toBe(true)
    })

    it('accepts timestamp equal to 0', () => {
      const payload = {
        sectionId: 'hero',
        duration: 1500,
        timestamp: 0,
        visitorId: 'visitor-1',
      }
      const result = trackVisitSchema.safeParse(payload)
      expect(result.success).toBe(true)
    })
  })

  describe('Invalid cases', () => {
    it.each<InvalidPayloadCase>([
      ['empty sectionId', { sectionId: '', duration: 1000, visitorId: 'visitor-1' }, 'sectionId'],
      ['missing sectionId', { duration: 1000, visitorId: 'v-1' }, 'sectionId'],

      ['negative duration', { sectionId: 'hero', duration: -1, visitorId: 'visitor-1' }, 'duration'],
      ['float duration', { sectionId: 'hero', duration: 10.5, visitorId: 'visitor-1' }, 'duration'],
      ['string duration', { sectionId: 'hero', duration: '1000', visitorId: 'v-1' }, 'duration'],
      ['missing duration', { sectionId: 'hero', visitorId: 'v-1' }, 'duration'],

      ['empty visitorId', { sectionId: 'hero', duration: 1000, visitorId: '' }, 'visitorId'],

      ['float timestamp', { sectionId: 'hero', duration: 1000, timestamp: 10.5, visitorId: 'visitor-1' }, 'timestamp'],
      [
        'string timestamp',
        {
          sectionId: 'hero',
          duration: 1000,
          timestamp: '1714300000000',
          visitorId: 'v-1',
        },
        'timestamp',
      ],
    ])('rejects invalid payload: %s', (_, payload, expectedErrorPath) => {
      const result = trackVisitSchema.safeParse(payload)

      expect(result.success).toBe(false)

      if (!result.success) {
        const errorPaths = result.error.issues.map((issue) => issue.path[0])
        expect(errorPaths).toContain(expectedErrorPath)
      }
    })
  })
})