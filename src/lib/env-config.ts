import bcrypt from 'bcryptjs';

// Environment configuration with validation
export const ENV_CONFIG = {
  // Security
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || generateRandomSecret(),
  NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  
  // Admin Configuration
  ADMIN_USERNAME: process.env.ADMIN_USERNAME || 'admin',
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || 'admin@mdbrows.com.au',
  ADMIN_PASSWORD_HASH: process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('changeme123!', 12),
  
  // API Keys
  GOOGLE_PLACES_API_KEY: process.env.GOOGLE_PLACES_API_KEY,
  GOOGLE_PLACE_ID: process.env.GOOGLE_PLACE_ID,
  INSTAGRAM_ACCESS_TOKEN: process.env.INSTAGRAM_ACCESS_TOKEN,
  FACEBOOK_PAGE_TOKEN: process.env.FACEBOOK_PAGE_TOKEN,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  
  // Analytics
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  
  // Security Settings
  SESSION_MAX_AGE: parseInt(process.env.SESSION_MAX_AGE || '28800'), // 8 hours
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX || '5'),
  
  // Application
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
};

function generateRandomSecret(): string {
  if (ENV_CONFIG.IS_PRODUCTION) {
    throw new Error('NEXTAUTH_SECRET must be set in production');
  }
  
  // Generate a random secret for development
  return Array.from({ length: 32 }, () => 
    Math.random().toString(36).charAt(2)
  ).join('');
}

// Validation functions
export function validateEnvironment(): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (ENV_CONFIG.IS_PRODUCTION) {
    if (!process.env.NEXTAUTH_SECRET) {
      errors.push('NEXTAUTH_SECRET is required in production');
    }
    
    if (!process.env.NEXTAUTH_URL) {
      errors.push('NEXTAUTH_URL is required in production');
    }
    
    if (ENV_CONFIG.ADMIN_PASSWORD_HASH === bcrypt.hashSync('changeme123!', 12)) {
      errors.push('Default admin password must be changed in production');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Password utilities
export function generateSecurePassword(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const length = 16;
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return password;
}

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Logging utility
export function logSecurityEvent(event: string, details: any = {}) {
  if (ENV_CONFIG.IS_PRODUCTION) {
    // In production, send to your logging service
    console.log(JSON.stringify({
      timestamp: new Date().toISOString(),
      event,
      details,
      level: 'security'
    }));
  } else {
    console.log(`[SECURITY] ${event}:`, details);
  }
}