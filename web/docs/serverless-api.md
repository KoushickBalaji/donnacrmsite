# Serverless API (Vercel)

This website includes one API endpoint:

- `POST /api/contact` -> `src/app/api/contact/route.ts`

## Request and validation

Expected JSON body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Question about pricing",
  "message": "Hi..."
}
```

Validation rules in code:

- `name`, `email`, `subject`, `message` are required
- `email` must match basic email regex
- `subject` max length: 200
- `message` max length: 2000

## Delivery behavior

- Sends message via Resend HTTP API (`https://api.resend.com/emails`).
- Uses `reply_to` with the submitter email.
- Defaults recipient to `support@donnacrm.com` when `CONTACT_TO_EMAIL` is not set.

## Environment variables

- `RESEND_API_KEY` (required)
- `CONTACT_FROM_EMAIL` (required)
- `CONTACT_TO_EMAIL` (optional)

If required vars are missing, the endpoint logs missing keys and returns `500`.

## Response behavior

- `200` with body `ok` on success
- `400` for invalid JSON, missing fields, invalid email, or length failures
- `405` on `GET` with body `Method not allowed`
- `502` when Resend responds with non-OK

## Local testing

`npm run dev` serves this route locally, so the contact form can be tested end-to-end.
