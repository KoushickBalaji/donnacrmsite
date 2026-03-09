export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  title: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    title: 'Getting started',
    items: [
      {
        question: 'What is Donna CRM?',
        answer:
          'Donna is a lightweight CRM that runs inside Gmail as a Chrome extension. It gives you contact context, deal tracking, tasks, email campaigns, and AI assistance right in your sidebar - so you never have to leave your inbox to manage relationships.',
      },
      {
        question: 'How do I install Donna CRM?',
        answer:
          'Install the extension from the Chrome Web Store, then refresh or reopen Gmail. Donna will appear in your sidebar. Open it, sign in with your Google account, and follow two quick permission prompts. The whole process takes about 30 seconds.',
      },
      {
        question: 'Does Donna work with Google Workspace?',
        answer:
          'Yes. Donna works with both personal Gmail and Google Workspace accounts. If your organization restricts Chrome extensions or Google OAuth access, your admin may need to allow Donna for your account.',
      },
      {
        question: 'What browsers are supported?',
        answer:
          'Donna is a Chrome extension. It also works in Chromium-based browsers that support the Chrome Web Store, like Microsoft Edge and Brave.',
      },
      {
        question: 'What is the best way to get started?',
        answer:
          'Start small. Add a few active contacts, create a simple pipeline with 3-4 stages, and set a follow-up task for each conversation that needs a next step. You can explore campaigns, AI features, and email tracking once the basics feel natural.',
      },
    ],
  },
  {
    title: 'Features',
    items: [
      {
        question: 'What can the AI assistant do?',
        answer:
          'The AI assistant helps you move through your inbox faster. It can summarize long threads, draft replies in your tone, and turn conversations into tasks, notes, and deal updates. You always review and edit before anything sends - Donna never acts without your approval.',
      },
      {
        question: 'How do pipelines and deals work?',
        answer:
          'You can turn any email into a deal and track it through customizable pipeline stages using a drag-and-drop board. Pipelines work for sales, recruiting, partnerships, or anything that moves through stages. Each deal stays linked to the contact and conversation it came from.',
      },
      {
        question: 'Can I send bulk email campaigns?',
        answer:
          'Yes. Donna includes mail merge campaigns with personalized merge fields, so each recipient gets a message that feels individual. You get open and click tracking for every campaign, plus unsubscribe handling.',
      },
      {
        question: 'How does email tracking work?',
        answer:
          'Donna supports open tracking for both campaigns and regular 1:1 emails. Click tracking works for campaigns and can be enabled for individual emails too. Tracking is best treated as a helpful signal - some recipients block images or use privacy tools that can affect results.',
      },
      {
        question: 'Can I import my existing contacts?',
        answer:
          'Yes. You can import contacts from CSV files and Google Sheets. After import you can add tags, notes, and deal associations. Many users start with just their active relationships and add more over time.',
      },
    ],
  },
  {
    title: 'Pricing and billing',
    items: [
      {
        question: 'What are the pricing plans?',
        answer:
          'Donna has one plan with everything included - no feature tiers or upgrades to worry about. Launch pricing is $10/month (monthly) or $8/month billed annually at $96/year. Every plan starts with a 14-day free trial.',
      },
      {
        question: 'How does the free trial work?',
        answer:
          'You get a 14-day free trial starting from sign-up. No credit card required. Use Donna in your real workflow during the trial, and if it is not the right fit, just uninstall - you will not be charged.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. You can cancel during the trial or at any point after. If you cancel before the trial ends, you will not be charged. After that, your access continues through the end of your current billing period.',
      },
      {
        question: 'Will pricing go up later?',
        answer:
          'The $8 and $10 rates are launch pricing while Donna is in early access. Standard pricing will be higher. If you start your trial now, you lock in the launch rate for as long as you stay subscribed.',
      },
    ],
  },
  {
    title: 'Privacy and security',
    items: [
      {
        question: 'Is my data secure?',
        answer:
          'Donna is CASA certified and has passed an independent third-party security audit - the same standard Google requires for apps that access Gmail. All data is protected with industry-standard encryption, and Donna only requests the permissions it needs to run CRM features inside your inbox.',
      },
      {
        question: 'What permissions does Donna need?',
        answer:
          'Donna requests four permissions: Gmail (for CRM context, tracking, campaigns, and AI features), Google Calendar (for scheduling meetings and Google Meet links), Google Drive (for file imports and related workflows), and Google Sheets (for contact imports). Each permission maps to a specific feature, and you will see the exact permissions requested in Chrome before you grant access.',
      },
      {
        question: 'Does the AI assistant access my email content?',
        answer:
          'The AI processes email content to generate summaries, draft replies, and suggest next steps. It works on the thread you are viewing - it does not scan your entire inbox. Your data is handled with the same encryption and security standards as the rest of Donna.',
      },
    ],
  },
  {
    title: 'Support',
    items: [
      {
        question: 'What if I need help or have issues?',
        answer:
          'Reach out via the Contact page with a short description of what is happening. Including a screenshot and your browser version helps us resolve things faster. We typically respond within one business day.',
      },
      {
        question: 'Can I use Donna CRM with my team?',
        answer:
          'Not right now. Donna is designed for individuals and solo operators - founders, freelancers, recruiters, and consultants who manage their own relationships. There are no shared workspaces or team administration features.',
      },
      {
        question: "What's coming next?",
        answer:
          'We are focused on making follow-ups and inbox workflows even better - including follow-up reminders, more integrations, and workflow automation. The goal stays the same: keep Donna lightweight and Gmail-native. Roadmap items can shift, but the direction will not.',
      },
    ],
  },
]

/** Flat list for JSON-LD schema and backward compatibility. */
export const faqs = faqCategories.flatMap((c) => c.items)
