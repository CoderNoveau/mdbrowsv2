'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ClientAuth } from '@/lib/client-auth';
import AdminDashboard from './AdminDashboard';

export default function AdminPage() {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentSession = ClientAuth.getSession();
    if (!currentSession) {
      router.push('/admin/login');
      return;
    }
    
    setSession(currentSession);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '1.2rem'
      }}>
        Loading admin dashboard...
      </div>
    );
  }
  
  if (!session) {
    return null;
  }
  
  return <AdminDashboard session={session} />;
}