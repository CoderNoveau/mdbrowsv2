// Client-side authentication for static export compatibility
import bcrypt from 'bcryptjs';

interface AdminUser {
  username: string;
  email: string;
  passwordHash: string;
  role: string;
}

interface Session {
  user: AdminUser;
  expires: number;
  loginTime: number;
}

// Admin users - in production, this could be loaded from a secure config
const ADMIN_USERS: AdminUser[] = [
  {
    username: 'admin',
    email: 'admin@mdbrows.com.au',
    passwordHash: '$2a$12$LQv3c1yqBWVHxkd0LQ4YCOdJ1P.V3fQu1k3rOvGJ3qM8xhKMc9Ua6', // changeme123!
    role: 'admin'
  }
];

// Rate limiting for client-side
const rateLimitStore: { [key: string]: { count: number; resetTime: number } } = {};

function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const windowKey = `${key}_${Math.floor(now / windowMs)}`;
  
  if (!rateLimitStore[windowKey]) {
    rateLimitStore[windowKey] = { count: 0, resetTime: now + windowMs };
  }
  
  rateLimitStore[windowKey].count++;
  
  // Cleanup old entries
  Object.keys(rateLimitStore).forEach(k => {
    if (rateLimitStore[k].resetTime < now) {
      delete rateLimitStore[k];
    }
  });
  
  return rateLimitStore[windowKey].count <= limit;
}

// Session management
const SESSION_KEY = 'mdb_admin_session';
const SESSION_DURATION = 8 * 60 * 60 * 1000; // 8 hours

export class ClientAuth {
  static async login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Rate limiting - 5 attempts per minute
      const clientId = 'client'; // In a real app, use fingerprinting
      if (!checkRateLimit(clientId, 5, 60 * 1000)) {
        return { success: false, error: 'Too many login attempts. Please try again later.' };
      }

      // Find user
      const user = ADMIN_USERS.find(u => u.username === username);
      if (!user) {
        // Simulate hash check to prevent timing attacks
        await bcrypt.compare(password, '$2a$12$dummy.hash.for.timing.consistency');
        return { success: false, error: 'Invalid credentials' };
      }

      // Verify password
      const isValid = await bcrypt.compare(password, user.passwordHash);
      if (!isValid) {
        return { success: false, error: 'Invalid credentials' };
      }

      // Create session
      const session: Session = {
        user,
        expires: Date.now() + SESSION_DURATION,
        loginTime: Date.now()
      };

      // Store session
      if (typeof window !== 'undefined') {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
      }

      console.log(`Admin login successful: ${username}`);
      return { success: true };

    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'An error occurred during login' };
    }
  }

  static getSession(): Session | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const sessionData = sessionStorage.getItem(SESSION_KEY);
      if (!sessionData) return null;

      const session: Session = JSON.parse(sessionData);
      
      // Check if session is expired
      if (session.expires < Date.now()) {
        this.logout();
        return null;
      }

      return session;
    } catch {
      return null;
    }
  }

  static logout(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem(SESSION_KEY);
    }
  }

  static isAuthenticated(): boolean {
    return this.getSession() !== null;
  }

  static requireAuth(): Session {
    const session = this.getSession();
    if (!session) {
      throw new Error('Authentication required');
    }
    return session;
  }

  // Password utilities for admin setup
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  static generateSecurePassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const length = 16;
    
    let password = '';
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return password;
  }
}