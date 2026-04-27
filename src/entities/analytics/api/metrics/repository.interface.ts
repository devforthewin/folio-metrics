import type { VisitData } from '../../model/types'

export interface IMetricsRepository {
  save(data: VisitData): Promise<void>
  getAll(): Promise<VisitData[]>
}