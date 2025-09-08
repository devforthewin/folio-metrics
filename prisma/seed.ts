import { PrismaClient, type Visit } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

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

async function main() {
  console.log('Seeding start...')
  console.log('Deleted old visits...')
  await prisma.visit.deleteMany({})
  await prisma.user.deleteMany({ where: { email: process.env.DEMO_USER } })

  console.log(`Create ${mockVisits.length} new visits...`)
  await prisma.visit.createMany({
    data: mockVisits,
  })

  console.log('Successfully created visits!')

  console.log('Create demo user...')
  const hashedPassword = await bcrypt.hash(process.env.DEMO_PASS!, 10)
  await prisma.user.create({
    data: {
      email: process.env.DEMO_USER!,
      password: hashedPassword,
    },
  })
}

main()
  .catch((e) => {
    console.error('Seeding mistakes:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })