# freelancinginstitutebd.com

Production website for **Freelancing Institute BD**.

## Stack
- React 19
- Vite 7
- React Router 7
- react-helmet-async (SEO/meta)
- Vercel deployment

## Local development
```bash
npm install
npm run dev
```

Build and preview:
```bash
npm run build
npm run preview
```

Lint:
```bash
npm run lint
```

## Environment variables
Create `.env` (or set in Vercel project settings):

```bash
VITE_ADMISSION_WEBHOOK_URL=https://your-webhook-endpoint
```

### Admission form behavior
- Form submission is sent as JSON `POST` to `VITE_ADMISSION_WEBHOOK_URL`.
- If this env var is missing, the form will show a configuration error instead of fake success.

Payload example:
```json
{
  "name": "...",
  "phone": "...",
  "email": "...",
  "course": "...",
  "experience": "...",
  "message": "...",
  "source": "website-admission-form",
  "submittedAt": "2026-02-18T00:00:00.000Z",
  "page": "/admission"
}
```

## Deployment
- Connected Vercel project: `freelancinginstitutebd`
- Domain: `https://freelancinginstitutebd.com`
- `www` is redirected to apex via `vercel.json`

## Important maintenance notes
1. Replace placeholder contact values (phone/WhatsApp) with real production numbers everywhere.
2. Keep `public/sitemap.xml` updated when routes change.
3. Keep structured data in `src/data/schemas.js` aligned with real business information.
