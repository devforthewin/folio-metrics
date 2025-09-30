import { Visit } from '@prisma/client'

type VisitsTableProps = {
  visits: Visit[]
  isLoading: boolean
}

// formatting duration
const formatDuration = (ms: number | null) => {
  if (ms === null) return 'N/A'
  return `${(ms / 1000).toFixed(1)}s`
}

export default function VisitsTable({ visits, isLoading }: VisitsTableProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow mt-8">
      <h3 className="text-lg font-semibold mb-4">Last 50 Visits</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Section
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {isLoading ? (
              // table
              <tr>
                <td colSpan={4} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              visits.map((visit) => (
                <tr key={visit.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{visit.sectionId}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {visit.city}, {visit.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDuration(visit.duration)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(visit.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
            {!isLoading && visits.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No visits recorded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
