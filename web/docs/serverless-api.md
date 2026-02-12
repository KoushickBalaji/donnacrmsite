# Serverless API (Vercel)

This website includes one serverless endpoint:

- `POST /api/contact` → `src/app/api/contact/route.ts`

## Purpose

The Contact page (`src/views/Contact.tsx`) submits a JSON payload to `/api/contact`.

The serverless function:

- Validates required fields (name, email, subject, message)
- Validates email format and length limits
- Calls Resend’s HTTP API to send a plaintext email

## Request format

`POST /api/contact` with header `content-type: application/json` and body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Question about pricing",
  "message": "Hi! ..."
}
```

## Environment variables (deployment)

Set these in your Vercel environment:

- `RESEND_API_KEY` (required)
- `CONTACT_FROM_EMAIL` (required; must be a verified sender in Resend)
- `CONTACT_TO_EMAIL` (optional; defaults to `support@donnacrm.com`)

If required env vars are missing, the function returns `500` and logs which values are missing.

## Response behavior (as-is)

- `200 ok` on success (body: `ok`)
- `400` for validation errors (human-readable message body)
- `405` if not `POST`
- `502` if Resend fails (response body is forwarded when possible)

## Local testing note

`npm run dev` runs the API route locally (Next.js), so `/api/contact` works end-to-end in development.
