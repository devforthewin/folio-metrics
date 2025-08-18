'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lang, setLang] = useState<'ro' | 'en' | 'ru'>('ro')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) throw new Error('Invalid email or password.')

      router.push('/admin')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLangChange = (value: 'ro' | 'en' | 'ru') => {
    setLang(value)
    // если нужно переключать локаль — раскомментируйте и подставьте нужный роут:
    // router.replace(`/${value}/admin/login`)
  }

  return (
    <main className="h-screen w-screen bg-[#FBE1D0] flex items-center justify-center p-4">
      <div className="relative w-full max-w-[450px] bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Admin Panel Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#F67769] focus:border-[#F67769]"
              placeholder="demo@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full rounded-md border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#F67769] focus:border-[#F67769]"
              placeholder="demo123"
            />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            disabled={isLoading}
            className="mx-auto block rounded-md bg-[#F67769] px-6 py-2 font-semibold text-white
                       hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F67769]
                       disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
      {/* Переключатель языка — снизу справа враппера */}
      <div className="absolute right-4 bottom-4">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Language:</span>
          <div className="inline-flex overflow-hidden rounded-md border border-gray-300">
            {(['ro', 'en', 'ru'] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => handleLangChange(code)}
                className={`px-3 py-1.5 ${
                  lang === code
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}