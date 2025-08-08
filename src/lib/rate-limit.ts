import { NextRequest } from 'next/server'

interface RateLimitConfig {
  interval: number // Time window in milliseconds
  uniqueTokenPerInterval: number // Max requests per interval
}

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

// In-memory store for rate limiting
// In production, use Redis or a proper database
const store: RateLimitStore = {}

export function rateLimit(config: RateLimitConfig) {
  return {
    check: async (limit: number, token: string): Promise<void> => {
      const now = Date.now()
      const key = `${token}_${Math.floor(now / config.interval)}`
      
      // Clean up old entries
      Object.keys(store).forEach(k => {
        if (store[k].resetTime < now) {
          delete store[k]
        }
      })
      
      if (!store[key]) {
        store[key] = {
          count: 0,
          resetTime: now + config.interval
        }
      }
      
      store[key].count++
      
      if (store[key].count > limit) {
        throw new Error(`Rate limit exceeded. Try again in ${Math.ceil((store[key].resetTime - now) / 1000)} seconds.`)
      }
    }
  }
}

// Helper to get client IP
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const remoteAddr = request.headers.get('remote-addr')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  
  return realIP || remoteAddr || 'unknown'
}

// Specific rate limiters for different use cases
export const loginRateLimit = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 100
})

export const apiRateLimit = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 100
})

export const strictRateLimit = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 5
})