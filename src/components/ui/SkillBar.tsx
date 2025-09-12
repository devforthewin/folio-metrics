'use client'

import { useState, useEffect } from 'react'

type SkillBarProps = {
  name: string
  level: 1 | 2 | 3 | 4 | 5
}

export default function SkillBar({ name, level }: SkillBarProps) {
  const [filledLength, setFilledLength] = useState(0)

  const totalLength = 5

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += 1
      if (current > level) {
        clearInterval(interval)
      } else {
        setFilledLength(current)
      }
    }, 10)
    return () => clearInterval(interval)
  }, [level])

  const blocks = Array.from({ length: totalLength }).map((_, idx) => (
    <span
      key={idx}
      className={`text-lg ${
        idx < filledLength ? 'text-[#F67769]' : 'text-gray-300'
      }`}
    >
      •
    </span>
  ))

  return (
    <div className="mb-2 font-mono text-sm text-gray-800 flex items-center justify-between">
      <span>{name}</span>
      <span className="flex items-center gap-2">
        <span>[</span>
        <span className="flex gap-1">{blocks}</span>
        <span>]</span>
      </span>
    </div>
  )
}
