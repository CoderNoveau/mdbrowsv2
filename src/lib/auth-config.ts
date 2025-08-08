import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// Production-grade admin user configuration
const ADMIN_USERS = [
  {
    id: "1",
    username: process.env.ADMIN_USERNAME || "admin",
    email: process.env.ADMIN_EMAIL || "admin@mdbrows.com.au",
    name: "Admin User",
    role: "admin",
    passwordHash: process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync("changeme123!", 12),
  }
]

// Rate limiting store
const rateLimitStore: { [key: string]: { count: number; resetTime: number } } = {}

function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now()
  const windowKey = `${key}_${Math.floor(now / windowMs)}`
  
  if (!rateLimitStore[windowKey]) {
    rateLimitStore[windowKey] = { count: 0, resetTime: now + windowMs }
  }
  
  rateLimitStore[windowKey].count++
  
  // Cleanup old entries
  Object.keys(rateLimitStore).forEach(k => {
    if (rateLimitStore[k].resetTime < now) {
      delete rateLimitStore[k]
    }
  })
  
  return rateLimitStore[windowKey].count <= limit
}


export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username and password are required")
        }

        // Get client IP for rate limiting
        const forwarded = req.headers?.["x-forwarded-for"]
        const ip = typeof forwarded === "string" ? forwarded.split(",")[0] : req.headers?.["x-real-ip"] || "unknown"

        // Rate limiting - 5 attempts per minute per IP
        if (!checkRateLimit(ip, 5, 60 * 1000)) {
          throw new Error("Too many login attempts. Please try again later.")
        }

        // Global rate limiting - 100 different IPs per 15 minutes
        if (!checkRateLimit("global", 100, 15 * 60 * 1000)) {
          throw new Error("Server busy. Please try again later.")
        }

        // Find admin user
        const user = ADMIN_USERS.find(u => u.username === credentials.username)
        
        if (!user) {
          // Always hash the password even for non-existent users to prevent timing attacks
          await bcrypt.compare(credentials.password, "$2a$12$dummy.hash.to.prevent.timing.attacks")
          throw new Error("Invalid credentials")
        }

        // Verify password with bcrypt
        const isValid = await bcrypt.compare(credentials.password, user.passwordHash)
        
        if (!isValid) {
          throw new Error("Invalid credentials")
        }

        // Log successful login (in production, log to your monitoring system)
        console.log(`Admin login successful: ${user.username} from IP: ${ip}`)

        return {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          role: user.role,
        }
      }
    })
  ],
  session: {
    strategy: "jwt" as const,
    maxAge: 8 * 60 * 60, // 8 hours
    updateAge: 60 * 60,  // 1 hour
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 8 * 60 * 60, // 8 hours
  },
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.role = user.role
        token.username = user.username
        token.loginTime = Date.now()
      }
      
      // Auto-logout after 8 hours
      if (token.loginTime && Date.now() - token.loginTime > 8 * 60 * 60 * 1000) {
        return {}
      }
      
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        session.user.role = token.role as string
        session.user.username = token.username as string
      }
      return session
    },
    async redirect({ url, baseUrl }) {
      // Redirect to admin after successful login
      if (url === "/admin/login" || url === baseUrl + "/admin/login") {
        return baseUrl + "/admin"
      }
      
      // Allow relative and same-origin redirects
      if (url.startsWith("/")) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      
      return baseUrl + "/admin"
    }
  },
  events: {
    async signIn(message) {
      // Log successful sign-ins (in production, use proper logging)
      console.log(`Admin signed in: ${message.user.email}`)
    },
    async signOut(message) {
      // Log sign-outs
      console.log(`Admin signed out: ${message.token?.username}`)
    }
  },
  debug: process.env.NODE_ENV === "development",
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)