export class FetchError extends Error {
  info: any
  status: number

  constructor(message: string, info: any, status: number) {
    super(message)
    this.info = info
    this.status = status
  }
}

export const fetcher = async (url: string) => {
  const res = await fetch(url, {
    credentials: 'include', // guarantee sending cookies
    cache: 'no-store', //exclude cache artifacts
  })

  // centralized processing 401
  if (res.status === 401) {
    // optional: you can pull the logout or clear local storages
    if (typeof window !== 'undefined') {
      window.location.href = '/admin/login'
    }
    throw new FetchError('Unauthorized', await res.json().catch(() => ({})), 401)
  }

  if (!res.ok) {
    const info = await res.json().catch(() => ({}))
    throw new FetchError('An error occurred while fetching the data.', info, res.status)
  }

  return res.json()
}
