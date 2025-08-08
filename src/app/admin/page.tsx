import { redirect } from 'next/navigation';
import { requireAdminAuth } from '@/lib/session';
import AdminDashboard from './AdminDashboard';

export default async function AdminPage() {
  const session = await requireAdminAuth();
  
  return <AdminDashboard session={session} />;
}