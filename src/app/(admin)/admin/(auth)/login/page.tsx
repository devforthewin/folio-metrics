'use client'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const demoEmail = searchParams.get('email')
    const demoPassword = searchParams.get('password')
    if (demoEmail && demoPassword) {
      setEmail(demoEmail)
      setPassword(demoPassword)
    }
  }, [searchParams])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      })

      if(result?.error) {
        setError('Incorrect email address or password.')
        setIsLoading(false)
      } else {
        router.push('/admin')
      }
    } catch (err) {
      setError('An unexpected error occurred')
      setIsLoading(false)
    }
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
    </main>
  )
}