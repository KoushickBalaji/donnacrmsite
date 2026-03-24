import Link from 'next/link'

export function IntegrationsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Integrations
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Donna CRM works inside Gmail as a Chrome extension and connects to select
              Google services to support your workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-muted-foreground">
            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">
                Gmail (Chrome extension)
              </h2>
              <p>
                Donna CRM runs in the Gmail UI so you can manage contacts, pipelines,
                tasks, campaigns, and tracking without switching tabs.
              </p>
              <div className="mt-5 overflow-hidden rounded-lg border border-border bg-muted/30">
                <img
                  src="/screenshots/Context%20Bar%20V2.png"
                  alt="Donna CRM running inside the Gmail interface"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">
                Permissions and why they're used
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Gmail: to show CRM context next to threads and support inbox-native workflows.
                </li>
                <li>
                  Google Calendar: to schedule meetings (and include Google Meet links) directly from CRM workflows.
                </li>
                <li>
                  Google Drive: to access files used during imports and related workflows.
                </li>
                <li>
                  Google Sheets: to import contacts from Google Sheets.
                </li>
              </ul>
              <p className="mt-3 text-sm">
                You'll always see the exact permissions requested in Chrome before you grant
                access.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">Tracking notes</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Open tracking is a helpful signal where supported, not a guarantee.</li>
                <li>
                  Click tracking typically applies to tracked links and can vary by workflow and
                  recipient settings.
                </li>
                <li>
                  Tracking behavior can vary depending on recipient mail clients and settings
                  (for example, image blocking).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">AI Assistant</h2>
              <p>
                The AI assistant uses language model services to summarize, draft, and help you
                capture next steps inside Gmail. You stay in control and review before acting.
              </p>
              <p className="mt-3 text-sm">
                Learn more on{' '}
                <Link href="/ai-gmail-crm" className="text-primary hover:underline">
                  AI Gmail CRM
                </Link>{' '}
                and review data handling in our{' '}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
