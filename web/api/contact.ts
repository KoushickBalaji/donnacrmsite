type ContactBody = {
  name: string
  email: string
  subject: string
  message: string
}

type RequestLike = {
  method?: string
  body?: unknown
}

type ResponseLike = {
  status: (code: number) => ResponseLike
  send: (body: string) => void
}

function isValidEmail(value: string) {
  return /^\S+@\S+\.\S+$/.test(value)
}

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed')
    return
  }

  let parsedBody: unknown = req.body
  if (typeof req.body === 'string') {
    try {
      parsedBody = JSON.parse(req.body) as unknown
    } catch {
      res.status(400).send('Invalid request body')
      return
    }
  }

  const body = (parsedBody ?? {}) as Partial<ContactBody>

  const name = String(body.name ?? '').trim()
  const email = String(body.email ?? '').trim()
  const subject = String(body.subject ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!name || !email || !subject || !message) {
    res.status(400).send('Missing required fields')
    return
  }
  if (!isValidEmail(email)) {
    res.status(400).send('Enter a valid email')
    return
  }
  if (subject.length > 200 || message.length > 2000) {
    res.status(400).send('Message too long')
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL ?? 'support@donnacrm.com'

  // TODO: Set `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` in deployment environment.
  // TODO: If you prefer SMTP/another provider later, replace this implementation.
  if (!apiKey || !from) {
    res.status(500).send('Email service is not configured')
    return
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
    res.status(502).send(detail || 'Email could not be sent')
    return
  }

  res.status(200).send('ok')
}
