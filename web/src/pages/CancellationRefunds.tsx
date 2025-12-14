export function CancellationRefundsPage() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <>
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Cancellation &amp; Refunds Policy
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
                This Cancellation &amp; Refunds Policy explains how cancellations
                and refunds work for Donna CRM paid subscriptions. If you have any
                questions, contact us at{' '}
                <a
                  href="mailto:support@donnacrm.com"
                  className="text-primary hover:underline"
                >
                  support@donnacrm.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                14-day free trial
              </h2>
              <p className="text-muted-foreground">
                Donna CRM offers a 14-day free trial. No payment or card details
                are required to start the trial. At the end of the trial, you may
                choose to subscribe to a paid plan by providing payment details.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Cancellation
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>You can cancel your subscription at any time.</li>
                <li>
                  If you cancel a paid subscription, your access will continue
                  until the end of your current paid billing cycle. The service
                  will then stop at the end of that cycle.
                </li>
                <li>
                  After cancellation, you will not be charged for future billing
                  cycles unless you re-subscribe.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Refunds for paid subscriptions
              </h2>
              <p className="text-muted-foreground">
                Subscription fees for paid plans are generally non-refundable,
                except where required by law or as explicitly stated in this
                policy.
              </p>
              <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Monthly plans: cancel anytime; access continues until month-end;
                  no refund for the current month once a monthly billing cycle has
                  started.
                </li>
                <li>
                  Annual plans: cancel anytime; access continues until the end of
                  the annual term; no refund for the current annual term once it
                  has started.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Service failure refunds
              </h2>
              <p className="text-muted-foreground">
                If we fail to provide the service as intended (for example,
                prolonged outages or a technical issue that prevents you from
                using key functionality), we may offer a pro-rated refund or a
                credit for the affected period, subject to verification and
                payment processor rules.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                How to request a refund
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Email{' '}
                  <a
                    href="mailto:support@donnacrm.com"
                    className="text-primary hover:underline"
                  >
                    support@donnacrm.com
                  </a>{' '}
                  with your account email and the reason for the request.
                </li>
                <li>
                  We may ask for additional information (e.g., screenshots or
                  error details) to help verify the issue.
                </li>
                <li>
                  If approved, refunds are issued to the original payment method.
                  Processing times depend on your bank/payment provider (often
                  5-10 business days). In some cases, refunds may take longer due
                  to payment routing or bank processing delays outside our
                  control; we can share the refund reference/transaction details
                  to help you track status with your provider.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Exceptions and limitations
              </h2>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Fees charged by payment processors or banks (if any) may be
                  non-refundable.
                </li>
                <li>
                  We may decline refund requests in cases of misuse, fraud, or
                  violation of our Terms &amp; Conditions.
                </li>
                <li>
                  Nothing in this policy limits any rights you may have under
                  applicable consumer protection laws.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

