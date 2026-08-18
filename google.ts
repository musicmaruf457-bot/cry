import { getStore } from '@/lib/store';

/**
 * Exchange an OAuth authorization code for the user's Google profile.
 * Uses the standard OAuth2 token + userinfo endpoints.
 * Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET env vars in production.
 */
export async function exchangeGoogleCode(code: string, redirectUri: string) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Google OAuth is not configured (missing GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET).');
  }

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });
  if (!tokenRes.ok) throw new Error('Token exchange failed');
  const token = await tokenRes.json();
  if (!token.access_token) throw new Error('No access token returned');

  const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!userRes.ok) throw new Error('Failed to fetch user info');
  const info = await userRes.json();
  return {
    email: info.email as string,
    name: info.name as string,
    picture: info.picture as string | undefined,
  };
}

// keep getStore import used for potential server-side validation
void getStore;
