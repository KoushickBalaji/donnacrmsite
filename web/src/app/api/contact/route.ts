type ContactBody = {
  name: string
  email: string
  subject: string
  message: string
}

function isValidEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value)
}

function textResponse(body: string, status = 200) {
  return new Response(body, {
    status,
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}

export function GET() {
  return textResponse('Method not allowed', 405)
}

export async function POST(req: Request) {
  let parsedBody: unknown
  try {
    parsedBody = await req.json()
  } catch {
    return textResponse('Invalid request body', 400)
  }

  const body = (parsedBody ?? {}) as Partial<ContactBody>

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const subject = String(body.subject ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !subject || !message) {
    return textResponse('Missing required fields', 400)
  }
  if (!isValidEmail(email)) {
    return textResponse('Enter a valid email', 400)
  }
  if (subject.length > 200 || message.length > 2000) {
    return textResponse('Message too long', 400)
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL?.trim()
  const to = process.env.CONTACT_TO_EMAIL ?? 'support@donnacrm.com'

  const missing: string[] = []
  if (!apiKey) missing.push('RESEND_API_KEY')
  if (!from) missing.push('CONTACT_FROM_EMAIL')
  if (missing.length) {
    console.error('Contact email service is not configured', { missing })
    return textResponse(`Email service is not configured (missing ${missing.join(', ')})`, 500)
  }

  const text = [
    'New website contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n')

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `[Website] ${subject}`,
      text,
      reply_to: email,
    }),
  })

  if (!resp.ok) {
    const detail = await resp.text().catch(() => '')
    return textResponse(detail || 'Email could not be sent', 502)
  }

  return textResponse('ok', 200)
}

