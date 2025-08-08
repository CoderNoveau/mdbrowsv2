// Simple authentication for admin panel
// In production, consider using NextAuth.js or similar

import { cookies } from 'next/headers';

// In production, store these securely (environment variables, database)
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || 'admin',
  // This should be a hashed password in production
  passwordHash: process.env.ADMIN_PASSWORD_HASH || hashPassword('changeme123!'),
};

const SESSION_COOKIE_NAME = 'mdbrows_admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function hashPassword(password: string): string {
  // Simple hash function for demo - in production use bcrypt or argon2
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
}

export async function verifyCredentials(username: string, password: string): Promise<boolean> {
  return (
    username === ADMIN_CREDENTIALS.username &&
    hashPassword(password) === ADMIN_CREDENTIALS.passwordHash
  );
}

export async function createSession(username: string): Promise<string> {
  // Generate a random session ID without crypto module
  const sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36);
  const sessionData = {
    username,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_DURATION,
  };
  
  // In production, store this in a database or Redis
  // For now, we'll encode it in the cookie itself
  const encodedSession = Buffer.from(JSON.stringify(sessionData)).toString('base64');
  
  return `${sessionId}.${encodedSession}`;
}

export async function setSessionCookie(sessionToken: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SESSION_DURATION / 1000, // Convert to seconds
    path: '/',
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(SESSION_COOKIE_NAME);
  
  if (!sessionToken) {
    return null;
  }
  
  try {
    const [sessionId, encodedData] = sessionToken.value.split('.');
    const sessionData = JSON.parse(Buffer.from(encodedData, 'base64').toString());
    
    if (sessionData.expiresAt < Date.now()) {
      return null;
    }
    
    return sessionData;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    throw new Error('Unauthorized');
  }
  return session;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}