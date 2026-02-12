import { Seo } from '../components/Seo'

export function ShippingPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <Seo title="Shipping & Delivery" canonicalPath="/shipping" />
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Shipping &amp; Delivery Policy
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container max-w-3xl">
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground">
                Donna CRM is a digital service (software) delivered online. We do
                not ship any physical goods.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Delivery method
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Access to paid features is provided electronically (online) after
                  successful payment confirmation.
                </li>
                <li>
                  If you purchase a subscription, it becomes active immediately or
                  within a short processing window, depending on payment provider
                  confirmation.
                </li>
                <li>
                  All purchases and installations are fulfilled through the Chrome
                  Web Store. Delivery, activation, and any platform-specific
                  purchase flows are governed by the Chrome Web Store and Google
                  policies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Shipping charges
              </h2>
              <p className="text-muted-foreground">
                There are no shipping or delivery charges because no physical
                product is shipped.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Support for delivery issues
              </h2>
              <p className="text-muted-foreground">
                If you have paid and cannot access the Service, please contact us
                at{' '}
                <a
                  href="mailto:support@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  support@donnacrm.com
                </a>{' '}
                and include your account email and payment details (such as the
                transaction ID). We will work with you to resolve the issue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
