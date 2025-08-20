'use client'

type Action = { label: string; onClickHref?: string; onClick?: () => void }

export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div>
        <h1 className="text-xl font-semibold">FFFF</h1>
      </div>
    </div>
  )
}