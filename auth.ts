import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import { getStore, type UserRecord } from './store';

const SECRET = new TextEncoder().encode(
  process.env.AUTH_SECRET || 'cry-music-media-development-secret-please-rotate-in-production-2025',
);
const COOKIE = 'cry_session';
const ALG = 'HS256';

export interface SessionPayload {
  uid: string;
  role: 'artist';
  email: string;
  name: string;
}

export async function signSession(payload: SessionPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: ALG })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
}

export async function verifySession(token: string): Promise<SessionPayload | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET, { algorithms: [ALG] });
    return {
      uid: String(payload.uid),
      role: 'artist',
      email: String(payload.email),
      name: String(payload.name),
    };
  } catch {
    return null;
  }
}

export async function getCurrentSession(): Promise<SessionPayload | null> {
  const c = cookies();
  const token = c.get(COOKIE)?.value;
  if (!token) return null;
  return verifySession(token);
}

export async function setSessionCookie(token: string) {
  cookies().set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSessionCookie() {
  cookies().set(COOKIE, '', { path: '/', maxAge: 0 });
}

export async function authenticate(email: string, password: string): Promise<UserRecord | null> {
  const user = getStore().users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) return null;
  const ok = await bcrypt.compare(password, user.passwordHash);
  return ok ? user : null;
}

/**
 * Find (or create) a user from a Google profile.
 * No password is set — Google-authed users sign in via OAuth only.
 */
export async function upsertGoogleUser(profile: {
  email: string;
  name: string;
  picture?: string;
}): Promise<UserRecord> {
  const store = getStore();
  const existing = store.users.find((u) => u.email.toLowerCase() === profile.email.toLowerCase());
  if (existing) return existing;

  const id = `user-${Date.now()}`;
  const user: UserRecord = {
    id,
    email: profile.email,
    passwordHash: '', // OAuth-only account
    role: 'artist',
    fullName: profile.name || profile.email.split('@')[0],
    artistName: profile.name || profile.email.split('@')[0],
    avatarUrl: profile.picture,
    country: undefined,
    phone: undefined,
    payoutEmail: undefined,
    plan: 'starter',
    accountType: 'individual',
    createdAt: new Date().toISOString(),
  };
  store.users.push(user);
  return user;
}

export function requireRole<T extends SessionPayload['role']>(session: SessionPayload | null, role: T): asserts session is SessionPayload & { role: T } {
  if (!session || session.role !== role) {
    throw new Error('Unauthorized');
  }
}

export const SESSION_COOKIE = COOKIE;
