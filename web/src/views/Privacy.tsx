export function PrivacyPage() {
  const lastUpdated = '25 Apr 2026'

  return (
    <>
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
                We collect information you provide directly to us, information we
                receive when you connect Google services, and information collected
                automatically when you use the Service, including:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Account information (name, email address)</li>
                <li>Organization and subscription information (plan and billing status)</li>
                <li>
                  CRM data you create (contacts, pipelines, tasks, notes, comments, and
                  email templates)
                </li>
                <li>
                  Emails you compose or schedule through Donna (for example, campaign
                  content and outbox records)
                </li>
                <li>
                  Usage and diagnostic data (such as feature usage, log data, and
                  browser/device information)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Google user data (Gmail &amp; Calendar)
              </h2>
              <p className="mb-4 text-muted-foreground">
                Donna CRM integrates with Google Workspace to help you manage
                relationships inside Gmail. We access Google user data only after
                you grant permission, and we request the minimum scopes needed for
                each feature.
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Gmail identifiers:</span>{' '}
                  we store minimal identifiers such as Gmail thread IDs, message IDs,
                  and label identifiers to link CRM activity to email threads, support
                  automations, and enable deep-linking back to Gmail.
                </li>
                <li>
                  <span className="font-medium text-foreground">Gmail content processing:</span>{' '}
                  when you use AI features (like summaries or suggested replies), we
                  may process limited email content (such as subject/snippet or message
                  text) to generate outputs. We design our systems to avoid persisting
                  full email bodies in long-lived CRM tables, and fetch display
                  metadata from Gmail at runtime when possible.
                </li>
                <li>
                  <span className="font-medium text-foreground">Calendar data:</span>{' '}
                  if you schedule meetings through Donna, we may create and manage
                  events in your Google Calendar. We may store event identifiers and
                  basic metadata (such as title, start/end time, and attendees) to
                  support this feature.
                </li>
                <li>
                  <span className="font-medium text-foreground">OAuth tokens:</span>{' '}
                  we store Google OAuth tokens (for example, a refresh token) in
                  encrypted form to provide server-side access where required. You can
                  revoke access at any time in your Google Account settings.
                </li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Donna CRM&rsquo;s use and transfer of information received from Google
                APIs will adhere to the Google API Services User Data Policy, including
                the Limited Use requirements.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Email engagement tracking
              </h2>
              <p className="text-muted-foreground">
                If you enable email engagement tracking, we may add a tracking pixel
                and/or tracked links to emails sent through Donna. When a recipient
                opens an email or clicks a link, our servers receive a request and we
                record engagement events (such as open/click timestamps) associated
                with a tracking token. Our servers may also receive standard request
                metadata (such as IP address and user-agent) for security and abuse
                prevention.
              </p>
            </div>

            <div>
              <h2
                id="cookies-and-analytics"
                className="mb-4 scroll-mt-24 text-2xl font-bold text-foreground"
              >
                Cookies &amp; analytics (website)
              </h2>
              <p className="mb-4 text-muted-foreground">
                Our marketing website may use cookies and similar technologies to help
                us understand how the site is used and measure marketing performance.
                This includes:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Google Analytics 4 (GA4) for usage analytics</li>
                <li>Google Ads conversion tracking for install intent measurement</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                We do not load these optional analytics/marketing tags until you
                provide consent. You can update your preferences anytime via the
                &ldquo;Cookie preferences&rdquo; link in the site footer.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                How We Use Your Information
              </h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve the Service</li>
                <li>Authenticate users and manage accounts</li>
                <li>
                  Provide CRM features (pipelines, tasks, contact management) and run
                  automations you configure
                </li>
                <li>
                  Send emails you draft/schedule through Donna and measure engagement
                  when tracking is enabled
                </li>
                <li>
                  Provide AI features (such as summaries and suggested replies) and
                  enforce usage limits
                </li>
                <li>Process payments and manage subscriptions (via our payment processor)</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Analyze usage patterns to improve user experience and reliability</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                AI features and model providers
              </h2>
              <p className="mb-4 text-muted-foreground">
                Donna CRM includes AI-powered features (for example, onboarding analysis,
                email thread summaries, and reply suggestions). When you use these
                features, we may send the text you provide and relevant context to a
                third-party AI model provider (such as OpenAI or Google) to generate
                results.
              </p>
              <p className="text-muted-foreground">
                We may store AI session history (your prompts, the assistant&rsquo;s
                responses, and related context) to allow you to view past results and
                continue conversations. We also log AI usage metrics (such as model,
                token counts, and estimated cost) for rate limiting and billing/usage
                enforcement.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Data retention
              </h2>
              <p className="mb-4 text-muted-foreground">
                We retain data only as long as needed to provide the Service and for
                legitimate business purposes. Our default retention approach includes:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Derived Google data (such as AI session content, onboarding analysis,
                  email tracking records, and Gmail-derived timeline events) is retained
                  for up to <span className="font-medium text-foreground">90 days</span>{' '}
                  and then deleted on a regular cadence.
                </li>
                <li>
                  Minimal Google linkage identifiers (for example, thread/message IDs)
                  are retained while your account is active and removed when your
                  organization is deleted.
                </li>
                <li>
                  Core CRM data (contacts, pipelines, tasks, templates, and notes) is
                  retained while your account is active, unless you delete it earlier.
                </li>
                <li>
                  If you request deletion of your organization/account, we complete
                  deletion within <span className="font-medium text-foreground">90 days</span>.
                </li>
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
                We do not sell your personal information. We may share information
                with service providers who help us operate the Service, only as
                needed to provide functionality. This may include providers for
                cloud hosting and data storage, analytics, AI processing, and
                payment processing (for example, Razorpay). We may also disclose
                information if required to comply with applicable laws or to protect
                the security and integrity of the Service.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">Your Rights</h2>
              <p className="mb-4 text-muted-foreground">You have the right to:</p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Withdraw consent and revoke Google account access</li>
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
