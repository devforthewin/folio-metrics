'use client'

import { useState, useEffect } from 'react'

type SkillBarTextProps = {
  name: string
  percent: number
}

export default function SkillBarText({ name, percent }: SkillBarTextProps) {
  const [filledLength, setFilledLength] = useState(0)

  const totalLength = 11
  const targetLength = Math.round((percent / 100) * totalLength)

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += 1
      if (current > targetLength) {
        clearInterval(interval)
      } else {
        setFilledLength(current)
      }
    }, 20)
    return () => clearInterval(interval)
  }, [targetLength])

  const blocks = Array.from({ length: totalLength }).map((_, idx) => (
    <span
      key={idx}
      className={`text-lg ${
        idx < filledLength ? 'text-red-400' : 'text-gray-300'
      }`}
    >
      •
    </span>
  ))

  return (
    <div className="mb-2 font-mono text-sm text-gray-800 flex items-center">
      <span className="w-[130px]">{name}</span>
      <span className="flex items-center gap-[10px]">
        <span>[</span>
        <span className="flex gap-[2px]">{blocks}</span>
        <span>]</span>
      </span>
      <span className="ml-2">{percent}%</span>
    </div>
  )
}
