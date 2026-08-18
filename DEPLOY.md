# Deploy CRY Music Media to Your Own Domain

This guide walks you through publishing the CRY Music Media site to your own domain
(`crydigitalmusic.com` or any domain you own). It covers hosting, environment
variables, **Google Sign-in**, and making sure your **brand link preview** (logo +
branding) shows beautifully when you share it on YouTube About, social bios, etc.

---

## 1. Choose a host (recommended: Vercel)

CRY Music Media is a Next.js 14 app. The fastest, most reliable host is **Vercel**
(free tier is fine to start):

1. Push this project to a Git repository (GitHub / GitLab / Bitbucket).
2. Go to **vercel.com/new** → *Import* your repository.
3. Framework is auto-detected as **Next.js**. Build command `next build`, output `.next`.
4. Set the environment variables from the table below.
5. Click **Deploy**.

> Prefer your own server? You can also run it with Node:
> ```bash
> npm install
> npm run build
> npm run start   # serves on PORT (default 3000)
> ```
> Put it behind Nginx/Caddy with a free Let's Encrypt TLS certificate.

---

## 2. Environment variables

Copy `.env.example` to `.env.local` (local) or set them in your host's dashboard
(Settings → Environment Variables).

| Variable | Purpose | Required |
|---------|---------|:---:|
| `AUTH_SECRET` | Signs the JWT session cookie. Generate: `openssl rand -base64 32` | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Your production URL, e.g. `https://crydigitalmusic.com` | ✅ |
| `GOOGLE_CLIENT_ID` | Google Sign-in OAuth client ID (see step 3) | ✅ for Google login |
| `GOOGLE_CLIENT_SECRET` | Google Sign-in OAuth client secret | ✅ for Google login |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID` | Same client ID, exposed to the browser for the button | ✅ for Google login |
| `DATABASE_URL` | Postgres (when you migrate off the mock store) | optional |
| `S3_*` / `UPLOAD_*` | Audio / artwork storage | optional |
| `STRIPE_*` | Payments | optional |

### Auth note
The app supports **both** email/password and **Google Sign-in**. Email/password
works out of the box using `AUTH_SECRET`. Google login additionally needs the three
`GOOGLE_*` variables above.

---

## 3. Enable Google Sign-in (optional but recommended)

1. Open [Google Cloud Console → Credentials](https://console.cloud.google.com/apis/credentials).
2. Create an **OAuth 2.0 Client ID** (type: *Web application*).
3. Add an **Authorized redirect URI**:
   ```
   https://YOURDOMAIN.com/api/auth/google/callback
   ```
   (For local testing also add `http://localhost:3000/api/auth/google/callback`.)
4. Copy the **Client ID** and **Client Secret** into the env vars above.
5. That's it — the *Sign in with Google* and *Sign up with Google* buttons now work.

---

## 4. Point your domain at the site

In your domain registrar / DNS settings:

- **Apex** (`crydigitalmusic.com`) → A / ALIAS record to your host
  - Vercel: add the domain in *Project → Settings → Domains*; it gives you the exact records.
- **www** (`www.crydigitalmusic.com`) → CNAME to your host

Once the SSL certificate is issued (automatic on Vercel), your site is live on HTTPS.

---

## 5. Brand link preview (OG image) — shows your logo everywhere

When you paste your link into **YouTube About**, a social bio, WhatsApp, Discord,
LinkedIn, or X, the preview image is controlled by Open Graph tags.

- The preview image lives at **`/brand/og-image.png`** (1200×630, includes the CRY
  logo mark + wordmark + tagline). A matching source SVG is at `/brand/og-image.svg`.
- Metadata is configured in `src/app/layout.tsx` (`openGraph.images` + `twitter.images`)
  and points to the PNG automatically.
- **To re-brand the preview**, edit `public/brand/og-image.svg` and regenerate the PNG:
  ```bash
  cd public/brand
  python3 -c "import cairosvg; cairosvg.svg2png(url='og-image.svg', write_to='og-image.png', output_width=1200, output_height=630, background_color='#0A0A1A')"
  ```

### Verify it renders
After deploy, check your link with these free validators (paste your URL):
- [https://www.opengraph.xyz](https://www.opengraph.xyz)
- [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
- Facebook Sharing Debugger (search "Facebook debug tool")

> Important: most platforms **ignore SVG** OG images and require **PNG/JPG** — that's
> why we ship `og-image.png`. Keep the PNG in sync with the SVG.

---

## 6. Make Google show you at the top (SEO)

- `sitemap.xml` and `robots.txt` are generated in `public/`.
  - Submit `https://YOURDOMAIN.com/sitemap.xml` in **Google Search Console**.
- Structured data (Organization, MusicGroup, WebSite, FAQ) is injected in
  `src/app/layout.tsx` — Google can build a rich Knowledge Panel.
- To improve the Knowledge Panel, create and verify a **Google Business Profile**
  and link your socials in `src/lib/brand.ts` (`social.linkedin`, etc.).
- Claim your brand name consistently across YouTube, Instagram, Facebook, X, and
  (when ready) LinkedIn — Google cross-references these.

---

## 7. Replacing the demo data store

`src/lib/store.ts` is an in-memory mock that mirrors a real Supabase/Postgres schema
(`users`, `releases`, `payouts`, `linked_channels`, `contact_messages`). It is perfect
for demo/preview but resets on restart. To go live with real data:

1. Add Prisma or Drizzle + a Postgres database.
2. Generate the schema from the TypeScript interfaces in `store.ts`.
3. Swap the `getStore()` reads/writes for database calls.
4. `src/lib/auth.ts` (JWT cookies + Google upsert) stays unchanged — only the data layer moves.

---

## 8. Local development

```bash
npm install
cp .env.example .env.local   # fill in AUTH_SECRET + Google vars
npm run dev                  # http://localhost:3000
```

Build for production locally:
```bash
npm run build && npm run start
```
