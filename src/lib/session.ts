import { auth } from "@/lib/auth-config"
import { redirect } from "next/navigation"

export async function getServerSession() {
  return await auth()
}

export async function requireAdminAuth() {
  const session = await getServerSession()
  
  if (!session?.user || session.user.role !== 'admin') {
    redirect('/admin/login')
  }
  
  return session
}

export async function getAdminSession() {
  const session = await getServerSession()
  
  if (!session?.user || session.user.role !== 'admin') {
    return null
  }
  
  return session
}

// Client-side session hook
export function useAdminSession() {
  // This would typically use useSession from next-auth/react
  // For now, we'll implement a basic version
  return {
    data: null,
    status: 'loading'
  }
}