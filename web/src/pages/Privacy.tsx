import { Seo } from '../components/Seo'

export function PrivacyPage() {
  const lastUpdated = '14 Dec 2025'

  return (
    <>
      <Seo title="Privacy Policy" canonicalPath="/privacy" />
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
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
              <h2 className="mb-4 text-2xl font-bold text-foreground">Introduction</h2>
              <p className="text-muted-foreground">
                Donna CRM (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
                committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when
                you use our Chrome extension and related services.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Information We Collect
              </h2>
              <p className="mb-4 text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Account information (name, email address)</li>
                <li>Contact data you choose to store in Donna CRM</li>
                <li>Pipeline information</li>
                <li>Task data</li>
                <li>Email templates you create</li>
                <li>Usage data and analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security
                measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. All data is
                encrypted in transit using TLS and at rest using industry-standard
                encryption.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Data Sharing</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share data only with service
                providers who assist in operating our service, and only to the
                extent necessary for them to perform their functions.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="mb-4 text-muted-foreground">You have the right to:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground">
                We may update our Privacy Policy from time to time. We will notify
                you of any changes by posting the new Privacy Policy on this page
                and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact
                us at{' '}
                <a
                  href="mailto:privacy@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  privacy@donnacrm.com
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
