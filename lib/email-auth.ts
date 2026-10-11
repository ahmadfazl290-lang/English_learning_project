import {env} from './runtime';
import { headers } from 'next/headers';
export const EMAIL_COOKIE = 'cadence_email_session';
export async function digest(value: string) {
  return hex(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(value)));
}
function hex(value: ArrayBuffer) { return Array.from(new Uint8Array(value), b => b.toString(16).padStart(2,'0')).join(''); }
export async function passwordHash(password: string, salt: string) {
  const key = await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);
  return hex(await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',iterations:600000,salt:new TextEncoder().encode(salt)},key,256));
}
export async function getEmailUser() {
  const h = await headers();
  const token = h.get('cookie')?.split(';').map(x=>x.trim()).find(x=>x.startsWith(EMAIL_COOKIE+'='))?.slice(EMAIL_COOKIE.length+1);
  if(!token || !/^[a-f0-9]{64}$/.test(token) || !env.DB) return null;
  const user=await env.DB.prepare('SELECT a.user_id AS "userId",a.name AS "displayName",a.email FROM email_sessions s JOIN email_accounts a ON a.user_id=s.user_id WHERE s.token_hash=? AND s.expires_at>?').bind(await digest(token),Date.now()).first<{userId:string,displayName:string,email:string}>();
  return user ? {...user,fullName:user.displayName} : null;
}
