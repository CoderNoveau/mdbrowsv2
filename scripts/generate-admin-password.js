#!/usr/bin/env node

const bcrypt = require('bcryptjs');
const crypto = require('crypto');

// Generate secure password and hash
function generateSecurePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  const length = 16;
  
  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return password;
}

function generateNextAuthSecret() {
  return crypto.randomBytes(32).toString('base64');
}

async function main() {
  const password = generateSecurePassword();
  const hash = await bcrypt.hash(password, 12);
  const secret = generateNextAuthSecret();
  
  console.log('🔐 Generated Admin Credentials');
  console.log('================================');
  console.log('Add these to your .env.local file:');
  console.log('');
  console.log(`NEXTAUTH_SECRET="${secret}"`);
  console.log(`NEXTAUTH_URL="https://mdbrows.com.au"`);
  console.log(`ADMIN_USERNAME="admin"`);
  console.log(`ADMIN_EMAIL="admin@mdbrows.com.au"`);
  console.log(`ADMIN_PASSWORD_HASH="${hash}"`);
  console.log('');
  console.log('🔑 Your admin password is:');
  console.log(`PASSWORD: ${password}`);
  console.log('');
  console.log('⚠️  IMPORTANT: Save this password securely! It cannot be recovered.');
  console.log('⚠️  Change the NEXTAUTH_URL to your production domain.');
}

main().catch(console.error);