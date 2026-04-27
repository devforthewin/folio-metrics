// runtime: Node.js
import { PrismaMetricsRepository } from './prisma.repository'
import { NoopMetricsRepository } from './noop.repository'
import { HttpMetricsRepository } from './http.repository'
import { LocalStorageMetricsRepository } from './local-storage.repository'

export function createServerMetricsRepository() {
  const mode = process.env.ANALYTICS_MODE || 'demo'

  return mode === 'prod'
    ? new PrismaMetricsRepository()
    : new NoopMetricsRepository()
}

// runtime: Browser
export function createClientMetricsRepository() {
  const mode = process.env.NEXT_PUBLIC_ANALYTICS_MODE || 'demo'

  return mode === 'prod'
    ? new HttpMetricsRepository()
    : new LocalStorageMetricsRepository()
}