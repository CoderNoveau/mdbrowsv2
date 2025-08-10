#!/usr/bin/env node

const bcrypt = require('bcryptjs');

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

async function main() {
  const password = generateSecurePassword();
  const hash = await bcrypt.hash(password, 12);
  
  console.log('🔐 Generated Admin Credentials (Static Export Mode)');
  console.log('=====================================================');
  console.log('For production use, update src/lib/client-auth.ts:');
  console.log('');
  console.log(`const ADMIN_USERS = [`);
  console.log(`  {`);
  console.log(`    username: 'admin',`);
  console.log(`    email: 'admin@mdbrows.com.au',`);
  console.log(`    passwordHash: '${hash}',`);
  console.log(`    role: 'admin'`);
  console.log(`  }`);
  console.log(`];`);
  console.log('');
  console.log('🔑 Your admin password is:');
  console.log(`PASSWORD: ${password}`);
  console.log('');
  console.log('✨ Features included:');
  console.log('• bcrypt password hashing (12 rounds)');
  console.log('• Rate limiting (5 attempts/minute)'); 
  console.log('• 8-hour session expiration');
  console.log('• Secure session storage');
  console.log('• Static export compatibility');
  console.log('');
  console.log('⚠️  IMPORTANT: Save this password securely! It cannot be recovered.');
  console.log('⚠️  Update the passwordHash in client-auth.ts before deploying.');
}

main().catch(console.error);