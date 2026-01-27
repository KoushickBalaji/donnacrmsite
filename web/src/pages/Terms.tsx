import { Seo } from '../components/Seo'

export function TermsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <Seo title="Terms & Conditions" canonicalPath="/terms" />
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms &amp; Conditions
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
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Who we are
              </h2>
              <p className="text-muted-foreground">
                Donna CRM is currently operated by an independent developer
                (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). Our company
                registration is in progress and we will update these Terms with the
                legal entity name and address once available.
              </p>
              <p className="mt-4 text-muted-foreground">
                For support, contact{' '}
                <a
                  href="mailto:support@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  support@donnacrm.com
                </a>
                .
              </p>
              <p className="mt-2 text-muted-foreground">
                For privacy-related requests, contact{' '}
                <a
                  href="mailto:privacy@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  privacy@donnacrm.com
                </a>
                . For developer contact, you may email{' '}
                <a
                  href="mailto:koushick@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  koushick@donnacrm.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Agreement to these terms
              </h2>
              <p className="text-muted-foreground">
                These Terms &amp; Conditions (&quot;Terms&quot;) govern your access
                to and use of Donna CRM (the &quot;Service&quot;), including our
                website and any related products or services. By accessing or
                using the Service, you agree to be bound by these Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Eligibility and accounts
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  You must be legally capable of entering into a binding contract
                  in your jurisdiction.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your
                  account credentials and for all activity under your account.
                </li>
                <li>
                  You agree to provide accurate information and keep it updated.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Subscriptions, billing, and payments
              </h2>
              <p className="text-muted-foreground">
                If you purchase a paid subscription, you authorize us (and our
                payment processors) to charge applicable fees and taxes for the
                plan you select. Subscription fees are billed in advance on a
                recurring basis (e.g., monthly or annually) unless canceled.
              </p>
              <p className="mt-4 text-muted-foreground">
                Refunds and cancellations are handled according to our{' '}
                <a
                  href="/cancellation-refunds"
                  className="text-primary hover:underline"
                >
                  Cancellation &amp; Refunds Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Acceptable use
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Do not use the Service to violate any law, infringe rights, or
                  engage in harmful, abusive, or deceptive behavior.
                </li>
                <li>
                  Do not attempt to reverse engineer, interfere with, or disrupt
                  the Service or its security.
                </li>
                <li>
                  Do not upload or store content you do not have the right to use
                  or that is unlawful, harmful, or malicious.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Third-party services
              </h2>
              <p className="text-muted-foreground">
                Donna CRM may integrate with third-party services (for example,
                email providers, browsers, or marketplaces). Your use of those
                services is governed by their terms and policies. We are not
                responsible for third-party services and do not guarantee their
                availability.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Intellectual property
              </h2>
              <p className="text-muted-foreground">
                The Service and its content, features, and functionality are owned
                by Donna CRM and its licensors and are protected by applicable
                intellectual property laws. You may not copy, modify, distribute,
                sell, or lease any part of the Service unless we give you written
                permission.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Disclaimers
              </h2>
              <p className="text-muted-foreground">
                The Service is provided on an &quot;as is&quot; and &quot;as
                available&quot; basis. To the maximum extent permitted by law, we
                disclaim all warranties, express or implied, including warranties
                of merchantability, fitness for a particular purpose, and
                non-infringement.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Limitation of liability
              </h2>
              <p className="text-muted-foreground">
                To the maximum extent permitted by law, Donna CRM shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits, data, or goodwill, arising
                out of or related to your use of the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Governing law and jurisdiction
              </h2>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of India. Courts located in
                Bengaluru, Karnataka, India shall have jurisdiction over disputes
                arising out of or relating to these Terms or the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Changes to the Service and terms
              </h2>
              <p className="text-muted-foreground">
                We may modify the Service or these Terms from time to time. If we
                make material changes, we will update the &quot;Last updated&quot;
                date. Your continued use of the Service after changes become
                effective constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Contact
              </h2>
              <p className="text-muted-foreground">
                Questions about these Terms? Contact us at{' '}
                <a
                  href="mailto:support@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  support@donnacrm.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
