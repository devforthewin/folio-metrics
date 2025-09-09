import SignOutButton from '@/app/(admin)/admin/SignOutButton'
import { auth } from '@/auth'

export default async function AdminDashboardPage(){
  const session = await auth()

  //todo: Access Denied Page
  if(!session?.user) {
    return <div className="h-screen w-screen bg-[#FBE1D0] flex items-center justify-center color-[#F67769] text-lg"> Access Denied!!! </div>
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">
          ✨ Welcome to the Admin Panel!
        </h1>
        <p className="mb-6 text-gray-600">
          You login as: <strong className="text-blue-600">{session.user.email}</strong>
        </p>
        {/* Logout Interactive Button ( client component)*/}
        <SignOutButton/>
      </div>
    </div>
  )
}