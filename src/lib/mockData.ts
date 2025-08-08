import { Visit } from '@prisma/client'

// I use the Visit type from Prisma so that our fake data
// matches the real structure exactly
export const mockVisits: Omit<Visit, 'id'>[] = [
  {
    sectionId: 'experience',
    country: 'USA',
    city: 'San Francisco',
    ipAddress: '192.168.1.1',
    userAgent: 'Desktop, Chrome',
    duration: 125000, // ms
    createdAt: new Date('2025-08-06T10:00:00Z'),
  },
  {
    sectionId: 'adds',
    country: 'Germany',
    city: 'Berlin',
    ipAddress: '10.0.0.1',
    userAgent: 'Mobile, Safari',
    duration: 80000,
    createdAt: new Date('2025-08-07T12:30:00Z'),
  },
  {
    sectionId: 'skills',
    country: 'France',
    city: 'Paris',
    ipAddress: '172.16.0.1',
    userAgent: 'Desktop, Firefox',
    duration: 210000,
    createdAt: new Date('2025-08-07T14:45:00Z'),
  },
  {
    sectionId: 'experience',
    country: 'USA',
    city: 'San Francisco',
    ipAddress: '192.168.1.1',
    userAgent: 'Desktop, Chrome',
    duration: 125000, // ms
    createdAt: new Date('2025-08-06T10:00:00Z'),
  },
  {
    sectionId: 'adds',
    country: 'Germany',
    city: 'Berlin',
    ipAddress: '10.0.0.1',
    userAgent: 'Mobile, Safari',
    duration: 80000,
    createdAt: new Date('2025-08-07T12:30:00Z'),
  },
  {
    sectionId: 'skills',
    country: 'France',
    city: 'Paris',
    ipAddress: '172.16.0.1',
    userAgent: 'Desktop, Firefox',
    duration: 210000,
    createdAt: new Date('2025-08-07T14:45:00Z'),
  },
  {
    sectionId: 'experience',
    country: 'USA',
    city: 'San Francisco',
    ipAddress: '192.168.1.1',
    userAgent: 'Desktop, Chrome',
    duration: 125000, // ms
    createdAt: new Date('2025-08-06T10:00:00Z'),
  },
  {
    sectionId: 'adds',
    country: 'Germany',
    city: 'Berlin',
    ipAddress: '10.0.0.1',
    userAgent: 'Mobile, Safari',
    duration: 80000,
    createdAt: new Date('2025-08-07T12:30:00Z'),
  },
  {
    sectionId: 'skills',
    country: 'France',
    city: 'Paris',
    ipAddress: '172.16.0.1',
    userAgent: 'Desktop, Firefox',
    duration: 210000,
    createdAt: new Date('2025-08-07T14:45:00Z'),
  },
]