// Before editing release copy, read docs/content-and-voice.md and the product
// updates workflow in docs/routing-and-pages.md.
export type UpdateFeature = {
  title: string
  description: string
  capabilities: string[]
  steps?: string[]
}

export type ProductUpdate = {
  version: string
  releasedAt: string
  releaseLabel?: string
  title: string
  summary: string
  features: UpdateFeature[]
  screenshotSrc?: string
  screenshotAlt?: string
  accentImageSrc?: string
  accentImageAlt?: string
}

export const productUpdates: ProductUpdate[] = [
  {
    version: '0.3.8',
    releasedAt: '2026-08-14',
    releaseLabel: 'Current release',
    title: 'Know more before every follow-up',
    summary:
      'Apollo and Fathom are now live in Donna, bringing contact research, company details, meeting history, summaries, action items, and transcripts into your CRM beside Gmail. Get the context you need before your next email or call without piecing it together across tabs.',
    features: [
      {
        title: 'Research the relationship without leaving Gmail',
        description:
          'Connect Apollo to find saved contacts, add useful company details, and confirm the workspace behind your results - all from Donna while you work in Gmail.',
        capabilities: [
          'Find contacts already saved in your Apollo workspace',
          'Add useful Apollo details to a company using its domain',
          'Confirm which Apollo user and workspace are connected',
          'Review and confirm before company research uses an Apollo credit',
        ],
        steps: [
          'Open Donna in Gmail, choose Agents, then open Apps.',
          'Find Apollo, select Connect, and approve access.',
          'Choose an Apollo task and tell Donna what you would like to find.',
        ],
      },
      {
        title: 'Keep every meeting close to the relationship',
        description:
          'Fathom is now live in Donna. Matching meeting recordings, summaries, action items, and transcripts appear in the contact profile, helping you pick up where the conversation left off before your next email or call.',
        capabilities: [
          'See Fathom recordings matched to each Donna contact',
          'Review available summaries and action items before following up',
          'Read transcript excerpts in Donna and load more when you need detail',
          'Open the original recording in Fathom whenever you want to revisit it',
        ],
        steps: [
          'Open Agents, choose Apps, and connect Fathom.',
          'Open a Donna contact and choose Meeting transcripts.',
          'Expand a meeting to review its summary, action items, and transcript.',
        ],
      },
    ],
  },
  {
    version: '0.3.7',
    releasedAt: '2026-07-10',
    title: 'Bring Donna to Brave',
    summary:
      'Prefer Brave? You can now use Donna’s Gmail context, contact enrichment, labels, meeting tools, Google Sheets imports, and Drive file context without switching browsers.',
    features: [
      {
        title: 'Donna for Brave',
        description:
          'Bring your Gmail-first CRM workflow to Brave, from seeing the context behind a conversation to organizing email and working with connected Google tools.',
        capabilities: [
          'See contact and pipeline context beside Gmail conversations',
          'Organize conversations with Gmail labels and Donna workflows',
          'Schedule meetings, import contacts from Sheets, and view related Drive files',
          'Keep Google access protected outside browser storage',
        ],
        steps: [
          'Install or update Donna CRM in Brave.',
          'Sign in and connect the Google tools you want to use.',
          'Open Gmail and carry on - Donna recognizes Brave automatically.',
        ],
      },
    ],
  },
  {
    version: '0.3.6',
    releasedAt: '2026-03-25',
    title: 'A smoother first day with Donna',
    summary:
      'Donna now guides you from installation to your first useful workflow, so you can start small, see your progress, and discover more when you are ready.',
    accentImageSrc: '/donna-avatar.png',
    accentImageAlt: 'Donna assistant waving',
    features: [
      {
        title: 'A clear path to your first win',
        description:
          'Donna walks you through the most useful first steps, helping you get value quickly and add more as your workflow grows.',
        capabilities: [
          'Know exactly what to do after connecting your account',
          'Discover each feature with a short, helpful introduction',
          'Pause setup and pick up where you left off at any time',
        ],
        steps: [
          'Choose Get started when Donna opens for the first time.',
          'Follow the checklist to set up the features that fit your work.',
          'Explore each feature when you are ready to put it to use.',
        ],
      },
      {
        title: 'See your progress come to life',
        description:
          'Your setup becomes a simple pipeline inside Donna, giving you a hands-on introduction to the same visual workflow you can use for deals, candidates, clients, and more.',
        capabilities: [
          'See every setup step in one easy-to-follow view',
          'Watch completed steps move into Done as you make progress',
          'Explore a sample Donna Support contact to see how relationship context works',
        ],
      },
      {
        title: 'Connect more when you are ready',
        description:
          'Start using Donna without linking every Google service at once. Calendar, Drive, and Sheets are introduced when you choose a feature that uses them.',
        capabilities: [
          'Schedule meetings or check availability with Google Calendar',
          'View files connected to a contact from Google Drive',
          'Import contacts from Google Sheets',
        ],
      },
    ],
  },
  {
    version: '0.3.5',
    releasedAt: '2026-03-11',
    title: 'Let Donna scan while you keep working',
    summary:
      'Start an inbox scan, return to your email, and let Donna prepare recommendations in the background. It remembers where it left off and lets you know when everything is ready.',
    features: [
      {
        title: 'An inbox scan that does not interrupt your day',
        description:
          'You no longer need to keep the setup screen open while Donna learns from your recent conversations. Carry on with email and come back when your personalized suggestions are ready.',
        capabilities: [
          'Keep working in Gmail while Donna reviews recent conversations',
          'Pick up the same scan after Gmail or the extension restarts',
          'Get a notification when your recommendations are ready',
          'Return later to review recommendations that are already ready',
        ],
        steps: [
          'Start an inbox scan during setup.',
          'Return to Gmail and carry on with your day.',
          'Open Donna when the scan is ready to review your suggested contacts, pipelines, and follow-ups.',
        ],
      },
    ],
  },
  {
    version: '0.3.4',
    releasedAt: '2026-03-08',
    title: 'Use Donna in the language that feels natural',
    summary:
      'Donna now speaks English, German, French, Dutch, Filipino, and Russian, making it easier to manage relationships in the language you know best.',
    features: [
      {
        title: 'Six languages, one familiar Donna',
        description:
          'From everyday labels to helpful guidance and settings, Donna can match one of six supported browser languages.',
        capabilities: [
          'Work in English, German, or Dutch',
          'Work in French, Filipino, or Russian',
          'See Donna guidance and settings in your chosen language',
        ],
        steps: [
          'Choose a supported language in your browser settings.',
          'Reload Gmail after changing the language.',
          'Donna will open in the matching language.',
        ],
      },
    ],
  },
  {
    version: '0.3.1',
    releasedAt: '2026-02-13',
    title: 'Turn your inbox into a ready-to-use CRM',
    summary:
      'Instead of starting from a blank CRM, Donna reviews recent conversations and suggests the contacts, pipelines, and follow-ups that already matter to you.',
    features: [
      {
        title: 'A head start built from your inbox',
        description:
          'Donna looks across up to 50 recent Gmail conversations to find the people, active work, and next steps worth bringing into your CRM.',
        capabilities: [
          'Get pipeline suggestions shaped around sales, hiring, support, or other work in your inbox',
          'Find contacts worth adding, with helpful tags',
          'Surface follow-ups that could otherwise slip through the cracks',
          'Keep recommended pipeline cards connected to their Gmail threads',
        ],
        steps: [
          'Ask Donna to set up your CRM from your Gmail inbox.',
          'Confirm the inbox scan.',
          'Review the suggested pipelines, contacts, and follow-up tasks.',
          'Choose whether to include contacts and tasks, then create your pipelines.',
        ],
      },
      {
        title: 'Review everything before it is created',
        description:
          'See the pipelines Donna recommends first, then decide whether to also import the suggested contacts and create follow-up tasks.',
        capabilities: [
          'Preview recommended pipeline names, stages, fields, and cards',
          'Choose whether to import the suggested contacts',
          'Choose whether to create the suggested follow-up tasks',
        ],
      },
    ],
  },
  {
    version: '0.3',
    releasedAt: '2026-01-27',
    title: 'Meet Donna: your CRM inside Gmail',
    summary:
      'Donna brings contacts, deals, follow-ups, email context, and AI help into the inbox, so your relationships can move forward without another tool competing for your attention.',
    screenshotSrc: '/screenshots/Updates%20Overview%20V2.png',
    screenshotAlt: 'Donna CRM overview workspace inside Gmail',
    features: [
      {
        title: 'Everything you need to keep relationships moving',
        description:
          'Keep contacts, deals, and next steps beside the conversations that drive them. No separate spreadsheet, no extra tab, and far less catching up later.',
        capabilities: [
          'Remember every relationship with searchable notes, tags, and activity',
          'See deals and other work move through flexible visual stages',
          'Give every contact or opportunity a clear next step and due date',
        ],
        steps: [
          'Open Donna from Gmail.',
          'Find or create a contact from the conversation in front of you.',
          'Add them to a pipeline and set the next follow-up.',
        ],
      },
      {
        title: 'The right context, beside every conversation',
        description:
          'Open an email and immediately see who you are speaking with, what is in progress, and what should happen next.',
        capabilities: [
          'See contact details while reading the conversation',
          'Know which deals or workflows are connected to the thread',
          'Open the full relationship record whenever you need the bigger picture',
        ],
      },
      {
        title: 'An AI assistant that knows the conversation',
        description:
          'Ask Donna to make sense of a long thread, help with a reply, or turn a conversation into a useful next step.',
        capabilities: [
          'Catch up on long conversations in seconds',
          'Draft a thoughtful reply using the email in front of you',
          'Turn conversation details into contacts, tasks, or deal updates you can review',
        ],
      },
      {
        title: 'Grow from personal follow-ups to repeatable outreach',
        description:
          'When you are ready to do more, Donna helps you reach groups, spot engagement, automate repeat work, and make time for the next conversation.',
        capabilities: [
          'Send personal campaigns to the right groups of contacts',
          'Use email engagement as a signal for when to follow up',
          'Automate the CRM steps you repeat most often',
          'Schedule meetings with Google Calendar when a conversation is ready to move forward',
        ],
      },
    ],
  },
]

export const latestProductUpdate = productUpdates[0]
