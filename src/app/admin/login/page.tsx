'use client';

import { useState } from 'react';
import { signIn, getSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './login.module.css';

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Get error from URL params (NextAuth error handling)
  const urlError = searchParams.get('error');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await signIn('credentials', {
        username: credentials.username,
        password: credentials.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
      } else if (result?.ok) {
        // Wait for session to be established
        const session = await getSession();
        if (session) {
          router.push('/admin');
          router.refresh();
        }
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
          {(error || urlError) && (
            <div className={styles.errorMessage}>
              {error || urlError}
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