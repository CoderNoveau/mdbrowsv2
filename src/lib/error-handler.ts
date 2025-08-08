import { NextRequest, NextResponse } from 'next/server';
import { logSecurityEvent } from './env-config';

export interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: any;
}

export class AppError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly isOperational: boolean;

  constructor(message: string, status: number = 500, code: string = 'INTERNAL_ERROR', isOperational: boolean = true) {
    super(message);
    this.status = status;
    this.code = code;
    this.isOperational = isOperational;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// Common error classes
export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 400, 'VALIDATION_ERROR');
    this.details = details;
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 401, 'AUTHENTICATION_ERROR');
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403, 'AUTHORIZATION_ERROR');
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = 'Rate limit exceeded') {
    super(message, 429, 'RATE_LIMIT_ERROR');
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, 'NOT_FOUND_ERROR');
  }
}

// Error handler for API routes
export function handleApiError(error: unknown, request: NextRequest): NextResponse {
  // Log security-related errors
  if (error instanceof AuthenticationError || error instanceof AuthorizationError) {
    logSecurityEvent('API_AUTH_ERROR', {
      error: error.message,
      path: request.nextUrl.pathname,
      method: request.method,
      userAgent: request.headers.get('user-agent'),
    });
  }

  if (error instanceof RateLimitError) {
    logSecurityEvent('RATE_LIMIT_EXCEEDED', {
      path: request.nextUrl.pathname,
      method: request.method,
      userAgent: request.headers.get('user-agent'),
    });
  }

  // Handle known application errors
  if (error instanceof AppError) {
    return NextResponse.json(
      {
        error: {
          message: error.message,
          code: error.code,
          ...(process.env.NODE_ENV === 'development' && { stack: error.stack }),
        },
      },
      { status: error.status }
    );
  }

  // Handle validation errors (from libraries)
  if (error instanceof Error && error.name === 'ValidationError') {
    return NextResponse.json(
      {
        error: {
          message: 'Validation failed',
          code: 'VALIDATION_ERROR',
          details: error.message,
        },
      },
      { status: 400 }
    );
  }

  // Log unexpected errors
  console.error('Unexpected API error:', error);
  
  logSecurityEvent('UNEXPECTED_ERROR', {
    error: error instanceof Error ? error.message : 'Unknown error',
    stack: error instanceof Error ? error.stack : undefined,
    path: request.nextUrl.pathname,
    method: request.method,
  });

  // Return generic error in production
  return NextResponse.json(
    {
      error: {
        message: process.env.NODE_ENV === 'production' 
          ? 'Internal server error' 
          : error instanceof Error 
            ? error.message 
            : 'Unknown error occurred',
        code: 'INTERNAL_ERROR',
      },
    },
    { status: 500 }
  );
}

// Async wrapper for API route handlers
export function asyncHandler(
  handler: (request: NextRequest, context?: any) => Promise<NextResponse>
) {
  return async (request: NextRequest, context?: any): Promise<NextResponse> => {
    try {
      return await handler(request, context);
    } catch (error) {
      return handleApiError(error, request);
    }
  };
}

// Client-side error boundary
export class ErrorBoundary {
  static logError(error: Error, errorInfo?: any) {
    if (process.env.NODE_ENV === 'production') {
      // In production, send to error tracking service
      console.error('Client error:', { error: error.message, stack: error.stack, errorInfo });
    } else {
      console.error('Client error:', error, errorInfo);
    }
  }
}

// Utility functions
export function isOperationalError(error: unknown): boolean {
  return error instanceof AppError && error.isOperational;
}

export function formatErrorForLogging(error: unknown) {
  if (error instanceof Error) {
    return {
      message: error.message,
      stack: error.stack,
      name: error.name,
      ...(error instanceof AppError && {
        status: error.status,
        code: error.code,
        isOperational: error.isOperational,
      }),
    };
  }
  
  return {
    message: 'Unknown error',
    value: error,
  };
}