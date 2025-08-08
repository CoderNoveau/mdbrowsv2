import { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const CSRF_TOKEN_HEADER = 'X-CSRF-Token';
const CSRF_COOKIE_NAME = 'csrf-token';

// CSRF protection for state-changing operations
export function generateCSRFToken(): string {
  return uuidv4();
}

export function validateCSRFToken(request: NextRequest): boolean {
  // Skip CSRF for GET, HEAD, OPTIONS requests
  if (['GET', 'HEAD', 'OPTIONS'].includes(request.method)) {
    return true;
  }

  const tokenFromHeader = request.headers.get(CSRF_TOKEN_HEADER);
  const tokenFromCookie = request.cookies.get(CSRF_COOKIE_NAME)?.value;

  if (!tokenFromHeader || !tokenFromCookie) {
    return false;
  }

  return tokenFromHeader === tokenFromCookie;
}

export function setCSRFCookie(response: Response, token: string): Response {
  response.headers.set(
    'Set-Cookie',
    `${CSRF_COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=Strict; Path=/`
  );
  return response;
}