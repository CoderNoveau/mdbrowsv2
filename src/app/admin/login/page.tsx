'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ClientAuth } from '@/lib/client-auth';
import styles from './login.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Check if already authenticated
  useEffect(() => {
    if (ClientAuth.isAuthenticated()) {
      router.push('/admin');
    }
  }, [router]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await ClientAuth.login(credentials.username, credentials.password);

      if (result.success) {
        router.push('/admin');
        router.refresh();
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.loginHeader}>
          <h1>Admin Login</h1>
          <p>Melbourne Designer Brows Management System</p>
        </div>
        
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}
          
          <div className={styles.securityNotice}>
            <p>🔒 Secure Admin Access</p>
            <ul>
              <li>Maximum 5 login attempts per minute</li>
              <li>Session expires after 8 hours</li>
              <li>All activity is logged and monitored</li>
            </ul>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
              autoComplete="username"
              placeholder="Enter username"
            />
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
              autoComplete="current-password"
              placeholder="Enter password"
            />
          </div>
          
          <button 
            type="submit" 
            className={styles.loginButton}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}