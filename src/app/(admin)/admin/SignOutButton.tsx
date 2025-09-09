'use client'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })} // Logout and redirect to main
      className="rounded-md bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600"
    >
      Выйти
    </button>
  )
}