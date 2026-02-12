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
                  src="/screenshots/Context%20Bar.png"
                  alt="Donna CRM running inside the Gmail interface"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">
                Permissions and why they’re used
              </h2>
              <ul className="list-inside list-disc space-y-2">
                <li>
                  Gmail: to work with your emails inside Gmail and support CRM workflows.
                </li>
                <li>
                  Google Drive: to access files used during imports and related workflows.
                </li>
                <li>
                  Google Sheets: to import contacts from Google Sheets.
                </li>
                <li>
                  Google Calendar: to help manage scheduling as part of your workflow.
                </li>
              </ul>
              {/* TODO: Replace with an exact, permission-by-permission mapping from the extension manifest. */}
            </div>

            <div>
              <h2 className="mb-3 text-2xl font-bold text-foreground">Tracking notes</h2>
              <ul className="list-inside list-disc space-y-2">
                <li>Open tracking works for campaign emails and regular emails.</li>
                <li>
                  Click tracking works for campaign emails and can be enabled manually for
                  regular emails.
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
                The AI assistant uses state-of-the-art language model services from leading
                providers to help within the product experience.
              </p>
              {/* TODO: Add a precise capabilities + limitations list once finalized. */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
