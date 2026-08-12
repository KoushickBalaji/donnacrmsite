export type ResourceArticleSection = {
  id: string
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  steps?: string[]
  templates?: Array<{
    label: string
    content: string
  }>
  note?: string
}

export type ResourceArticleFaq = {
  question: string
  answer: string
}

export type ResourceArticleLink = {
  href: string
  label: string
}

export type ResourceTopicCluster =
  | 'gmail-crm-foundations'
  | 'consulting-workflows'
  | 'freelance-workflows'
  | 'ai-assisted-workflows'
  | 'solo-sales-workflows'
  | 'outreach-tool-workflows'
  | 'follow-up-workflows'

export type ResourceArticle = {
  slug: string
  topicCluster: ResourceTopicCluster
  title: string
  seoTitle?: string
  description: string
  category: string
  publishedAt: string
  updatedAt?: string
  readingTimeMinutes: number
  primaryInternalLink: ResourceArticleLink
  supportingInternalLinks: ResourceArticleLink[]
  sections: ResourceArticleSection[]
  faqs: ResourceArticleFaq[]
  faqSubtitle?: string
}

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'gmail-crm-for-consultants-workflow',
    topicCluster: 'consulting-workflows',
    title: 'Gmail CRM for consultants: a lightweight workflow',
    seoTitle: 'Gmail CRM for Consultants',
    description:
      'A practical Gmail-first workflow for solo consultants: track client context, engagement stages, and next steps without turning CRM into a second job.',
    category: 'Consulting workflows',
    publishedAt: '2026-02-16',
    updatedAt: '2026-03-24',
    readingTimeMinutes: 7,
    faqSubtitle: 'Common questions about running a consulting workflow inside Gmail.',
    primaryInternalLink: { href: '/crm-for-consultants', label: 'CRM for consultants' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/ai-gmail-crm', label: 'AI assistant (human-in-the-loop)' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-gmail-crm',
        heading: 'Why consultants need a Gmail CRM (not a full team CRM)',
        paragraphs: [
          'Most solo consultants do not lose deals because they lack a dashboard. They lose momentum because follow-ups slip, context gets buried in threads, and it becomes hard to answer a simple question: "What is the next step for this client?"',
          'A Gmail CRM is a different category than a traditional team CRM. The goal is not perfect data entry. The goal is a lightweight system that lives where the work already happens: your inbox.',
          'If you sell and deliver through email, a Gmail-native CRM helps you keep client context close to the conversation, capture next steps as you go, and review your pipeline without rebuilding your workflow.',
        ],
      },
      {
        id: 'workflow',
        heading: 'The lightweight workflow: thread -> contact -> stage -> next step',
        paragraphs: [
          'A simple consultant CRM workflow can be built on one repeatable loop:',
        ],
        steps: [
          'Start from a real client thread (not a blank spreadsheet).',
          'Attach the thread to a contact so the relationship has a home.',
          'Place the client or deal into a simple stage-based pipeline.',
          'Capture the next step as a task (even if it is just "send recap").',
          'Review weekly, update stages, and close the loop on stalled work.',
        ],
        note:
          'The point is not to track everything. The point is to make it hard for a relationship to go quiet without you noticing.',
      },
      {
        id: 'pipeline-stages',
        heading: 'Pipeline stages you can copy for consulting',
        paragraphs: [
          'Consulting pipelines work best when stages are about commitment, not activity. Here is a simple baseline you can adapt:',
        ],
        bullets: [
          'Discovery: early conversations, problem scoping, initial fit.',
          'Proposal: proposal shared, decision pending, stakeholders involved.',
          'Active: signed or agreed, delivery in progress, check-ins scheduled.',
          'Renewal: expanding scope, renewing retainer, preparing next phase.',
          'Dormant: paused conversations you do not want to forget about.',
        ],
      },
      {
        id: 'next-step-rule',
        heading: 'The one rule that keeps your CRM updated',
        paragraphs: [
          'If you only adopt one habit, make it this: every active relationship should have a next step.',
          'When you finish reading a thread, you should be able to answer one question: "What happens next, and when?" If the answer is unclear, the relationship becomes a guessing game.',
        ],
        bullets: [
          'If you owe the client something, your next step is the deliverable.',
          'If you are waiting on the client, your next step is a follow-up date.',
          'If the deal is undecided, your next step is the decision trigger (meeting, feedback, call).',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'A weekly review that takes 15 minutes',
        paragraphs: [
          'A lightweight CRM only works if you review it. The good news: you do not need a long process. A short weekly review is enough to stay ahead of silent stalls.',
        ],
        steps: [
          'Scan your pipeline from later stages to earlier stages.',
          'For each item, confirm there is a next step task.',
          'Move anything that changed stages (proposal sent, signed, delivered).',
          'Archive or mark dormant anything that is truly cold.',
          'Pick the top 3 follow-ups for the week and do them first.',
        ],
      },
      {
        id: 'how-donna-helps',
        heading: 'How Donna supports this inside Gmail',
        paragraphs: [
          'Donna CRM is designed for this exact Gmail-first loop: keep context in the inbox, keep stages lightweight, and keep next steps visible.',
          'If you want speed without losing control, the AI assistant can help you draft follow-ups, summarize threads, and suggest next steps. You still review and confirm actions before anything important happens.',
        ],
        bullets: [
          'Contact context in Gmail: notes and related work next to the conversation.',
          'Pipelines for engagement stages: simple columns that match your process.',
          'Tasks for next steps: capture follow-ups while the thread is fresh.',
          'Optional tracking signals: use opens and clicks as a timing hint, not a guarantee.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a full CRM for consulting?',
        answer:
          'If you are a solo consultant and most client work lives in email, a Gmail-native CRM is often enough. You get structure (stages and next steps) without heavy admin. If you need complex reporting or team permissions, a team CRM may be a better fit.',
      },
      {
        question: 'How many stages should my consulting pipeline have?',
        answer:
          'Keep it small. Most solo consulting workflows work well with 4-6 stages. If you have to think too hard about where something belongs, the pipeline is too complicated.',
      },
      {
        question: 'What should I do with old leads?',
        answer:
          'Do not delete them. Move them to a Dormant stage and add a single follow-up task for a realistic date. If there is no follow-up worth doing, archive the item so your pipeline stays honest.',
      },
    ],
  },
  {
    slug: 'follow-up-system-in-gmail',
    topicCluster: 'follow-up-workflows',
    title: 'A simple follow-up system in Gmail (templates + reminders)',
    seoTitle: 'Simple Gmail Follow-up System',
    description:
      'A repeatable follow-up system you can run directly from Gmail: clear next steps, a light cadence, and email templates that do not feel spammy.',
    category: 'Follow-up systems',
    publishedAt: '2026-02-16',
    updatedAt: '2026-03-17',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about follow-up cadences, templates, and timing.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'Solo B2B sales workflow' },
      { href: '/ai-gmail-crm', label: 'AI assistant in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-follow-ups-slip',
        heading: 'Why follow-ups slip when everything lives in Gmail',
        paragraphs: [
          'Gmail is great for sending and receiving. It is not great at answering: "Who needs a follow-up, and what should I say?"',
          'Threads get buried. Context is split across tabs. And when you finally remember to follow up, you are doing it under pressure instead of from a calm, repeatable system.',
        ],
      },
      {
        id: 'the-system',
        heading: 'The 4-part follow-up system (simple and repeatable)',
        paragraphs: [
          'A follow-up system does not need automation to work. It needs consistency. Use this 4-part approach:',
        ],
        bullets: [
          'A next step for every active thread (what happens next, and when).',
          'A light cadence you can stick to (so you do not guess).',
          'A small set of templates (so you do not start from scratch).',
          'A weekly review habit (so nothing silently stalls).',
        ],
      },
      {
        id: 'templates',
        heading: 'Follow-up email templates you can reuse',
        paragraphs: [
          'Templates work best when they are short, specific, and respectful. Replace braces with your details, and keep the tone consistent with how you normally write.',
        ],
        templates: [
          {
            label: 'Follow-up after no reply (friendly)',
            content:
              'Subject: Quick follow-up on {topic}\n\nHi {first_name},\n\nJust bumping this in case it got buried. Are you still the right person to talk to about {topic}?\n\nIf yes, I can share a simple next step: {next_step}.\n\nThanks,\n{your_name}',
          },
          {
            label: 'Follow-up after sending a proposal',
            content:
              'Subject: Proposal for {project} - any questions?\n\nHi {first_name},\n\nChecking in on the proposal I sent over. Happy to clarify scope, timing, or anything that would help you make a decision.\n\nIf it is easier, I can also send a 3-bullet summary of options.\n\nBest,\n{your_name}',
          },
          {
            label: 'Close the loop (polite)',
            content:
              'Subject: Closing the loop on {topic}\n\nHi {first_name},\n\nI have not heard back, so I am going to close the loop for now. If priorities change, reply anytime and I will reopen this.\n\nThanks,\n{your_name}',
          },
        ],
      },
      {
        id: 'cadence',
        heading: 'A cadence that does not burn bridges',
        paragraphs: [
          'Most follow-up anxiety comes from improvising. A simple cadence removes the guesswork and keeps your messaging consistent.',
          'A reasonable default for B2B conversations is:',
        ],
        bullets: [
          'Day 2: friendly follow-up (assume it was buried).',
          'Day 5: proposal questions or a specific next step.',
          'Day 10: close-the-loop message.',
        ],
        note:
          'Adjust based on deal size and urgency. The key is to decide once, then reuse the system.',
      },
      {
        id: 'run-it-in-donna',
        heading: 'How to run this inside Donna CRM',
        paragraphs: [
          'Donna is built for follow-up workflows that live in Gmail. The core habit is to capture the next step while you are reading the thread.',
          'Use a pipeline stage like "Waiting on reply" and a task due date to make follow-ups visible in one place. When the client replies, move the stage and capture the next step again.',
          'If you want help drafting, the AI assistant can generate a follow-up draft from the thread context. You edit it, keep your voice, and decide when to send.',
        ],
      },
      {
        id: 'mistakes',
        heading: 'Common mistakes (and how to avoid them)',
        bullets: [
          'No next step: if there is no task, the follow-up becomes a memory game.',
          'Too many templates: start with 3, earn the right to add more later.',
          'Over-trusting tracking: opens and clicks are timing hints, not truth.',
          'Skipping review: a weekly scan keeps your system honest.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many follow-ups is too many?',
        answer:
          'If you are respectful and add useful context, 2-3 follow-ups is normal in B2B. If the conversation is cold after that, close the loop and move on.',
      },
      {
        question: 'Should I use email tracking for follow-ups?',
        answer:
          'Tracking can be a helpful signal, especially for proposals. Use it to time a follow-up, not to pressure someone. Always assume tracking is imperfect and can be blocked.',
      },
      {
        question: 'What if I have multiple deals per contact?',
        answer:
          'Separate the deal from the relationship. Keep one contact record, and track different deals or engagements as separate pipeline items so the next step is always clear.',
      },
    ],
  },
  {
    slug: 'inbox-to-pipeline',
    topicCluster: 'gmail-crm-foundations',
    title: 'Inbox to pipeline: turn conversations into next steps',
    seoTitle: 'Inbox to Pipeline Workflow',
    description:
      'Turn email threads into a lightweight pipeline: keep context in Gmail, capture next steps as tasks, and review work without spreadsheets.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about turning email threads into a tracked pipeline.',
    primaryInternalLink: { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'email-is-not-a-system',
        heading: 'Email is context, not a system',
        paragraphs: [
          'Email threads contain the story: what was said, what was promised, and what the client cares about.',
          'But email does not naturally create a system. It does not give you a single place to review open loops, see stalled work, or answer "what should I do next?" without scanning your entire inbox.',
          'A pipeline fixes that by giving you a lightweight view of work in progress, without forcing you to leave Gmail.',
        ],
      },
      {
        id: 'the-model',
        heading: 'The model: thread -> contact -> pipeline item -> next step',
        paragraphs: [
          'If you want a system that stays updated, keep the workflow close to the thread. A simple model is:',
        ],
        bullets: [
          'Thread: the ground truth for what happened.',
          'Contact: the relationship record (notes, context, history).',
          'Pipeline item: the current engagement (deal, project, role, partnership).',
          'Task: the next step that prevents silence.',
        ],
      },
      {
        id: 'examples',
        heading: 'Examples: consulting, solo sales, and recruiting',
        paragraphs: [
          'The same model works across many solo workflows. The only thing that changes is your pipeline stages and task habits.',
        ],
        bullets: [
          'Consulting: Discovery -> Proposal -> Active -> Renewal, with tasks for recaps, deliverables, and check-ins.',
          'Solo sales: Lead -> Meeting -> Proposal -> Negotiation -> Closed, with tasks for follow-ups and stakeholder alignment.',
          'Recruiting: New lead -> Intake -> Shortlist -> Interviews -> Placement, with tasks for scheduling and feedback loops.',
        ],
      },
      {
        id: 'where-ai-helps',
        heading: 'Where an AI assistant helps (without taking control away from you)',
        paragraphs: [
          'A good AI assistant does not replace your judgment. It reduces the time it takes to do the work you already do: summarizing threads, drafting follow-ups, and capturing next steps.',
          'The human-in-the-loop approach matters because inbox work is sensitive. You review suggestions, edit drafts in your voice, and confirm actions before anything is created or sent.',
        ],
        bullets: [
          'Summarize a thread into a short context note.',
          'Draft a follow-up email based on the conversation so far.',
          'Suggest the next step and create a task with your approval.',
          'Recommend a first pipeline setup from recent threads (inbox onboarding).',
        ],
      },
      {
        id: 'start-simple',
        heading: 'Start simple: one pipeline, a few stages, and a weekly review',
        paragraphs: [
          'You do not need a complex setup to get value. Start with one pipeline and 4-6 stages. Then focus on the habit: every active item has a next step.',
          'Once the system works, you can add a second pipeline for a separate workflow. But earn the complexity by proving the simple loop first.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to move every thread into a pipeline?',
        answer:
          'No. Only move relationships that matter. Pipelines are for work in progress: open deals, active projects, or conversations you intend to follow up on.',
      },
      {
        question: 'How often should I review my pipeline?',
        answer:
          'Weekly is enough for most solo workflows. If you have a high-volume sales motion, you may also do a short daily scan of tasks due today.',
      },
      {
        question: 'What should I do if a pipeline gets messy?',
        answer:
          'Simplify stages and archive cold items. The pipeline is a tool for focus, not a record of every email you have ever sent.',
      },
    ],
  },
  {
    slug: 'track-deals-from-email-threads',
    topicCluster: 'solo-sales-workflows',
    title: 'How to track deals from email threads (without spreadsheets)',
    seoTitle: 'Track Deals from Email Threads',
    description:
      'A Gmail-first approach to tracking deals: simple stages, clear exit criteria, and next steps that keep your pipeline honest without manual spreadsheet updates.',
    category: 'Solo sales workflows',
    publishedAt: '2026-02-16',
    updatedAt: '2026-03-10',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about deal tracking and pipeline maintenance.',
    primaryInternalLink: {
      href: '/crm-for-solo-b2b-sales',
      label: 'Solo B2B sales CRM inside Gmail',
    },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-spreadsheets-fail',
        heading: 'Why spreadsheets fail for deal tracking',
        paragraphs: [
          'Spreadsheets work until they do not. The moment you are busy, your spreadsheet becomes stale because updates are separate from the conversation.',
          'That is the core problem: data entry happens after the fact. By the time you update a row, the thread has moved on and you are already behind on the next step.',
        ],
      },
      {
        id: 'build-a-light-pipeline',
        heading: 'Build a lightweight pipeline (stages you can actually maintain)',
        paragraphs: [
          'The best pipeline is the one you will keep updated. Start with stages that match real commitment:',
        ],
        bullets: [
          'Lead: initial conversation and qualification.',
          'Meeting: discovery call scheduled or completed.',
          'Proposal: proposal sent and decision pending.',
          'Negotiation: objections, procurement, or final alignment.',
          'Closed: won or lost (archive after you learn).',
        ],
      },
      {
        id: 'exit-criteria',
        heading: 'Define simple exit criteria for each stage',
        paragraphs: [
          'Stages become meaningful when you define what changes them. Keep it practical:',
        ],
        bullets: [
          'Lead -> Meeting: a time is scheduled.',
          'Meeting -> Proposal: you have requirements and you committed to send a proposal.',
          'Proposal -> Negotiation: they engaged with scope, pricing, or timeline.',
          'Negotiation -> Closed: a clear yes or no.',
        ],
      },
      {
        id: 'next-step',
        heading: 'Use the next-step rule to prevent stalls',
        paragraphs: [
          'A pipeline is not just a board. It is a focus tool. The next-step rule keeps it honest: every open deal has a next step task.',
          'When you finish an email thread, decide the next action while the context is fresh. That is the moment your CRM stays updated.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'The weekly pipeline review (10 to 20 minutes)',
        steps: [
          'Scan your Proposal and Negotiation stages first.',
          'Add a next step task to anything that feels quiet.',
          'Move deals that progressed. Archive deals that are truly dead.',
          'Pick the top follow-ups and do them before new outreach.',
        ],
      },
      {
        id: 'tracking-signals',
        heading: 'Use tracking signals as hints, not guarantees',
        paragraphs: [
          'Email tracking can help you time follow-ups, especially for proposals. But opens can be blocked, and clicks do not always mean intent.',
          'Treat tracking like a signal that helps you prioritize, not a source of truth.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a complex sales CRM to track deals?',
        answer:
          'Not if you are selling solo and most work happens in Gmail. A lightweight pipeline plus next-step tasks is often enough to stay on top of follow-ups and avoid stale data.',
      },
      {
        question: 'How many deals should I keep active?',
        answer:
          'Only keep deals active if you are willing to take the next step. If a deal has no next step, it is a distraction. Move it to a Dormant stage or close it out.',
      },
      {
        question: 'Should I track every email as a deal?',
        answer:
          'No. Create pipeline items for real opportunities. If it is not an opportunity or a relationship you plan to nurture, keep it as email only.',
      },
    ],
  },
  {
    slug: 'personal-crm-inside-gmail-setup',
    topicCluster: 'gmail-crm-foundations',
    title: 'Personal CRM inside Gmail: set it up in 15 minutes',
    seoTitle: 'Personal CRM Inside Gmail',
    description:
      'A fast setup guide for a personal Gmail CRM: install, create a simple pipeline, capture next steps from real threads, and build a weekly review habit.',
    category: 'Getting started',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 6,
    faqSubtitle: 'Common questions about getting started with a personal Gmail CRM.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'what-you-need',
        heading: 'What you need before you start',
        bullets: [
          'A Gmail account you use for client or deal conversations.',
          'A simple workflow you can name in one sentence (sales, consulting, recruiting).',
          'A willingness to keep the system lightweight for the first week.',
        ],
      },
      {
        id: 'setup-steps',
        heading: 'The 15-minute setup (step by step)',
        steps: [
          'Install Donna CRM and open Gmail.',
          'Choose one pipeline and 4-6 stages that match your workflow.',
          'Pick one real thread and create a contact from it.',
          'Add one short note: why this relationship matters.',
          'Create one next step task (with a due date you will respect).',
          'Repeat for 3-5 active relationships to seed your pipeline.',
        ],
        note:
          'If you prefer to start from your real inbox, inbox onboarding can recommend a sensible first setup. You review suggestions and confirm what gets created.',
      },
      {
        id: 'keep-it-light',
        heading: 'Keep it lightweight for the first week',
        paragraphs: [
          'The fastest way to abandon a CRM is to overbuild it. Start small, then expand only after the habit sticks.',
        ],
        bullets: [
          'Do not add custom fields unless you use them weekly.',
          'Do not create extra stages unless they change decisions.',
          'Do not import a huge list on day one. Start with active relationships.',
        ],
      },
      {
        id: 'first-week-habit',
        heading: 'The habit that makes it work: a weekly review',
        paragraphs: [
          'Once a week, scan your pipeline and tasks. Make sure everything active has a next step. Close out anything that is stale.',
          'That review is the difference between "a CRM I installed" and "a system I trust".',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I import my entire contact list?',
        answer:
          'Not at first. Start with active relationships and current opportunities. Once the workflow feels natural, import historical contacts if you want them in the system.',
      },
      {
        question: 'What if my workflow is not sales?',
        answer:
          'Pipelines are flexible. You can use stages for consulting engagements, recruiting roles, partnerships, or any process that benefits from clear next steps.',
      },
      {
        question: 'How do I avoid turning this into admin work?',
        answer:
          'Keep stages minimal, capture a next step task from the thread, and review weekly. If something does not change decisions, it does not belong in your system.',
      },
    ],
  },
  {
    slug: 'email-tracking-for-proposals',
    topicCluster: 'follow-up-workflows',
    title: 'Email tracking for proposals: what to expect (and what not to)',
    seoTitle: 'Proposal Email Tracking',
    description:
      'Use email tracking the right way: understand opens vs clicks, why results can be imperfect, and how to follow up with better timing and less guesswork.',
    category: 'Email tracking',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 7,
    faqSubtitle: 'Common questions about email tracking accuracy and ethical use.',
    primaryInternalLink: {
      href: '/email-tracking-in-gmail',
      label: 'Email tracking in Gmail',
    },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/resources/follow-up-system-in-gmail', label: 'Follow-up system guide' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'what-tracking-is',
        heading: 'What email tracking is (and why it is useful for proposals)',
        paragraphs: [
          'Proposal follow-ups are hard because silence is ambiguous. Email tracking can reduce that ambiguity by giving you a signal that an email was opened or a link was clicked.',
          'Used well, tracking helps you choose better timing. Used poorly, it can create false certainty. The key is to understand what tracking can and cannot tell you.',
        ],
      },
      {
        id: 'open-tracking',
        heading: 'What open tracking really means',
        paragraphs: [
          'Open tracking typically records an event when a tracking image is loaded. That is a useful signal, but it is not perfect.',
        ],
        bullets: [
          'Some clients block images, so opens can be undercounted.',
          'Some privacy features can inflate opens or mask behavior.',
          'Forwarding can create opens that do not reflect the decision-maker.',
        ],
        note:
          'Treat opens as a hint that your email was likely seen, not a guarantee that it was read.',
      },
      {
        id: 'click-tracking',
        heading: 'Click tracking: often more actionable than opens',
        paragraphs: [
          'Click tracking records an event when someone clicks a tracked link. For proposals, clicks are often a stronger signal because they show intent to view a doc or resource.',
          'Even clicks are not perfect (links can be shared or opened by assistants), but they are often a better cue for follow-up timing.',
        ],
      },
      {
        id: 'ethical-use',
        heading: 'Ethical use: do not let tracking make you weird',
        bullets: [
          'Use tracking to help you prioritize, not to pressure someone.',
          'Do not reference tracking directly in your email.',
          'Assume tracking is imperfect, and be respectful either way.',
        ],
      },
      {
        id: 'follow-up',
        heading: 'A proposal follow-up that feels professional',
        paragraphs: [
          'If you have a click signal, follow up with a helpful next step: clarify scope, offer options, or suggest a short call. If you have no signal, follow up as if it was simply buried.',
        ],
        templates: [
          {
            label: 'Follow-up after a proposal click',
            content:
              'Subject: Quick question on the proposal for {project}\n\nHi {first_name},\n\nWanted to check if anything in the proposal needs clarification. If it helps, I can send a short summary of options and a recommended path.\n\nIf you want to talk it through, I can do a quick 15-minute call this week.\n\nBest,\n{your_name}',
          },
        ],
      },
      {
        id: 'how-donna-supports',
        heading: 'How Donna brings tracking into your Gmail CRM',
        paragraphs: [
          'Donna keeps tracking signals close to the relationship and the thread. That makes it easier to follow up with context, update deal stages, and keep your CRM accurate while you are already in Gmail.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is email tracking always accurate?',
        answer:
          'No. Opens and clicks can be blocked or distorted by privacy features. Treat tracking as a helpful signal, not a guarantee.',
      },
      {
        question: 'Should I follow up immediately after an open?',
        answer:
          'Usually no. Following up instantly can feel intrusive. Use opens and clicks to choose a reasonable time window, then follow up with a helpful next step.',
      },
      {
        question: 'What is the best follow-up if there is no tracking signal?',
        answer:
          'Assume the email was buried. Keep the follow-up short, specific, and respectful. Offer one simple next step or question that makes it easy to respond.',
      },
    ],
  },
  {
    slug: 'what-is-an-agentic-crm',
    topicCluster: 'ai-assisted-workflows',
    title: 'What is an agentic CRM? (human-in-the-loop explained)',
    seoTitle: 'What Is an Agentic CRM?',
    description:
      'A plain-English explanation of agentic CRMs: what "agentic" means, why human-in-the-loop matters, and how assistants can help safely.',
    category: 'AI workflows',
    publishedAt: '2026-02-16',
    updatedAt: '2026-03-03',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about agentic CRMs, AI assistants, and human-in-the-loop design.',
    primaryInternalLink: { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
    supportingInternalLinks: [
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
    ],
    sections: [
      {
        id: 'what-agentic-means',
        heading: 'What "agentic" means in a CRM',
        paragraphs: [
          'In plain terms, an agentic CRM is a CRM that does more than store data. It can propose next steps and take actions on your behalf (creating tasks, updating stages, drafting emails) based on the context of your work.',
          'The key difference is workflow. A traditional CRM asks you to do manual updates after the conversation. An agentic CRM tries to help you update and act while you are already in the conversation.',
        ],
      },
      {
        id: 'human-in-the-loop',
        heading: 'Human-in-the-loop: the safety layer that matters',
        paragraphs: [
          'Inbox workflows are sensitive. A system that changes records, drafts messages, or moves deal stages should not run unsupervised.',
          'Human-in-the-loop means the assistant can recommend and prepare actions, but you stay in control. You review suggestions, edit drafts, and confirm actions before they happen.',
        ],
        bullets: [
          'You control what gets created or updated.',
          'You can reject a suggestion without breaking the workflow.',
          'You can keep your voice in client communication.',
        ],
      },
      {
        id: 'examples',
        heading: 'Examples of agentic help inside Gmail',
        paragraphs: [
          'Agentic does not have to be dramatic. Most value comes from small time-savers that keep your system updated:',
        ],
        bullets: [
          'Summarize a thread into a short contact note.',
          'Draft a follow-up email that you can edit and send.',
          'Suggest the next step and create a task with your approval.',
          'Recommend pipeline stages from recent conversations (inbox onboarding).',
        ],
      },
      {
        id: 'permissions-and-privacy',
        heading: 'Permissions and privacy: what to look for',
        paragraphs: [
          'Any CRM assistant that works in Gmail will need some level of permissions. The right question is not "does it request permissions?" The right question is "are the permissions understandable, minimal, and aligned with the feature?"',
          'You should also expect clear explanations of how data is handled, how actions are confirmed, and how you can revoke access.',
        ],
      },
      {
        id: 'where-it-fits',
        heading: 'When an agentic CRM is a good fit (and when it is not)',
        bullets: [
          'Good fit: you live in Gmail, you sell or deliver through email, and you want to keep a lightweight system updated without a separate admin workflow.',
          'Not a fit: you need deep team permissions, complex reporting, or rigid enterprise processes that require heavy configuration.',
        ],
      },
      {
        id: 'how-donna-approaches-it',
        heading: 'How Donna approaches agentic workflows',
        paragraphs: [
          'Donna is designed as a Gmail-native CRM with a human-in-the-loop assistant. The assistant helps you move from thread to next step faster, while you stay in control of what gets created, updated, or sent.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is "agentic" the same as "autonomous"?',
        answer:
          'Not necessarily. Agentic systems can take actions, but they do not have to be autonomous. Human-in-the-loop design keeps you in control with review and confirmation.',
      },
      {
        question: 'Will an agentic CRM send emails automatically?',
        answer:
          'A safe agentic CRM should not send client-facing emails without you approving the final content and choosing when to send. Drafting and recommending is different than acting unsupervised.',
      },
      {
        question: 'What is the practical benefit for solo operators?',
        answer:
          'It reduces context switching. Instead of updating CRM fields later, you can capture context and next steps while you are already reading the thread.',
      },
    ],
  },
  {
    slug: 'consultant-pipeline-stages',
    topicCluster: 'consulting-workflows',
    title: 'Consultant pipeline stages you can copy-paste',
    description:
      'A lightweight consulting pipeline you can reuse: clear stages, exit criteria, and next-step habits that keep your client tracker accurate.',
    category: 'Consulting workflows',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 7,
    faqSubtitle: 'Common questions about pipeline design for solo consultants.',
    primaryInternalLink: { href: '/crm-for-consultants', label: 'CRM for consultants' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/ai-gmail-crm', label: 'AI assistant in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-stages',
        heading: 'Why stages matter for solo consulting',
        paragraphs: [
          'Consulting work has many moving parts: discovery calls, proposals, delivery, renewals, and referrals. Without stages, everything looks like "open email threads" and it becomes hard to prioritize.',
          'A simple pipeline gives you a quick view of where relationships stand, so you can focus on the next step that moves work forward.',
        ],
      },
      {
        id: 'stages',
        heading: 'The stage list (copy-paste baseline)',
        paragraphs: [
          'Use these stages as a starting point. Keep them about commitment, not busywork:',
        ],
        bullets: [
          'Discovery: initial conversations and scope shaping.',
          'Proposal: proposal sent or in progress; decision pending.',
          'Active: work is underway; delivery and check-ins happening.',
          'Renewal: expanding scope, planning the next phase, or renewing a retainer.',
          'Dormant: paused conversations you do not want to lose.',
        ],
      },
      {
        id: 'exit-criteria',
        heading: 'Simple exit criteria (so stages stay meaningful)',
        bullets: [
          'Discovery -> Proposal: you agreed on a direction and committed to send a proposal.',
          'Proposal -> Active: the client confirmed and you started delivery.',
          'Active -> Renewal: you are planning the next phase or renewal conversation.',
          'Any stage -> Dormant: there is no active next step worth doing this week.',
        ],
      },
      {
        id: 'next-step',
        heading: 'Pair stages with next steps (the part that prevents silence)',
        paragraphs: [
          'Stages answer "where are we?" Next steps answer "what happens next?" You need both.',
          'A good rule: every item in Proposal, Active, or Renewal has a next step task with a due date. If there is no next step, move it to Dormant so your pipeline stays honest.',
        ],
      },
      {
        id: 'variations',
        heading: 'Variations for different consulting models',
        bullets: [
          'Project-based: add a short "Scoping" stage before Proposal if you do paid discovery.',
          'Retainers: keep Renewal always active, and use tasks to drive check-in cadence.',
          'Multiple offerings: use separate pipelines per offering if the stages truly differ.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes to avoid',
        bullets: [
          'Too many stages: more than 6-7 usually becomes admin.',
          'Stages as activities: "Sent email" is not a stage; it is a task.',
          'No Dormant stage: you need a place for cold items that still matter.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many pipelines should a consultant have?',
        answer:
          'Start with one. Add a second only if the stages are genuinely different (for example, sales pipeline vs delivery pipeline). If it is just a label difference, keep one pipeline and use tags or notes.',
      },
      {
        question: 'Should delivery be tracked in the pipeline?',
        answer:
          'If your delivery has clear milestones you review weekly, yes. If you use a separate PM tool for delivery, keep the pipeline focused on relationship stages and key follow-ups.',
      },
      {
        question: 'What if a client is active but slow to respond?',
        answer:
          'Keep them in the stage that reflects commitment, but set a clear next step task. If there is no realistic next step, move to Dormant until timing changes.',
      },
    ],
  },
  {
    slug: 'freelance-client-tracker-lead-to-paid',
    topicCluster: 'freelance-workflows',
    title: 'Freelance client tracker: from lead to paid (a lightweight Gmail workflow)',
    seoTitle: 'Freelance Client Tracker',
    description:
      'A freelancer-friendly client tracker you can run inside Gmail: a simple pipeline, follow-up templates, and next-step habits that keep projects moving.',
    category: 'Freelance workflows',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about freelance client tracking and project management.',
    primaryInternalLink: { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-freelancers-need-a-tracker',
        heading: 'Why freelancers need a lightweight client tracker',
        paragraphs: [
          'Freelancers often juggle leads, quotes, active work, and payments at the same time. When everything lives in Gmail, it is easy to lose momentum because there is no single place to review what is open.',
          'A lightweight client tracker is not about tracking everything. It is about keeping next steps visible so work does not quietly stall.',
        ],
      },
      {
        id: 'pipeline',
        heading: 'The pipeline: Lead -> Quote -> In progress -> Paid',
        paragraphs: [
          'This is a simple pipeline that works for most gig-based workflows:',
        ],
        bullets: [
          'Lead: initial inquiry, qualification, and fit.',
          'Quote: quote or proposal sent; decision pending.',
          'In progress: scope agreed; work is underway.',
          'Paid: paid and complete (archive after you learn).',
        ],
      },
      {
        id: 'follow-up-templates',
        heading: 'Templates that keep deals moving (without sounding salesy)',
        templates: [
          {
            label: 'Quote follow-up',
            content:
              'Subject: Quick follow-up on the quote for {project}\n\nHi {first_name},\n\nChecking in on the quote I sent. If helpful, I can share a short breakdown of timeline and next steps.\n\nDo you want to move forward, or should I revise anything?\n\nThanks,\n{your_name}',
          },
          {
            label: 'Project kickoff confirmation',
            content:
              'Subject: Kickoff for {project}\n\nHi {first_name},\n\nExcited to get started. Here is what I have for scope and next steps:\n\n- {scope_summary}\n- {first_milestone}\n- {timeline}\n\nIf that looks right, I will begin and send the first update by {date}.\n\nBest,\n{your_name}',
          },
        ],
        note:
          'Keep templates short. Add one specific detail from the thread so the message feels personal and useful.',
      },
      {
        id: 'next-steps',
        heading: 'The habit that prevents stalls: every active item has a next step',
        paragraphs: [
          'When you move a client into Quote or In progress, capture one next step task. It can be as small as "send revised scope" or "share first draft".',
          'If you are waiting on the client, the next step is a follow-up date. Without that date, the job becomes a memory game.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'The weekly review (10 minutes)',
        steps: [
          'Scan Quote and In progress first.',
          'Confirm each active client has a next step task.',
          'Move anything that progressed (signed, started, paid).',
          'Archive anything that is truly dead, so your pipeline stays clean.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I track invoices inside my CRM?',
        answer:
          'You can track payment status as a stage, but keep invoicing in your billing tool. The CRM is for relationship context and next steps, not accounting.',
      },
      {
        question: 'Do I need a separate pipeline for different services?',
        answer:
          'Only if the stages are genuinely different. If the stages are the same, keep one pipeline and use tags or notes to differentiate service types.',
      },
      {
        question: 'Is email tracking useful for freelance proposals?',
        answer:
          'It can be a helpful signal, especially for higher-value proposals. Treat opens and clicks as timing hints, not guarantees.',
      },
    ],
  },
  {
    slug: 'follow-up-email-templates-solo-b2b-sales',
    topicCluster: 'solo-sales-workflows',
    title: 'Follow-up email templates for solo B2B sales',
    description:
      'Copy-ready follow-up templates for solo B2B sellers, plus a simple cadence and a workflow for keeping next steps visible inside Gmail.',
    category: 'Solo sales workflows',
    publishedAt: '2026-02-16',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about follow-up templates and B2B outreach.',
    primaryInternalLink: {
      href: '/crm-for-solo-b2b-sales',
      label: 'Solo B2B sales CRM inside Gmail',
    },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-templates',
        heading: 'Why templates help solo sellers',
        paragraphs: [
          'Follow-ups are easy to postpone when you have to think from scratch every time. Templates remove friction and keep your messaging consistent.',
          'The goal is not to sound templated. The goal is to keep your follow-ups short, useful, and easy to respond to.',
        ],
      },
      {
        id: 'principles',
        heading: 'Principles for follow-ups that get replies',
        bullets: [
          'Be specific: remind them what this is about in one line.',
          'Add value: clarify scope, share an option, or ask one clear question.',
          'Make it easy: propose a simple next step (yes/no, 2 times, 1 decision).',
          'Stay human: do not overdo urgency or guilt.',
        ],
      },
      {
        id: 'templates',
        heading: 'Follow-up templates (copy and personalize)',
        templates: [
          {
            label: 'Friendly follow-up (assume it was buried)',
            content:
              'Subject: Quick follow-up on {topic}\n\nHi {first_name},\n\nJust checking in in case this got buried. Are you still the right person to discuss {topic}?\n\nIf yes, the simplest next step is {next_step}.\n\nThanks,\n{your_name}',
          },
          {
            label: 'After a meeting (confirm next steps)',
            content:
              'Subject: Next steps from our call\n\nHi {first_name},\n\nThanks again for the conversation. Here is my understanding of next steps:\n\n- {summary_1}\n- {summary_2}\n\nIf that looks right, I will follow up by {date} with {deliverable}.\n\nBest,\n{your_name}',
          },
          {
            label: 'After sending a proposal (offer a decision path)',
            content:
              'Subject: Proposal for {project} - decision path\n\nHi {first_name},\n\nHappy to clarify anything in the proposal. If it helps, I can suggest a recommended option based on {constraint}.\n\nWould you prefer (a) a quick 15-minute call or (b) a short reply with your top question?\n\nBest,\n{your_name}',
          },
          {
            label: 'Close the loop (polite and clear)',
            content:
              'Subject: Closing the loop\n\nHi {first_name},\n\nI have not heard back, so I am going to close the loop for now. If timing changes, reply anytime and I will reopen this.\n\nThanks,\n{your_name}',
          },
        ],
      },
      {
        id: 'cadence',
        heading: 'A simple cadence you can stick to',
        paragraphs: [
          'For many B2B deals, a light cadence is enough. A reasonable default is:',
        ],
        bullets: [
          'Day 2: friendly follow-up.',
          'Day 5: decision path or a helpful question.',
          'Day 10: close the loop.',
        ],
        note:
          'Adjust based on deal size and urgency. The system is more important than the exact days.',
      },
      {
        id: 'run-in-donna',
        heading: 'How to run this inside a Gmail CRM',
        paragraphs: [
          'Templates work best when paired with a next-step habit. When you finish a thread, create a task for the next follow-up and set a due date you will respect.',
          'If you want help drafting, an AI assistant can generate a follow-up draft from the thread context. You edit it, keep your voice, and decide when to send.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much should I personalize templates?',
        answer:
          'Always add one specific detail from the thread. That detail does more than fancy wording. It shows you are paying attention and makes the email feel real.',
      },
      {
        question: 'Should I mention tracking signals in follow-ups?',
        answer:
          'No. Use tracking as an internal signal to time a follow-up, not as something you reference directly.',
      },
      {
        question: 'What if I do not want to follow up aggressively?',
        answer:
          'Use a shorter sequence and close the loop sooner. A respectful close-the-loop email protects your time and keeps your brand strong.',
      },
    ],
  },
  {
    slug: 'keep-crm-updated-without-manual-data-entry',
    topicCluster: 'gmail-crm-foundations',
    title: 'How to keep your CRM updated without manual data entry',
    seoTitle: 'Keep Your CRM Updated',
    description:
      'A practical system for keeping CRM data fresh: capture updates in context, keep stages lightweight, and reduce repetitive admin work.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-02-16',
    updatedAt: '2026-02-24',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about reducing manual CRM updates and keeping data fresh.',
    primaryInternalLink: { href: '/ai-gmail-crm', label: 'AI assistant in Gmail' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-crms-go-stale',
        heading: 'Why CRMs go stale',
        paragraphs: [
          'Most CRMs go stale for one reason: updates happen after the conversation, when you are already onto the next thing.',
          'If updating your CRM requires switching tabs, remembering fields, and reconstructing context, the update will not happen consistently.',
        ],
      },
      {
        id: 'three-levers',
        heading: 'The three levers that reduce manual entry',
        bullets: [
          'Keep the CRM close to the work (Gmail-native beats tab-switching).',
          'Capture updates while the thread is fresh (next-step habit).',
          'Use an assistant for drafts and suggestions (with your approval).',
        ],
      },
      {
        id: 'capture-in-context',
        heading: 'Capture updates in context (the moment you read the thread)',
        paragraphs: [
          'When you finish reading a thread, decide what changed: stage, notes, or next step. Then capture it immediately.',
          'This is the difference between a CRM that looks accurate and a CRM that becomes a backlog of guilt.',
        ],
      },
      {
        id: 'next-step-rule',
        heading: 'Use the next-step rule to prevent drift',
        paragraphs: [
          'Every active relationship should have a next step task. If there is no next step, move the item to Dormant or close it out.',
          'Next steps create a natural rhythm of updates. When you complete a task, you either close the item or create the next task.',
        ],
      },
      {
        id: 'assistant',
        heading: 'Where a human-in-the-loop assistant fits',
        paragraphs: [
          'Assistants are most useful for repetitive work: summarizing threads, drafting follow-ups, and suggesting next steps.',
          'Human-in-the-loop design matters because inbox work is sensitive. You review suggestions and confirm actions before anything is created or changed.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'A weekly review keeps the system honest',
        paragraphs: [
          'Even with a good workflow, you need a short weekly review. Scan your pipeline, confirm next steps, and archive anything cold.',
          'That review is what turns a tool into a system you trust.',
        ],
      },
      {
        id: 'what-not-to-automate',
        heading: 'What not to automate',
        bullets: [
          'Client-facing email sends without your review.',
          'Stage changes without a clear reason you can see.',
          'Bulk updates you cannot undo or audit.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can an assistant update my CRM automatically?',
        answer:
          'A safe approach is to keep you in control. The assistant can suggest updates and prepare actions, but you should confirm what gets created or changed.',
      },
      {
        question: 'Do I need to track every detail to have an updated CRM?',
        answer:
          'No. Track the few details that drive decisions: stage, next step, and a short context note. Anything beyond that should be added only if you use it weekly.',
      },
      {
        question: 'What if I miss updates for a week?',
        answer:
          'That is normal. Use your weekly review to clean things up. The goal is consistency over time, not perfection every day.',
      },
    ],
  },
  {
    slug: 'gmail-crm-extension-checklist',
    topicCluster: 'gmail-crm-foundations',
    title: 'Gmail CRM extension checklist: what to evaluate',
    description:
      'A checklist for evaluating Gmail CRM extensions: workflow fit, pipelines, tasks, AI safety, permissions, privacy, and solo-operator details.',
    category: 'Buying guides',
    publishedAt: '2026-02-16',
    updatedAt: '2026-03-17',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about evaluating and choosing a Gmail CRM extension.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/features', label: 'Features' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'who-this-is-for',
        heading: 'Who this checklist is for',
        paragraphs: [
          'This checklist is for solo operators: consultants, freelancers, recruiters, and solo B2B sellers who live in Gmail and want a simple system for follow-ups and deal tracking.',
          'If you are buying for a large team with complex permissions and reporting, you will likely evaluate a different category of tools.',
        ],
      },
      {
        id: 'workflow-fit',
        heading: '1) Workflow fit (the most important factor)',
        bullets: [
          'Does it live in Gmail, or does it push you to a separate dashboard?',
          'Can you capture next steps from a real thread in seconds?',
          'Does the pipeline match how you actually work, or is it rigid?',
          'Can you keep it lightweight without heavy setup?',
        ],
      },
      {
        id: 'pipelines-and-tasks',
        heading: '2) Pipelines and tasks (your follow-up system)',
        bullets: [
          'Can you create pipelines with simple stages?',
          'Can you tie tasks to contacts?',
          'Can you review what is stalled without scanning your inbox?',
        ],
      },
      {
        id: 'ai-safety',
        heading: '3) AI and safety (if the tool includes an assistant)',
        bullets: [
          'Is it human-in-the-loop (review and confirmation), or does it act unsupervised?',
          'Can you control permissions and revoke access?',
          'Does it help with drafts and next steps without over-claiming?',
        ],
      },
      {
        id: 'privacy-permissions',
        heading: '4) Privacy and permissions',
        bullets: [
          'Are permissions clearly explained in plain language?',
          'Is there a privacy policy that explains data handling and retention?',
          'Can you use the tool without granting unnecessary access?',
        ],
      },
      {
        id: 'performance',
        heading: '5) Performance and reliability',
        bullets: [
          'Does it feel fast inside Gmail, or does it slow down your inbox?',
          'Does it work consistently across your common workflows?',
          'Does it degrade gracefully if something fails?',
        ],
      },
      {
        id: 'support',
        heading: '6) Support and product maturity',
        bullets: [
          'Is there a clear way to contact support?',
          'Are docs and FAQs easy to find and specific?',
          'Are feature claims aligned with what is actually shipped?',
        ],
      },
      {
        id: 'copy-template',
        heading: 'Copy-paste evaluation template',
        templates: [
          {
            label: 'Gmail CRM evaluation checklist',
            content:
              '- Workflow: thread -> contact -> stage -> next step (yes/no)\n- Pipelines: simple stages, easy to maintain (yes/no)\n- Tasks: tied to deals/contacts, usable daily (yes/no)\n- AI: human-in-the-loop confirmation (yes/no)\n- Privacy: clear permissions + policy (yes/no)\n- Speed: does not slow Gmail (yes/no)\n- Support: easy to contact, clear docs (yes/no)',
          },
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I choose a Gmail CRM extension or a full CRM?',
        answer:
          'If you work solo and most conversations happen in Gmail, a Gmail CRM extension can be the simplest option. If you need complex reporting, role permissions, or heavy integrations, a full CRM may be a better fit.',
      },
      {
        question: 'Do Gmail CRM extensions work with Google Workspace?',
        answer:
          'Many do, but some organizations restrict Chrome extensions or OAuth permissions. If you are in Workspace, check whether your admin needs to approve the extension.',
      },
      {
        question: 'What is a red flag when evaluating a Gmail CRM?',
        answer:
          'Overly broad permissions without clear explanations, vague feature claims, and workflows that force you out of Gmail for basic actions are all signs the tool may not fit a solo inbox-first workflow.',
      },
    ],
  },
  {
    slug: 'weekly-gmail-crm-review-checklist',
    topicCluster: 'gmail-crm-foundations',
    title: 'Weekly Gmail CRM review checklist (15 minutes)',
    description:
      'A simple 15-minute weekly review to keep your Gmail CRM up to date: triage stalled threads, confirm next steps, and prevent follow-ups from slipping.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-04-14',
    readingTimeMinutes: 7,
    faqSubtitle: 'Common questions about running a weekly CRM review from Gmail.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'who-this-is-for',
        heading: 'Who this weekly review is for',
        paragraphs: [
          'If you manage relationships from Gmail, you do not need a complex CRM process. You need a simple ritual that makes it hard for important conversations to go quiet.',
          'This weekly review is built for solo operators: consultants, freelancers, recruiters, and solo sellers who want follow-ups, context, and next steps in one place.',
        ],
      },
      {
        id: 'the-rule',
        heading: 'The one rule: every active relationship needs a next step',
        paragraphs: [
          'A Gmail CRM stays lightweight when it follows one rule: if the relationship is active, there should be a next step with a date.',
          'Your weekly review is just a fast way to find the places where that rule has broken down.',
        ],
        bullets: [
          'If you owe something, the next step is the deliverable and the send date.',
          'If you are waiting on them, the next step is a follow-up date.',
          'If it is unclear, the next step is to clarify (one short email).',
        ],
      },
      {
        id: 'checklist',
        heading: 'The 15-minute weekly checklist',
        paragraphs: [
          'Set a timer. The goal is not perfect data. The goal is to prevent silent stalls.',
        ],
        steps: [
          'List your active deals/relationships (the ones you would be disappointed to lose).',
          'For each one, confirm there is exactly one next step with a date.',
          'Move anything stalled into a clear stage (or mark it dormant) so it stops taking mental space.',
          'Write 3 follow-ups you will send this week (the highest-leverage nudges).',
          'Close the loop: schedule or create tasks for those follow-ups right now.',
        ],
        note:
          'A weekly review is successful if you finish with a short list of next actions, not a perfectly groomed database.',
      },
      {
        id: 'stalled-threads',
        heading: 'Stalled thread triage: how to choose the next follow-up',
        paragraphs: [
          'Most stalls fall into one of three buckets. Name the bucket, then send the simplest follow-up that moves it forward.',
        ],
        bullets: [
          'No response: send a short nudge with one clear question.',
          'Pending decision: ask for the decision trigger (call, feedback, stakeholder).',
          'Soft maybe: propose a close-the-loop option so it does not linger forever.',
        ],
      },
      {
        id: 'weekly-review-template',
        heading: 'Copy-paste weekly review note',
        templates: [
          {
            label: 'Weekly Gmail CRM review (15 minutes)',
            content:
              'Weekly review date: ____\n\n1) Top 5 active relationships:\n- ____ (next step + date)\n- ____ (next step + date)\n- ____ (next step + date)\n- ____ (next step + date)\n- ____ (next step + date)\n\n2) Stalled items to resolve:\n- ____ (bucket: no response / decision / soft maybe)\n- ____\n\n3) Follow-ups to send this week:\n- ____ (who + why + ask)\n- ____\n- ____\n\n4) Admin cleanup (optional, 2 minutes):\n- Close or mark dormant: ____\n- Rename stages/tags if needed: ____',
          },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes that make a weekly review fail',
        bullets: [
          'Trying to review your entire inbox instead of your active relationships.',
          'Keeping multiple next steps per relationship (it becomes noise).',
          'Avoiding a clear dormant stage, so stalled items stay "in progress" forever.',
          'Turning the review into data entry instead of decisions and follow-ups.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I do this review daily instead of weekly?',
        answer:
          'Weekly is enough for most solo operators. If you have a high-volume pipeline, add a 3-minute daily check for only the items with deadlines this week.',
      },
      {
        question: 'What should I do with relationships that are going nowhere?',
        answer:
          'Mark them dormant or closed. The goal is to reduce mental overhead. If you still want a chance to revive it, set one future follow-up date and then stop thinking about it until then.',
      },
      {
        question: 'How do I keep this lightweight over time?',
        answer:
          'Keep the number of stages and tags small. If you cannot explain your stage model in one sentence, it is probably too complex for a solo workflow.',
      },
    ],
  },
  {
    slug: 'proposal-follow-up-sequence-templates',
    topicCluster: 'solo-sales-workflows',
    title: 'Proposal follow-up sequence (templates + timing for solo B2B sales)',
    seoTitle: 'Proposal Follow-up Sequence',
    description:
      'A proposal follow-up sequence: what to send, when to send it, and templates that help solo B2B sellers move deals forward.',
    category: 'Solo sales workflows',
    publishedAt: '2026-04-07',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about following up after sending a proposal.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-proposals-stall',
        heading: 'Why proposals stall (and what to do about it)',
        paragraphs: [
          'Proposals do not usually stall because the buyer forgot you exist. They stall because the next step is unclear, the decision is shared, or the buyer is not ready to say no.',
          'A good follow-up sequence does two things: it makes the next step easy, and it gives the buyer a graceful way to close the loop.',
        ],
      },
      {
        id: 'timing',
        heading: 'Timing: a simple 4-touch proposal follow-up schedule',
        paragraphs: [
          'Use this as a baseline. If the deal is urgent, compress it. If it is enterprise or committee-driven, expand it.',
        ],
        steps: [
          'Touch 1 (2 business days later): quick nudge + one question.',
          'Touch 2 (5 business days later): restate outcome + propose a call slot.',
          'Touch 3 (10 business days later): surface objections + offer options.',
          'Touch 4 (14-21 days later): close the loop ("should I archive this?").',
        ],
        note:
          'Your goal is not to send more emails. Your goal is to reach clarity: yes, no, or not now with a date.',
      },
      {
        id: 'templates',
        heading: 'Copy-paste templates (4 touches)',
        templates: [
          {
            label: 'Touch 1: Quick nudge',
            content:
              'Subject: Re: proposal\n\nHi {{first_name}} - quick check-in on the proposal I sent on {{date}}.\n\nIs the next step a quick call to walk through it, or do you want me to adjust anything before you decide?\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Touch 2: Outcome + call option',
            content:
              'Subject: Re: proposal\n\nHi {{first_name}} - wanted to make this easy.\n\nIf the goal is {{outcome}}, the proposal is a good fit. If it is not the right timing, totally fair.\n\nIf helpful, I can walk through it in 10 minutes. Does {{option_1}} or {{option_2}} work?\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Touch 3: Objections + options',
            content:
              'Subject: Re: proposal\n\nHi {{first_name}} - checking in again.\n\nMost decisions at this stage come down to one of these:\n1) scope is not quite right\n2) timing/budget\n3) internal alignment\n\nWhich one is the blocker (if any)? I can adjust the proposal or suggest a smaller first step.\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Touch 4: Last touch (close the loop)',
            content:
              'Subject: Re: proposal\n\nHi {{first_name}} - last note from me on this.\n\nShould I close this out for now, or is there a better date to circle back?\n\nEither way is fine - I just do not want it to hang in limbo.\n\nBest,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'tracking',
        heading: 'How to use email tracking without over-trusting it',
        paragraphs: [
          'Tracking can be a useful signal, but it is not a truth machine. Some recipients block images or use privacy tools that make opens unreliable.',
        ],
        bullets: [
          'Use tracking as a hint for timing, not as proof of intent.',
          'If a buyer clicks, follow up with a clear next-step question (do not mention tracking).',
          'If tracking is quiet, follow your schedule anyway. The sequence is the system.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Following up with "Any updates?" without an easy next step.',
          'Writing long emails that re-sell the entire proposal every time.',
          'No close-the-loop email, so the deal stays mentally open forever.',
          'Not saving the sequence, so every proposal follow-up is improvised.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: keep proposal follow-ups from slipping',
        paragraphs: [
          'In your weekly CRM review, every proposal should have one of two things: a follow-up date, or a decision date.',
          'If you cannot name the decision trigger, your next step is to ask for it in one sentence.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many follow-ups is too many?',
        answer:
          'If every email is adding pressure, it is too many. If each email makes a decision easier (clarifies next step, offers options, or closes the loop), 3-5 touches over a few weeks is normal in B2B.',
      },
      {
        question: 'Should I follow up by email or call?',
        answer:
          'Default to email if the buyer started the relationship over email. Offer a short call as an option when complexity is high or the deal is stalling.',
      },
      {
        question: 'What if they keep saying "next week"?',
        answer:
          'Ask for a specific date and the decision trigger. For example: "What needs to happen internally before you can decide, and when should we reconnect?"',
      },
    ],
  },
  {
    slug: 'consulting-meeting-follow-up-email-templates',
    topicCluster: 'consulting-workflows',
    title: 'Consulting meeting follow-up templates (recap + next steps)',
    seoTitle: 'Consulting Follow-up Templates',
    description:
      'Copy-paste follow-up templates for consulting calls: recap, decision summary, and scope confirmation. Keep the next step clear so projects do not drift.',
    category: 'Consulting workflows',
    publishedAt: '2026-03-31',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about consulting meeting follow-ups.',
    primaryInternalLink: { href: '/crm-for-consultants', label: 'CRM for consultants' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-recaps-matter',
        heading: 'Why a meeting recap is a consulting superpower',
        paragraphs: [
          'A good recap turns a conversation into a shared plan. It reduces misalignment, prevents scope drift, and makes it easy for the client to say "yes" to the next step.',
          'Your follow-up should not be long. It should be clear: what we agreed, what happens next, and who owns what.',
        ],
      },
      {
        id: 'recap-structure',
        heading: 'A simple recap structure (keep it short)',
        bullets: [
          'Context: the goal we discussed (one sentence).',
          'Decisions: what we agreed (2-4 bullets).',
          'Open questions: what we still need to confirm.',
          'Next steps: who does what by when.',
        ],
      },
      {
        id: 'templates',
        heading: 'Copy-paste templates',
        templates: [
          {
            label: 'Template 1: Standard recap + next steps',
            content:
              'Subject: Recap + next steps\n\nHi {{first_name}} - thanks again for today.\n\nGoal:\n- {{one_sentence_goal}}\n\nWhat we agreed:\n- {{decision_1}}\n- {{decision_2}}\n\nOpen questions:\n- {{open_question_1}}\n\nNext steps:\n- {{your_name}}: {{your_next_step}} (by {{date}})\n- {{client_name}}: {{client_next_step}} (by {{date}})\n\nIf I missed anything, reply here and I will update the plan.\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Template 2: Decision summary (for stakeholders)',
            content:
              'Subject: Summary of decisions\n\nHi {{first_name}} - sharing a short summary you can forward internally.\n\nDecisions:\n- {{decision_1}}\n- {{decision_2}}\n\nWhy this approach:\n- {{reason_1}}\n\nNext step to move forward:\n- {{single_next_step}} ({{date}})\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Template 3: Confirm scope (prevent drift)',
            content:
              'Subject: Confirming scope for {{project_name}}\n\nHi {{first_name}} - quick scope confirmation so we stay aligned.\n\nIn scope:\n- {{in_scope_1}}\n- {{in_scope_2}}\n\nOut of scope (for now):\n- {{out_scope_1}}\n\nNext step:\n- {{next_step}} (by {{date}})\n\nIf you want to adjust scope, reply with what you want to add and what we should remove.\n\nBest,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'turn-recap-into-system',
        heading: 'Turn the recap into a system (thread -> next step)',
        paragraphs: [
          'A recap email is only half the system. The other half is capturing the next step so it does not get lost in your inbox.',
          'After you send the recap, create one next-step task for yourself and one follow-up date if you are waiting on the client.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Writing a long recap that no one reads.',
          'No clear due dates, so the plan feels optional.',
          'Avoiding scope language, then being surprised by scope creep later.',
          'Not capturing the next step, so the recap becomes a dead document.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: spot projects that are drifting',
        paragraphs: [
          'In your weekly review, scan for consulting projects with no next step. If the thread is quiet and there is no task, the project is drifting.',
          'One short close-the-loop email is usually enough to restore momentum.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How soon should I send a meeting follow-up?',
        answer:
          'Same day is ideal. Next morning is fine. The longer you wait, the more the recap turns into a memory test instead of a plan.',
      },
      {
        question: 'Should I include pricing or budget in the recap?',
        answer:
          'Only if it was discussed and it helps prevent confusion. If budget is sensitive, reference it briefly and offer to confirm details on a short call.',
      },
      {
        question: 'What if the client never replies to recaps?',
        answer:
          'That is common. The recap still reduces misunderstandings and gives you a clean thread to follow up from later. Treat silence as "not blocked" unless a client action is required.',
      },
    ],
  },
  {
    slug: 'freelance-retainer-renewal-workflow',
    topicCluster: 'freelance-workflows',
    title: 'Freelance retainer renewal workflow (stages + check-in cadence)',
    seoTitle: 'Freelance Retainer Renewal',
    description:
      'A Gmail-first workflow for freelance retainers: simple stages, a monthly check-in rhythm, and renewal templates for long-term clients.',
    category: 'Freelance workflows',
    publishedAt: '2026-03-24',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about retainers and renewals for freelancers.',
    primaryInternalLink: { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/crm-for-consultants', label: 'CRM for consultants' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-retainers-churn',
        heading: 'Why retainers churn (even when the work is good)',
        paragraphs: [
          'Retainers often end because of silence, not dissatisfaction. The client gets busy, priorities shift, and the relationship slowly decays without a clear renewal moment.',
          'A renewal workflow keeps the relationship visible: regular check-ins, clear outcomes, and a renewal decision that does not feel awkward.',
        ],
      },
      {
        id: 'stages',
        heading: 'Simple retainer stages you can copy',
        bullets: [
          'Onboarding: kickoff, access, baseline plan.',
          'Active: delivering monthly work, check-ins scheduled.',
          'Renewal pending: renewal decision needed this month.',
          'Renewed: next period confirmed.',
          'Paused: temporarily paused with a return date.',
          'Closed: ended (with notes on why).',
        ],
      },
      {
        id: 'monthly-ritual',
        heading: 'The monthly ritual that keeps retainers healthy',
        steps: [
          'Send a short monthly check-in with wins and what is next.',
          'Ask one question about priority changes for the next month.',
          'Confirm the next call date (or a follow-up date).',
          'Two weeks before renewal, send a renewal nudge with options.',
        ],
      },
      {
        id: 'templates',
        heading: 'Copy-paste templates (monthly check-in + renewal)',
        templates: [
          {
            label: 'Monthly check-in',
            content:
              'Subject: {{month}} check-in\n\nHi {{first_name}} - quick {{month}} check-in.\n\nWins:\n- {{win_1}}\n- {{win_2}}\n\nWhat I am planning next:\n- {{next_1}}\n\nOne question: has your top priority changed for {{next_month}}?\n\nIf helpful, I can propose a short call. Otherwise I will keep you posted here.\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Renewal nudge (two options)',
            content:
              'Subject: Retainer renewal for {{next_period}}\n\nHi {{first_name}} - looking ahead to {{next_period}}.\n\nOption A: keep the retainer as-is and continue with {{focus_area}}.\nOption B: reduce scope to {{smaller_scope}} for {{price_or_hours}}.\n\nWhich option fits best? If neither, tell me what changed and I will adjust.\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Pause email (keep it positive)',
            content:
              'Subject: Next steps\n\nHi {{first_name}} - totally understand priorities shift.\n\nIf it is easier, we can pause the retainer for now and pick a date to revisit. Does {{date_option_1}} or {{date_option_2}} work to reconnect?\n\nBest,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Only emailing when you need something (invoices, approvals).',
          'No renewal stage, so the renewal decision sneaks up at the last minute.',
          'Sending long progress reports instead of short wins + next steps.',
          'Avoiding a pause option, which forces an awkward hard stop.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: keep renewal conversations visible',
        paragraphs: [
          'In your weekly review, look for retainers with no upcoming touchpoint. If you cannot name the next check-in date, schedule one.',
          'A healthy retainer feels like an ongoing conversation, not a monthly surprise.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How often should I check in on a retainer?',
        answer:
          'Monthly is a good default. If the work is high intensity, do a short weekly check-in. If it is light maintenance, a monthly check-in plus a quarterly review can be enough.',
      },
      {
        question: 'How do I ask for renewal without sounding insecure?',
        answer:
          'Frame it as planning. "Looking ahead to next month, which option fits best?" makes the renewal feel normal and operational.',
      },
      {
        question: 'What should I do when a client goes quiet?',
        answer:
          'Send one simple check-in tied to outcomes. If there is still no reply, offer a pause with a return date so the relationship stays respectful and clean.',
      },
    ],
  },
  {
    slug: 'gmail-crm-tags-notes-system',
    topicCluster: 'gmail-crm-foundations',
    title: 'A simple tags + notes system for a personal CRM in Gmail',
    seoTitle: 'Gmail CRM Tags and Notes',
    description:
      'A lightweight tags and notes system for a personal CRM in Gmail: small taxonomy, good note prompts, and a quick weekly cleanup.',
    category: 'Getting started',
    publishedAt: '2026-03-17',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about tags and notes in a Gmail-first CRM.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/crm-for-consultants', label: 'CRM for consultants' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-tags-and-notes',
        heading: 'Why tags and notes beat custom fields (for solo workflows)',
        paragraphs: [
          'Most solo CRMs fail because they turn into data entry. Tags and notes are flexible, fast, and easy to maintain from inside Gmail.',
          'The goal is not to store everything. The goal is to store the 2-3 details that help you follow up well.',
        ],
      },
      {
        id: 'tag-taxonomy',
        heading: 'A small tag taxonomy you can copy',
        paragraphs: [
          'Use tags that answer: who is this, what is the context, and how urgent is it?',
        ],
        bullets: [
          'Persona: consultant, freelancer, founder, recruiter, partner.',
          'Status: active, dormant, waiting-on-them, waiting-on-me.',
          'Priority: this-week, next-week, someday.',
          'Context: proposal-sent, intro, renewal, onboarding.',
        ],
        note:
          'If a tag does not change what you do next, do not create it.',
      },
      {
        id: 'note-prompts',
        heading: 'The 5 note prompts that make follow-ups easy',
        bullets: [
          'What they care about most right now (one line).',
          'What they said "yes" to (or resisted).',
          'The current stage and why it is in that stage.',
          'The next step (what + when).',
          'Anything personal that matters (only if you can use it respectfully).',
        ],
      },
      {
        id: 'templates',
        heading: 'Copy-paste note template',
        templates: [
          {
            label: 'Relationship note (copy/paste)',
            content:
              'Context:\n- \n\nWhat they care about:\n- \n\nCurrent stage:\n- \n\nNext step (what + when):\n- \n\nRisks/objections:\n- ',
          },
        ],
      },
      {
        id: 'weekly-cleanup',
        heading: 'Weekly cleanup (5 minutes)',
        steps: [
          'Merge duplicate tags (keep only one spelling).',
          'Archive tags you have not used in 30 days.',
          'For active relationships, ensure the note has a next step and date.',
          'Mark stale relationships dormant so they stop taking space.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Creating too many tags so you never reuse them.',
          'Using tags as a substitute for a next step (tags do not create action).',
          'Writing long notes that you will not reread.',
          'Tracking personal details you cannot use naturally in follow-ups.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many tags should I have?',
        answer:
          'Start with 10-20 and keep it stable. If you need more than that to decide what to do next, the system is too complex for a solo workflow.',
      },
      {
        question: 'Should I track deal value or fields in a personal CRM?',
        answer:
          'Only if it changes your decisions. Many solo operators do fine with stages and a next-step date. Add fields later if you consistently miss insights that would change your behavior.',
      },
      {
        question: 'What is the fastest way to keep notes updated?',
        answer:
          'Update notes while you are in the thread. Add one line for what changed, then set or adjust the next step date.',
      },
    ],
  },
  {
    slug: 'ai-assistant-prompts-for-followups-and-crm-updates',
    topicCluster: 'ai-assisted-workflows',
    title: 'AI prompts for follow-ups and CRM updates (human-in-the-loop)',
    seoTitle: 'AI Prompts for CRM Follow-ups',
    description:
      'A prompt pack for Gmail-first work: summarize threads, extract next steps, draft follow-ups, and keep CRM notes human-in-the-loop.',
    category: 'AI workflows',
    publishedAt: '2026-03-10',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about using AI for inbox follow-ups and CRM hygiene.',
    primaryInternalLink: { href: '/ai-gmail-crm', label: 'AI assistant (human-in-the-loop)' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'principles',
        heading: 'Three principles for safe AI in a Gmail CRM',
        bullets: [
          'Use AI to reduce effort, not to remove judgment.',
          'Prefer drafts and suggestions over automatic actions.',
          'Always check facts (names, dates, numbers, commitments) before sending.',
        ],
      },
      {
        id: 'prompt-pack',
        heading: 'Prompt pack (copy-paste)',
        paragraphs: [
          'These prompts are designed to be used on the thread you are currently viewing.',
        ],
        templates: [
          {
            label: 'Summarize a long thread',
            content:
              'Summarize this thread in 5 bullets. Include: the goal, current status, key constraints, and the next step. If anything is unclear, list the top 3 questions to ask.',
          },
          {
            label: 'Extract next steps',
            content:
              'From this thread, extract action items. For each action item, assign an owner (me/them), a due date (or "unspecified"), and the single next message I should send.',
          },
          {
            label: 'Draft a follow-up (short and specific)',
            content:
              'Draft a short follow-up email in my tone. Constraints: 4 sentences max, one clear question, reference one specific detail from the thread, and end with a concrete next step.',
          },
          {
            label: 'Update CRM notes (structured)',
            content:
              'Create a CRM note update with these fields:\n- Context (1 sentence)\n- What they care about (1 bullet)\n- Current stage (1 line)\n- Next step (what + when)\n- Risks/objections (up to 2 bullets)',
          },
          {
            label: 'Suggest a pipeline stage',
            content:
              'Based on the thread, suggest the best pipeline stage. Then explain in one sentence why. If the stage is ambiguous, give 2 options and the question I should ask to disambiguate.',
          },
        ],
      },
      {
        id: 'what-not-to-automate',
        heading: 'What not to automate',
        paragraphs: [
          'Some actions are too sensitive to delegate. Use AI to prepare the action, but keep the final decision with you.',
        ],
        bullets: [
          'Sending emails without review.',
          'Promising dates, discounts, or scope changes without confirmation.',
          'Updating a deal stage based on weak signals.',
          'Summarizing legal or financial commitments without checking the source.',
        ],
      },
      {
        id: 'quality-check',
        heading: 'A fast quality check before you send',
        steps: [
          'Verify names, company, and context details match the thread.',
          'Confirm the ask is specific (one question, not three).',
          'Remove any claims that are not explicitly supported by the thread.',
          'Make the next step date explicit when appropriate.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: use AI to speed up hygiene',
        paragraphs: [
          'In your weekly CRM review, use AI for the parts that are repetitive: summarizing where things stand and drafting short follow-ups.',
          'The review still requires you to choose what matters most this week.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Will AI make my follow-ups sound generic?',
        answer:
          'It can if you do not add specificity. Always include one concrete detail from the thread and keep the email short. The goal is a helpful nudge, not a perfect essay.',
      },
      {
        question: 'Should I let AI update my CRM automatically?',
        answer:
          'Not by default. For most solo workflows, it is safer to use AI to propose updates and then confirm them. That keeps the system accurate and avoids weird edge cases.',
      },
      {
        question: 'How should I think about privacy with AI and email?',
        answer:
          'Treat AI like a writing assistant for the thread you are viewing. Avoid pasting sensitive information you do not need, and always follow your organization or client privacy requirements.',
      },
    ],
  },
  {
    slug: 'reengagement-followup-templates-dormant-leads',
    topicCluster: 'solo-sales-workflows',
    title: 'Re-engagement follow-up templates for dormant leads (no awkwardness)',
    seoTitle: 'Dormant Lead Follow-up Templates',
    description:
      'Copy-paste re-engagement templates for dormant leads: permission-based follow-ups, "new idea" nudges, and a clean close-the-loop message for solo B2B sales.',
    category: 'Solo sales workflows',
    publishedAt: '2026-03-03',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about re-engaging leads that went quiet.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'define-dormant',
        heading: 'First: define "dormant" in a way you can use',
        paragraphs: [
          'Dormant does not mean dead. It means there is no active next step and the thread is quiet.',
          'Pick a simple threshold and stick to it. For example: no reply in 14 days after a proposal, or 30 days after an intro.',
        ],
      },
      {
        id: 'choose-list',
        heading: 'Choose the right list (do not blast everyone)',
        bullets: [
          'People who asked a real question or showed intent.',
          'Leads where you can reference a specific context from the thread.',
          'Accounts that match your ideal customer profile.',
        ],
        note:
          'If you cannot reference any context, you are not re-engaging a lead. You are sending cold email.',
      },
      {
        id: 'templates',
        heading: 'Copy-paste templates',
        templates: [
          {
            label: 'Template 1: Permission follow-up',
            content:
              'Subject: Quick question\n\nHi {{first_name}} - should I keep this on my radar, or is now not the right time?\n\nIf it is "not now", totally fine. If it is still relevant, what is the best next step?\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Template 2: New idea nudge',
            content:
              'Subject: One idea\n\nHi {{first_name}} - last time we talked about {{context}}.\n\nI had one idea that might help: {{idea}}.\n\nWorth a quick 10-minute call, or should I send a short summary by email?\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Template 3: Close the loop (clean)',
            content:
              'Subject: Closing the loop\n\nHi {{first_name}} - I am going to close this out on my side so it does not linger.\n\nIf it becomes a priority later, reply here and we can pick it back up.\n\nThanks,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'timing',
        heading: 'Timing: when to re-engage',
        bullets: [
          'Follow the thread context: proposals can be nudged sooner; longer-cycle deals can wait.',
          'If you re-engage, set one follow-up date and one close-the-loop date.',
          'If there is still no response, mark it dormant and move on.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Sounding annoyed ("just checking in again").',
          'Asking multiple questions and creating friction.',
          'No close-the-loop message, so you keep thinking about it.',
          'Re-engaging without referencing any context from the thread.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: keep dormant leads from piling up',
        paragraphs: [
          'In your weekly review, decide what to do with dormant items: re-engage, set a future date, or close.',
          'The goal is a clean pipeline with a clear next step, not a giant list of maybes.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I mention that I noticed they opened my email?',
        answer:
          'No. Never mention tracking. If you want to follow up because you have a reason, use that reason (new idea, updated scope, clear next step).',
      },
      {
        question: 'How long should I wait before closing the loop?',
        answer:
          'For many solo B2B deals, 2-3 weeks after your last substantive message is a reasonable point to close the loop, unless the buyer gave you a specific timeline.',
      },
      {
        question: 'What if they reply "not now"?',
        answer:
          'Ask for a date. "Totally fair. When should I check back in?" Then set one follow-up and move it out of your weekly mental stack.',
      },
    ],
  },
  {
    slug: 'scope-creep-prevention-email-workflow',
    topicCluster: 'consulting-workflows',
    title: 'Scope creep prevention: the email-first workflow (templates included)',
    seoTitle: 'Scope Creep Prevention Workflow',
    description:
      'A simple email-first workflow to prevent scope creep: recap boundaries, run change requests cleanly, and keep projects aligned with copy-paste templates.',
    category: 'Consulting workflows',
    publishedAt: '2026-02-24',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about preventing scope creep as a solo operator.',
    primaryInternalLink: { href: '/crm-for-consultants', label: 'CRM for consultants' },
    supportingInternalLinks: [
      { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-scope-creep-happens',
        heading: 'Why scope creep happens (even with good clients)',
        paragraphs: [
          'Scope creep is usually a communication problem, not a client problem. Requests arrive in email, context is fragmented, and "small asks" accumulate until the project changes shape.',
          'The fix is a simple workflow: recap what is in scope, make changes explicit, and keep the next step clear.',
        ],
      },
      {
        id: 'recap-boundaries',
        heading: 'Use recaps to set boundaries without sounding defensive',
        paragraphs: [
          'After meetings, send a recap that includes scope boundaries in plain language. This prevents "I thought this was included" moments later.',
        ],
        templates: [
          {
            label: 'Recap + boundaries',
            content:
              'Subject: Recap + next steps\n\nHi {{first_name}} - quick recap so we stay aligned.\n\nIn scope for this phase:\n- {{in_scope_1}}\n- {{in_scope_2}}\n\nOut of scope (for now):\n- {{out_scope_1}}\n\nNext steps:\n- {{your_next_step}} (by {{date}})\n- {{client_next_step}} (by {{date}})\n\nIf you want to add anything, tell me what you want to add and what we should remove.\n\nBest,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'change-requests',
        heading: 'Run change requests like an adult (fast, clear, non-dramatic)',
        paragraphs: [
          'Do not argue about scope in a long email thread. Use a short change request: what changed, what it costs (time/money), and the decision required.',
        ],
        templates: [
          {
            label: 'Change request (simple)',
            content:
              'Subject: Change request: {{request_name}}\n\nHi {{first_name}} - I can do this. Quick change request so we stay aligned.\n\nRequest:\n- {{what_changed}}\n\nImpact:\n- Time: +{{time_impact}}\n- Cost: +{{cost_impact}} (or this replaces {{replacement}})\n\nDecision:\n- Approve this change, or keep original scope?\n\nThanks,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'pause-and-rescope',
        heading: 'When scope keeps moving, pause and re-scope',
        paragraphs: [
          'If changes keep coming, the problem is not one request. It is the shape of the project.',
          'In that case, pause delivery, confirm the new goal, and re-scope a new phase.',
        ],
        templates: [
          {
            label: 'Pause and re-scope',
            content:
              'Subject: Re-scoping {{project_name}}\n\nHi {{first_name}} - I want to make sure we deliver the right outcome.\n\nThe requests have shifted the scope materially. I suggest we pause delivery for a short re-scope:\n- Confirm the goal for this phase\n- Define the new in-scope items\n- Agree on timeline and cost\n\nIf that works, I will send a revised scope by {{date}}.\n\nBest,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'Saying yes to "small" requests without documenting impact.',
          'Avoiding scope language until you are frustrated.',
          'No clear change request, so the client cannot make a clean decision.',
          'Keeping everything in your head instead of in a short recap thread.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: spot scope creep early',
        paragraphs: [
          'In your weekly review, look for projects where the thread is active but your next step is unclear. That is often scope creep in progress.',
          'Your next step is usually a recap or a change request, not more delivery.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I put everything in a contract instead?',
        answer:
          'Contracts help, but scope creep usually shows up in day-to-day communication. The email workflow is how you keep the contract aligned with reality.',
      },
      {
        question: 'What if the client gets annoyed by change requests?',
        answer:
          'Good clients prefer clarity. Keep it short and neutral: request, impact, decision. If a client resists any clarity, that is a useful signal about fit.',
      },
      {
        question: 'How do I stop scope creep without sounding rigid?',
        answer:
          'Offer options. "We can add this, but it changes timeline/cost" is flexible and professional. Rigidity comes from refusing to explain impact.',
      },
    ],
  },
  {
    slug: 'recruiter-candidate-followup-system-in-gmail',
    topicCluster: 'follow-up-workflows',
    title: 'Recruiter candidate follow-up system in Gmail (stages + templates)',
    seoTitle: 'Recruiter Follow-up System',
    description:
      'A simple Gmail-first follow-up system for recruiters: candidate stages, a clean cadence, and copy-paste templates that keep candidates warm without spam.',
    category: 'Recruiting workflows',
    publishedAt: '2026-02-17',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about candidate follow-ups and keeping a recruiter pipeline clean.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/ai-gmail-crm', label: 'AI assistant (human-in-the-loop)' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-system',
        heading: 'Why recruiters need a follow-up system (not more inbox searching)',
        paragraphs: [
          'Recruiting is a relationship workflow. Threads pile up, candidates go quiet, and the easiest people to lose are the good ones who need one more nudge.',
          'A Gmail-first system keeps the workflow close to the thread: stage the candidate, capture the next step, and set a follow-up date.',
        ],
      },
      {
        id: 'stages',
        heading: 'Candidate stages you can copy',
        bullets: [
          'Sourced: identified and reached out.',
          'Responded: replied and engaged.',
          'Screening: call scheduled or completed.',
          'Submitted: shared with hiring manager/client.',
          'Interviewing: interview loop in progress.',
          'Offer: offer in progress.',
          'Closed: hired / not a fit / paused.',
        ],
      },
      {
        id: 'cadence',
        heading: 'A clean follow-up cadence (simple rule)',
        paragraphs: [
          'Your rule: every candidate you care about has one next step with a date. If they are waiting on you, you follow up. If you are waiting on them, you set a nudge date.',
        ],
        bullets: [
          'After first outreach: follow up 2-3 business days later.',
          'After scheduling: confirm day before the call.',
          'After submission: update within 3-5 business days (even if it is "still waiting").',
          'After interview: debrief request the same day; update within 48 hours if possible.',
        ],
      },
      {
        id: 'templates',
        heading: 'Copy-paste templates',
        templates: [
          {
            label: 'Follow-up after first outreach',
            content:
              'Subject: Re: {{role}}\n\nHi {{first_name}} - quick follow-up on my note about {{role}}.\n\nIf you are open to it, is a short call this week easier, or should I send details by email?\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Status update (still waiting)',
            content:
              'Subject: Quick update\n\nHi {{first_name}} - quick update: we are still waiting on feedback.\n\nI will follow up again by {{date}}. If anything changes on your side before then, reply here.\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'Close the loop (respectful)',
            content:
              'Subject: Closing the loop\n\nHi {{first_name}} - I do not want to keep you hanging.\n\nAt the moment, we are not moving forward with this role. If a better fit comes up, I can reach back out.\n\nThanks again,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Common mistakes',
        bullets: [
          'No stage model, so you cannot see where candidates are stuck.',
          'Over-following up without new information (creates friction).',
          'No "still waiting" update, so candidates assume you forgot.',
          'Not capturing the next step date, so good candidates cool off.',
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Weekly review: keep warm candidates warm',
        paragraphs: [
          'In your weekly review, filter to candidates in Responded, Screening, and Submitted. Those are where momentum is easiest to lose.',
          'For each, confirm the next step and date. If none exists, your next step is to send a short status update or scheduling nudge.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How do I follow up without annoying candidates?',
        answer:
          'Make it useful. Ask one clear question, or provide a clear update with a next follow-up date. Avoid repeated "just checking in" messages.',
      },
      {
        question: 'Should I use a pipeline for recruiting?',
        answer:
          'Yes, if it is simple. A small set of stages is enough to keep you oriented and prevent candidates from slipping through gaps.',
      },
      {
        question: 'What is the fastest way to keep recruiter notes updated?',
        answer:
          'Add one line after each key touch: what changed and the next step date. If you do that consistently, you do not need long notes.',
      },
    ],
  },

  {
    slug: 'ai-tools-for-solo-founders-sales',
    topicCluster: 'ai-assisted-workflows',
    title: 'AI tools for solo founders doing sales',
    seoTitle: 'AI Tools for Solo Founder Sales',
    description:
      'A practical guide to using AI tools for solo founder sales: inbox context, follow-ups, pipeline hygiene, and human-reviewed CRM actions.',
    category: 'AI workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about using AI tools for solo founder sales.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
    ],
    sections: [
      {
        id: 'what-ai-should-do',
        heading: 'What AI should actually do for founder-led sales',
        paragraphs: [
          'A solo founder does not need an AI tool that invents a new sales process. You need help keeping up with the process you already have: replying, following up, remembering context, and deciding what deserves attention today.',
          'The best use of AI in founder-led sales is support work. It can summarize a long thread, draft a reply, suggest a next step, and help keep CRM notes current. The founder still owns the relationship, the judgment, and the final message.',
        ],
      },
      {
        id: 'tool-categories',
        heading: 'The AI tool categories that matter',
        paragraphs: [
          'Before comparing tools, separate the jobs. Most solo founder sales workflows need a small stack, not a giant platform.',
        ],
        bullets: [
          'Inbox assistant: helps summarize threads, draft replies, and turn messages into next steps.',
          'Gmail-native CRM: keeps contacts, pipeline stages, notes, and tasks close to email.',
          'Email tracking: gives timing signals for opens and clicks, with the usual caveat that tracking is imperfect.',
          'Calendar and meeting tools: help with scheduling and meeting notes when calls become part of the sales motion.',
          'Document or proposal tools: help create and share proposals once the conversation has a clear shape.',
        ],
      },
      {
        id: 'workflow',
        heading: 'A simple AI-assisted sales workflow',
        steps: [
          'Start from the active Gmail thread, not a blank CRM record.',
          'Ask AI to summarize the thread into current status, buyer concern, and next step.',
          'Create or update the contact and pipeline item while the context is fresh.',
          'Draft a short follow-up that references one real detail from the thread.',
          'Review the draft, remove unsupported claims, and send only when it sounds like you.',
          'Set a follow-up task so the thread does not depend on memory.',
        ],
        note:
          'This workflow is deliberately human-in-the-loop. AI prepares the work; you approve the action.',
      },
      {
        id: 'prompt-templates',
        heading: 'Prompts solo founders can reuse',
        paragraphs: [
          'Use prompts that produce sales operations output, not generic writing. These templates work best when run against a real thread.',
        ],
        templates: [
          {
            label: 'Thread summary for CRM',
            content:
              'Summarize this sales thread for my CRM. Include: buyer goal, current status, objections or risks, promised follow-ups, and the next action I should take.',
          },
          {
            label: 'Founder follow-up draft',
            content:
              'Draft a concise follow-up in my voice. Keep it under 120 words, reference one specific detail from the thread, ask one clear question, and include a concrete next step.',
          },
          {
            label: 'Pipeline hygiene check',
            content:
              'Based on this thread, suggest the current pipeline stage and the next task. If the stage is unclear, list the question I should ask before updating it.',
          },
        ],
      },
      {
        id: 'where-donna-fits',
        heading: 'Where Donna fits in the stack',
        paragraphs: [
          'Donna CRM is built for founders who want sales context inside Gmail instead of a separate admin system. It combines Gmail-native CRM records, pipelines, contacts, tasks, tracking signals, inbox onboarding, and an AI assistant for reviewed actions.',
          'That matters because founder-led sales moves quickly. If the CRM is detached from email, it becomes stale. If the AI sends or changes things without your review, it can create risk. Donna is designed around keeping the workspace close to the inbox while leaving important decisions with you.',
        ],
      },
      {
        id: 'selection-checklist',
        heading: 'Selection checklist for AI sales tools',
        bullets: [
          'Does the tool work where your sales conversations already happen?',
          'Can you review AI-generated drafts and actions before they matter?',
          'Does it support contacts, pipeline stages, tasks, and notes without heavy setup?',
          'Can tracking signals be used as hints without being treated as facts?',
          'Will you still use it during a busy week?',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can AI replace a founder in early sales?',
        answer:
          'Not for relationship judgment. AI can help with summaries, drafts, reminders, and CRM hygiene, but the founder should still own positioning, promises, pricing context, and final communication.',
      },
      {
        question: 'What is the first AI sales workflow to set up?',
        answer:
          'Start with follow-ups. Use AI to summarize a thread, draft a short reply, and create a next-step task. That removes daily friction without changing your whole sales process.',
      },
      {
        question: 'Should solo founders use email tracking?',
        answer:
          'Tracking can help with timing, especially after proposals or important follow-ups. Treat opens and clicks as imperfect signals, not proof of intent.',
      },
    ],
  },
  {
    slug: 'ai-tools-for-freelancers-client-management',
    topicCluster: 'ai-assisted-workflows',
    title: 'AI tools for freelancers managing clients',
    seoTitle: 'AI Tools for Freelancer Client Management',
    description:
      'A freelancer-focused guide to using AI for client management: inbox summaries, scope clarity, follow-ups, project notes, and CRM hygiene.',
    category: 'AI workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about AI tools for freelancer client management.',
    primaryInternalLink: { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/crm-for-consultants', label: 'CRM for consultants' },
      { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
    ],
    sections: [
      {
        id: 'freelancer-problem',
        heading: 'The client management problem freelancers actually have',
        paragraphs: [
          'Freelancers usually do not need a heavy sales suite. They need a calm way to manage active clients, prospects, renewals, unanswered questions, and small promises scattered across Gmail threads.',
          'AI can help, but only if it stays attached to the work. A generic writing assistant is useful for drafts. A better client-management workflow also turns thread context into notes, tasks, follow-ups, and clear project state.',
        ],
      },
      {
        id: 'best-use-cases',
        heading: 'Best AI use cases for freelancer client work',
        bullets: [
          'Summarize long client threads before a reply or call.',
          'Extract action items after a meeting recap or project update.',
          'Draft follow-ups that are specific, short, and polite.',
          'Turn scope changes into clear decision emails.',
          'Prepare weekly client review notes from recent conversations.',
          'Suggest CRM updates that you review before saving.',
        ],
      },
      {
        id: 'client-management-system',
        heading: 'A simple AI-assisted client management system',
        steps: [
          'Keep one contact or client record tied to the Gmail conversation.',
          'Use a small pipeline: Prospect, Proposal, Active, Waiting, Renewal, Dormant.',
          'After each important thread, summarize the status in one CRM note.',
          'Create one next-step task with an owner and date.',
          'Use AI to draft the next email, then edit for tone and accuracy.',
          'Review active and waiting clients once a week.',
        ],
      },
      {
        id: 'templates',
        heading: 'Templates freelancers can copy',
        templates: [
          {
            label: 'Client status note',
            content:
              'Create a CRM note for this client. Include: current project status, what the client is waiting on, what I am waiting on, any scope risk, and the next step with a date.',
          },
          {
            label: 'Scope clarification email',
            content:
              'Draft a short email that clarifies scope. Include what is currently included, what the new request adds, the impact on timeline or cost if known, and one clear decision question.',
          },
          {
            label: 'Weekly client review',
            content:
              'Review these client notes and list: clients needing a reply, clients waiting on me, clients waiting on them, and renewal or upsell opportunities I should inspect manually.',
          },
        ],
      },
      {
        id: 'how-donna-helps',
        heading: 'How Donna supports freelancer workflows',
        paragraphs: [
          'Donna CRM keeps client context in Gmail so you do not have to switch into a separate system every time a client replies. You can manage contacts, pipeline stages, notes, tasks, and tracking signals from the place where the conversation is happening.',
          'The AI assistant is useful for the repetitive parts: summarizing, drafting, and suggesting next steps. The important part is that you stay in control. You review the output and decide what gets saved or sent.',
        ],
      },
      {
        id: 'avoid',
        heading: 'What freelancers should avoid',
        bullets: [
          'Letting AI promise delivery dates, scope, or pricing without your review.',
          'Using long generic email drafts when a short specific reply would work.',
          'Building a complicated CRM setup before you have a weekly review habit.',
          'Treating email tracking as certainty instead of a timing signal.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What AI tool should a freelancer start with?',
        answer:
          'Start with the tool closest to your inbox. If most client work happens in Gmail, an AI-assisted Gmail CRM is more useful than a separate system you have to remember to update.',
      },
      {
        question: 'Can AI help prevent scope creep?',
        answer:
          'It can help you spot and phrase scope issues. Use AI to draft recap and change-request emails, but confirm the business decision yourself before sending.',
      },
      {
        question: 'How much should freelancers automate?',
        answer:
          'Automate preparation, not judgment. Summaries, drafts, and suggested tasks are useful. Sending sensitive client messages without review is usually not worth the risk.',
      },
    ],
  },
  {
    slug: 'founder-led-sales-crm-in-gmail',
    topicCluster: 'solo-sales-workflows',
    title: 'Founder-led sales CRM in Gmail: a practical setup',
    seoTitle: 'Founder-Led Sales CRM in Gmail',
    description:
      'Set up a founder-led sales CRM inside Gmail with simple stages, next-step tasks, thread context, and a weekly review that does not become admin work.',
    category: 'Solo sales workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about running founder-led sales from Gmail.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/inbox-onboarding', label: 'Inbox onboarding' },
      { href: '/features', label: 'Features' },
    ],
    sections: [
      {
        id: 'why-gmail',
        heading: 'Why founder-led sales often belongs in Gmail',
        paragraphs: [
          'In founder-led sales, the real context usually lives in Gmail: objections, buying triggers, stakeholder names, proposals, and the tone of the relationship.',
          'A separate CRM can still be useful, but it often fails when the founder is busy. If updates require switching tabs and rebuilding context, they get skipped. A Gmail-native CRM keeps the sales system next to the conversation.',
        ],
      },
      {
        id: 'minimum-setup',
        heading: 'The minimum CRM setup',
        paragraphs: [
          'Start with the smallest setup that answers three questions: who is this, where are they in the process, and what happens next?',
        ],
        bullets: [
          'Contacts: people and companies you are actively speaking with.',
          'Pipeline stages: a small set of commitment-based stages.',
          'Tasks: the next action that keeps the relationship moving.',
          'Notes: short context that saves you from rereading the thread.',
          'Tracking signals: optional hints for timing follow-ups.',
        ],
      },
      {
        id: 'pipeline',
        heading: 'Pipeline stages for founder-led sales',
        bullets: [
          'New: interesting thread or intro, not yet qualified.',
          'Qualified: problem and potential fit are clear enough to continue.',
          'Meeting: discovery, demo, or decision conversation scheduled.',
          'Proposal: proposal, pilot, or next-step offer sent.',
          'Decision: buyer is evaluating, negotiating, or aligning internally.',
          'Closed or Dormant: outcome known, or no active next step.',
        ],
      },
      {
        id: 'daily-loop',
        heading: 'The daily loop: thread to task',
        steps: [
          'Open the active sales thread in Gmail.',
          'Read the latest reply and update the stage only if commitment changed.',
          'Add one short note if new context matters.',
          'Create or update the next-step task.',
          'Draft the reply, review it, and send from Gmail.',
        ],
        note:
          'The stage should not change just because someone opened an email. Move stages when the conversation changes.',
      },
      {
        id: 'weekly-review',
        heading: 'A 20-minute weekly review',
        paragraphs: [
          'A founder-led CRM works when it gives you a weekly operating view. The review should be short enough that you actually do it.',
        ],
        steps: [
          'Scan Decision and Proposal first because stalled late-stage deals are expensive.',
          'Find every active item with no next-step task.',
          'Move cold items to Dormant instead of letting them clutter the board.',
          'Choose the 3 follow-ups most likely to move a real conversation.',
          'Update notes only where context changed.',
        ],
      },
      {
        id: 'donna-fit',
        heading: 'How Donna helps keep the setup lightweight',
        paragraphs: [
          'Donna CRM is designed around this Gmail-first motion. It gives you contacts, pipelines, tasks, tracking signals, inbox onboarding, and an AI assistant without forcing every sales action into a separate workspace.',
          'The goal is not to make the CRM bigger. The goal is to make the founder-led process easier to keep current while you stay responsible for the relationship.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Gmail enough for founder-led sales?',
        answer:
          'Gmail alone is usually not enough because it does not provide a clean pipeline or next-step system. Gmail plus a lightweight CRM can be enough for many solo founder workflows.',
      },
      {
        question: 'How many pipeline stages should I use?',
        answer:
          'Use 5-6 stages at most when you are starting. If two stages do not change your next action, combine them.',
      },
      {
        question: 'Should I track every conversation?',
        answer:
          'No. Track conversations that have a real next step, commercial value, or relationship value. A CRM filled with low-intent threads becomes hard to trust.',
      },
    ],
  },
  {
    slug: 'simple-sales-stack-for-solo-founders',
    topicCluster: 'solo-sales-workflows',
    title: 'A simple sales stack for solo founders',
    seoTitle: 'Simple Sales Stack for Solo Founders',
    description:
      'Build a simple solo founder sales stack around Gmail, CRM, follow-ups, tracking signals, proposals, and review habits without overcomplicating sales.',
    category: 'Solo sales workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about building a simple solo founder sales stack.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'stack-principle',
        heading: 'The principle: fewer tools, clearer habits',
        paragraphs: [
          'A solo founder sales stack should reduce dropped balls, not create a second operations job. The wrong stack creates more places to check and more fields to maintain.',
          'Start with the jobs that must happen every week: manage conversations, track active opportunities, follow up, schedule meetings, send proposals, and review what is stuck.',
        ],
      },
      {
        id: 'core-stack',
        heading: 'The core stack',
        bullets: [
          'Gmail: the source of relationship context and conversation history.',
          'Gmail-native CRM: contacts, pipelines, notes, and next-step tasks close to email.',
          'AI assistant: summaries, draft replies, and suggested updates you review.',
          'Email tracking: optional open and click signals for timing, not certainty.',
          'Calendar: meetings, reminders, and decision dates.',
          'Proposal or document tool: scoped offers, recaps, and decision materials.',
        ],
      },
      {
        id: 'do-not-add-yet',
        heading: 'Tools you probably do not need yet',
        paragraphs: [
          'More tooling can help later, but it can also hide a weak process. Add tools only when the underlying habit is already working.',
        ],
        bullets: [
          'A complex team CRM before you have a repeatable founder-led process.',
          'A large outbound automation system before you can handle replies well.',
          'A reporting dashboard before your stages and next steps are reliable.',
          'Multiple enrichment tools before you have a clear ideal customer profile.',
        ],
      },
      {
        id: 'operating-system',
        heading: 'The weekly operating system',
        steps: [
          'Review every active pipeline item from latest stage to earliest stage.',
          'Confirm each item has a next-step task with a date.',
          'Send or schedule the most important follow-ups.',
          'Move stale items to Dormant if there is no realistic action.',
          'Inspect tracking signals only as context for timing.',
          'Write down one improvement to your sales process for next week.',
        ],
      },
      {
        id: 'email-templates',
        heading: 'Three templates your stack should support',
        templates: [
          {
            label: 'After discovery',
            content:
              'Subject: Recap + next step\n\nHi {first_name},\n\nQuick recap from our conversation: {problem_summary}.\n\nThe next useful step is {next_step}. Does {date_or_time} work, or should I send details by email first?\n\nBest,\n{your_name}',
          },
          {
            label: 'After proposal',
            content:
              'Subject: Proposal follow-up\n\nHi {first_name},\n\nChecking in on the proposal for {project_or_goal}. Are there any questions about scope, timing, or next steps that would help you decide?\n\nBest,\n{your_name}',
          },
          {
            label: 'Dormant lead',
            content:
              'Subject: Should I keep this open?\n\nHi {first_name},\n\nShould I keep this on my radar, or is now not the right time?\n\nEither answer is fine. I just want to keep my side clean.\n\nThanks,\n{your_name}',
          },
        ],
      },
      {
        id: 'where-donna-fits',
        heading: 'Where Donna fits in a solo founder stack',
        paragraphs: [
          'Donna can cover the Gmail-native CRM layer: contacts, pipelines, tasks, tracking signals, inbox onboarding, and AI-assisted drafting or CRM hygiene. That makes it a practical center for a lean founder-led sales stack.',
          'You can still use separate tools for calendar, proposals, billing, or documents. The key is that the core sales memory stays close to the Gmail conversations where sales actually happen.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the minimum sales stack for a solo founder?',
        answer:
          'Gmail, a lightweight CRM, calendar, and a simple proposal or document tool are enough to start. Add AI and tracking where they reduce follow-up and context-switching friction.',
      },
      {
        question: 'When should I move to a bigger CRM?',
        answer:
          'Consider a bigger CRM when you need team permissions, complex reporting, territory management, or integrations that your sales process truly depends on.',
      },
      {
        question: 'Should outbound automation be part of the first stack?',
        answer:
          'Usually not. First make sure you can manage replies, follow-ups, and pipeline hygiene. Automation creates more conversations to manage.',
      },
    ],
  },
  {
    slug: 'ai-prompts-for-founder-led-sales',
    topicCluster: 'ai-assisted-workflows',
    title: 'AI prompts for founder-led sales',
    seoTitle: 'AI Prompts for Founder-Led Sales',
    description:
      'Copy-paste AI prompts for founder-led sales: thread summaries, follow-up drafts, objection handling, CRM notes, and weekly pipeline review.',
    category: 'AI workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 10,
    faqSubtitle: 'Common questions about using AI prompts for founder-led sales.',
    primaryInternalLink: { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/privacy', label: 'Privacy policy' },
    ],
    sections: [
      {
        id: 'prompting-principles',
        heading: 'Prompting principles for sales work',
        paragraphs: [
          'Founder-led sales prompts should be specific, grounded in the thread, and easy to verify. The goal is not to produce impressive copy. The goal is to reduce the effort of doing careful follow-up work.',
          'Treat AI output as a draft. Check names, dates, numbers, commitments, and anything that sounds like a promise before sending or saving it.',
        ],
        bullets: [
          'Ask for structured output so you can turn it into CRM notes or tasks.',
          'Limit drafts by length so they do not become generic essays.',
          'Require one concrete detail from the thread.',
          'Ask the model to call out uncertainty instead of guessing.',
        ],
      },
      {
        id: 'thread-prompts',
        heading: 'Prompts for understanding a sales thread',
        templates: [
          {
            label: 'Fast thread summary',
            content:
              'Summarize this thread for founder-led sales. Return: buyer goal, current status, key people, objections or risks, promised follow-ups, and the next action.',
          },
          {
            label: 'Decision context',
            content:
              'Based only on this thread, what decision is the buyer trying to make? List what they know, what they still need, and the best next question I should ask.',
          },
          {
            label: 'Stalled thread diagnosis',
            content:
              'This sales thread has gone quiet. Diagnose the likely reason using only thread evidence. Then suggest one respectful follow-up and one reason not to follow up yet if applicable.',
          },
        ],
      },
      {
        id: 'follow-up-prompts',
        heading: 'Prompts for follow-up drafts',
        templates: [
          {
            label: 'Short follow-up',
            content:
              'Draft a follow-up under 100 words. Use a calm founder tone, reference one specific detail from the thread, ask one clear question, and avoid pressure.',
          },
          {
            label: 'Proposal follow-up',
            content:
              'Draft a proposal follow-up. Ask whether scope, timing, or next steps need clarification. Do not add new claims. Keep it concise and easy to reply to.',
          },
          {
            label: 'Close-the-loop email',
            content:
              'Draft a polite close-the-loop email. Make it clear I am closing this on my side for now, and they can reply later if priorities change.',
          },
        ],
      },
      {
        id: 'crm-prompts',
        heading: 'Prompts for CRM notes and tasks',
        templates: [
          {
            label: 'CRM note',
            content:
              'Create a CRM note from this thread with: context in one sentence, stage recommendation, next step, owner, due date if mentioned, and risks. Mark unknowns as unknown.',
          },
          {
            label: 'Task extraction',
            content:
              'Extract action items from this thread. For each item, include owner, due date, dependency, and the next message I should send if I own it.',
          },
          {
            label: 'Stage recommendation',
            content:
              'Suggest the best pipeline stage from: New, Qualified, Meeting, Proposal, Decision, Closed, Dormant. Explain the reason in one sentence and flag ambiguity.',
          },
        ],
      },
      {
        id: 'objection-prompts',
        heading: 'Prompts for objections and positioning',
        templates: [
          {
            label: 'Objection map',
            content:
              'List objections or concerns in this thread. For each one, identify whether it is about fit, timing, budget, trust, urgency, or implementation. Suggest a response angle without inventing facts.',
          },
          {
            label: 'Clarifying question',
            content:
              'Write 3 possible clarifying questions I can ask. Each question should be short, non-defensive, and useful for understanding the buyer concern.',
          },
          {
            label: 'Recap before decision',
            content:
              'Draft a neutral recap before a decision. Include what we discussed, open questions, and the next decision point. Do not oversell.',
          },
        ],
      },
      {
        id: 'review-workflow',
        heading: 'Weekly review prompt',
        paragraphs: [
          'Once a week, use AI to prepare the review, then make the decisions yourself. The prompt should surface stuck work rather than pretend to close it for you.',
        ],
        templates: [
          {
            label: 'Weekly pipeline review',
            content:
              'Review these pipeline notes and group items into: needs my reply, waiting on them, proposal pending, unclear next step, and should be marked dormant. For each item, suggest one next task.',
          },
        ],
        note:
          'Before acting on the output, verify it against the actual Gmail threads and your current priorities.',
      },
    ],
    faqs: [
      {
        question: 'Can I paste full sales threads into AI prompts?',
        answer:
          'Use the minimum context needed and follow your privacy obligations. If you use a product connected to Gmail, review its privacy terms and controls before relying on it for sensitive work.',
      },
      {
        question: 'How do I keep AI follow-ups from sounding generic?',
        answer:
          'Require one specific thread detail, keep the draft short, and edit the final message yourself. Generic output usually comes from vague prompts and too much length.',
      },
      {
        question: 'Should AI decide my pipeline stage?',
        answer:
          'It can suggest a stage, but you should confirm it. Stage changes should reflect real buyer commitment or process movement, not weak signals.',
      },
    ],
  },

  {
    slug: 'use-apollo-with-gmail-crm',
    topicCluster: 'outreach-tool-workflows',
    title: 'How to use Apollo with a Gmail CRM workflow',
    seoTitle: 'Use Apollo with a Gmail CRM',
    description:
      'A practical handoff workflow for using Apollo for prospecting while Donna keeps Gmail replies, contact context, stages, and follow-ups organized.',
    category: 'Solo sales workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about using Apollo alongside a Gmail-native CRM.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/privacy', label: 'Privacy' },
    ],
    sections: [
      {
        id: 'split-the-workflow',
        heading: 'Split the workflow: Apollo for sourcing, Gmail for replies',
        paragraphs: [
          'Apollo can be useful for building lists, researching accounts, and running outbound prospecting. But once real replies land in Gmail, the workflow changes from list management to relationship management.',
          'That is where a Gmail CRM fits. Donna is a Gmail-native CRM and Chrome extension for keeping contact context, pipeline stages, tasks, and follow-up hygiene close to the email thread.',
          'The practical rule is simple: prospecting data can start in Apollo, but active conversations should be handled where the conversation happens.',
        ],
      },
      {
        id: 'handoff-model',
        heading: 'The handoff model: prospect -> reply -> contact -> stage',
        paragraphs: [
          'Do not try to make every prospect a full CRM record on day one. Most outbound lists include people who will never reply. Keep the CRM focused on conversations that show intent.',
        ],
        steps: [
          'Build and qualify your list in Apollo.',
          'Send compliant, relevant outreach from the outbound system you already use.',
          'When someone replies in Gmail, review the thread before creating or updating CRM context.',
          'Create or update the contact in Donna with the source, company, role, and a short note.',
          'Move the opportunity into a simple stage such as Replied, Meeting, Proposal, or Dormant.',
          'Add the next task before leaving the thread.',
        ],
      },
      {
        id: 'csv-workflow',
        heading: 'A clean CSV workflow for context without clutter',
        paragraphs: [
          'If you move data manually, keep the export small and useful. A lean CSV is easier to trust than a giant list full of fields no one maintains.',
          'Use CSV fields that help you understand the reply and decide the next step. Avoid importing every enrichment field just because it exists.',
        ],
        bullets: [
          'Recommended fields: first name, last name, email, company, role, website, source list, segment, and last outbound date.',
          'Optional fields: company size, industry, location, account notes, and a short reason for outreach.',
          'Avoid fields you will not use in Gmail, such as noisy scoring columns or stale enrichment metadata.',
        ],
        note:
          'Donna should not be treated as a cold list warehouse. Keep Donna focused on people you are actively working, following up with, or deliberately parking for later.',
      },
      {
        id: 'pipeline-stages',
        heading: 'Pipeline stages for Apollo-sourced conversations',
        paragraphs: [
          'A simple outbound pipeline should reflect commitment, not the number of emails sent. Use stages that tell you what action is needed next.',
        ],
        bullets: [
          'Replied: the prospect responded and needs qualification or a next question.',
          'Meeting: a call is booked or being scheduled.',
          'Proposal: a clear offer, scope, or next step has been sent.',
          'Waiting: you are waiting on the prospect after a meaningful exchange.',
          'Dormant: the thread went quiet and should not distract from active work.',
        ],
      },
      {
        id: 'deliverability-caveats',
        heading: 'Deliverability and tracking caveats',
        paragraphs: [
          'Outbound tooling can make it easy to send more email than your process can responsibly handle. That is not a CRM problem. It is a targeting, consent, and deliverability problem.',
          'Keep outreach relevant, respect opt-outs, and avoid tactics that depend on pressure or misleading personalization. Tracking signals can help with timing, but they are imperfect and should not be treated as proof of interest.',
        ],
        bullets: [
          'Do not mention opens or clicks in follow-up messages.',
          'Do not keep emailing people who clearly opted out or are not a fit.',
          'Use tracking as a hint, not a reason to make aggressive claims.',
        ],
      },
      {
        id: 'how-donna-helps',
        heading: 'How Donna fits after the reply',
        paragraphs: [
          'Donna helps after the conversation becomes real: contact context next to Gmail, stages for active opportunities, tasks for follow-ups, and lightweight notes so you do not depend on memory.',
          'For solo B2B sales, this keeps the system practical. Apollo can remain the source for prospecting, while Donna becomes the Gmail-side workspace for the relationships worth managing.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Donna integrate natively with Apollo?',
        answer:
          'This draft does not assume a native Apollo integration. Treat Apollo as the prospecting tool and Donna as the Gmail-native CRM for replies, contact context, pipeline stages, tasks, and follow-up hygiene.',
      },
      {
        question: 'Should every Apollo prospect go into my Gmail CRM?',
        answer:
          'No. Importing every prospect creates clutter. Start with people who reply, show intent, book a meeting, or are important enough to track manually.',
      },
      {
        question: 'Can I use email tracking to prioritize Apollo follow-ups?',
        answer:
          'Tracking can help with timing, but it is not definitive. Opens and clicks can be blocked, inflated, or misread. Use them as weak signals alongside actual replies and thread context.',
      },
    ],
  },
  {
    slug: 'apollo-to-gmail-follow-up-workflow',
    topicCluster: 'outreach-tool-workflows',
    title: 'Apollo to Gmail follow-up workflow for solo sales',
    seoTitle: 'Apollo to Gmail Follow-up Workflow',
    description:
      'A step-by-step workflow for moving Apollo-sourced replies into Gmail follow-ups, CRM stages, tasks, and clean weekly review habits.',
    category: 'Follow-up systems',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about follow-up after Apollo-sourced outreach.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
      { href: '/resources', label: 'Resources' },
    ],
    sections: [
      {
        id: 'why-handoff-matters',
        heading: 'Why the handoff matters',
        paragraphs: [
          'Outbound systems are good at sequencing, list building, and top-of-funnel operations. Gmail is where the personal conversation often becomes real.',
          'If you do not have a handoff process, warm replies get mixed with cold sequence activity. The result is missed context, duplicated follow-ups, and a pipeline that does not reflect reality.',
        ],
      },
      {
        id: 'reply-triage',
        heading: 'Step 1: triage replies inside Gmail',
        paragraphs: [
          'Start with the reply, not the campaign report. Read the full thread and decide what kind of response you are looking at.',
        ],
        bullets: [
          'Positive intent: they asked a question, accepted a meeting, or requested details.',
          'Neutral: they are not sure, asked for later timing, or redirected you to someone else.',
          'Negative: not interested, not a fit, or opted out.',
          'Operational: bounce, auto-reply, vacation responder, or address change.',
        ],
        note:
          'Only positive and useful neutral replies usually deserve CRM work. Negative and operational replies should be handled cleanly and kept out of your active pipeline.',
      },
      {
        id: 'capture-context',
        heading: 'Step 2: capture just enough CRM context',
        paragraphs: [
          'A reply does not need a long dossier. It needs enough context that future-you can act quickly.',
        ],
        steps: [
          'Create or update the contact from the Gmail thread.',
          'Add the Apollo source list or campaign name as a short note if it helps.',
          'Write one sentence about why they replied.',
          'Add the company, role, and any relevant buying context you can verify.',
          'Avoid adding unverified enrichment details that could confuse the next follow-up.',
        ],
      },
      {
        id: 'follow-up-stages',
        heading: 'Step 3: use stages that drive follow-up',
        paragraphs: [
          'Stages should answer one question: what should happen next? Use a small stage set that keeps replies moving.',
        ],
        bullets: [
          'Needs response: you owe them a reply.',
          'Meeting requested: scheduling is the next step.',
          'Waiting on prospect: you replied and need a follow-up date.',
          'Nurture later: timing is not right, but the relationship is worth keeping.',
          'Closed: not a fit, opted out, or no longer worth pursuing.',
        ],
      },
      {
        id: 'templates',
        heading: 'Short follow-up templates for replied leads',
        templates: [
          {
            label: 'After a positive reply',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for the reply. Based on what you shared, the best next step is probably {{next_step}}.\n\nWould {{option_1}} or {{option_2}} work better?\n\nBest,\n{{your_name}}',
          },
          {
            label: 'After a timing objection',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThat timing makes sense. I will check back around {{date}} unless you want me to close this out for now.\n\nBefore I do, is {{pain_or_priority}} still the right thing to reference when I follow up?\n\nThanks,\n{{your_name}}',
          },
          {
            label: 'After a referral',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for pointing me in the right direction. I will reach out to {{referral_name}} with a short note and keep the context specific to {{context}}.\n\nAppreciate it,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'weekly-review',
        heading: 'Step 4: run a weekly reply review',
        paragraphs: [
          'Once replies move from Apollo into Gmail, the CRM needs a review habit. Keep it short and focused on next steps.',
        ],
        steps: [
          'Review Needs response first and clear anything you owe.',
          'Check Meeting requested and confirm every item has a scheduling action.',
          'Scan Waiting on prospect for follow-ups due this week.',
          'Move dead threads to Closed or Dormant so the active pipeline stays honest.',
          'Pick the highest-value follow-ups before starting new prospecting.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I keep following up from Apollo after someone replies?',
        answer:
          'For real replies, it is usually cleaner to manage the conversation from Gmail and your CRM workflow. That keeps context, next steps, and follow-up tasks close to the actual thread.',
      },
      {
        question: 'What should I do with out-of-office replies?',
        answer:
          'Do not treat them as active opportunities. If the account is still relevant, set a future follow-up date based on the return date and keep the item out of your active sales pipeline.',
      },
      {
        question: 'Can Donna write the follow-up for me?',
        answer:
          'Donna is positioned as a Gmail-native CRM with AI assistance. Use AI drafts as a starting point when available, then review facts, tone, and the specific ask before sending.',
      },
    ],
  },
  {
    slug: 'instantly-to-crm-workflow',
    topicCluster: 'outreach-tool-workflows',
    title: 'Instantly to CRM workflow: keep replies organized in Gmail',
    seoTitle: 'Instantly to CRM Workflow',
    description:
      'A practical workflow for using Instantly for outbound while managing Gmail replies, CRM context, pipeline stages, and follow-up tasks in Donna.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about using Instantly alongside a Gmail CRM.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/features', label: 'Features' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/privacy', label: 'Privacy' },
    ],
    sections: [
      {
        id: 'where-instantly-ends',
        heading: 'Where Instantly ends and CRM work begins',
        paragraphs: [
          'Instantly can support outbound sending and campaign operations. But a CRM workflow starts when a reply needs judgment: qualification, context, follow-up timing, and a next action.',
          'Donna should be positioned on the Gmail side of that handoff. It is not necessary to claim a native Instantly integration to make the workflow useful.',
        ],
      },
      {
        id: 'manual-handoff',
        heading: 'Manual handoff: from campaign reply to Gmail CRM',
        paragraphs: [
          'For many solo operators, a manual handoff is enough. The goal is not perfect synchronization. The goal is to stop real replies from disappearing into campaign noise.',
        ],
        steps: [
          'Review replies from Instantly-connected inboxes in Gmail.',
          'Open the thread and classify the reply: interested, later, referral, not a fit, or opt-out.',
          'Create or update the contact in Donna only when the conversation deserves tracking.',
          'Add one source note such as "Source: Instantly campaign - {{campaign_name}}".',
          'Assign a pipeline stage and create the next follow-up task.',
          'Remove closed, bounced, or opted-out conversations from active CRM review.',
        ],
      },
      {
        id: 'csv-handoff',
        heading: 'CSV handoff for warm replies and account context',
        paragraphs: [
          'If you are working from exported campaign data, keep the CSV focused on warm reply context. Avoid turning Donna into a mirror of every outbound campaign row.',
        ],
        bullets: [
          'Useful columns: email, first name, last name, company, website, campaign name, reply status, last reply date, and owner note.',
          'Optional columns: segment, persona, region, account priority, and reason for outreach.',
          'Skip columns that do not help with Gmail follow-up, especially stale deliverability diagnostics or sequence internals.',
        ],
        note:
          'Export and manual entry workflows should follow your privacy obligations and your own data retention rules. Keep only what you need to manage the relationship.',
      },
      {
        id: 'stages',
        heading: 'Stages for Instantly-sourced opportunities',
        paragraphs: [
          'Use stages that distinguish reply handling from sales progress. This keeps campaign activity from pretending to be pipeline.',
        ],
        bullets: [
          'Needs triage: a reply arrived but has not been classified.',
          'Qualified reply: there is a real reason to continue.',
          'Meeting or next step: the conversation has a clear action.',
          'Waiting: you replied and need a follow-up date.',
          'Dormant or closed: not active enough for weekly attention.',
        ],
      },
      {
        id: 'follow-up-hygiene',
        heading: 'Follow-up hygiene after the handoff',
        paragraphs: [
          'Once a reply is in Donna, stop thinking like a sequence manager and start thinking like a relationship owner. The next message should reflect the actual reply, not a generic campaign step.',
        ],
        bullets: [
          'Reference one specific detail from the thread.',
          'Ask one clear question or propose one clear next step.',
          'Set a task date before leaving the thread.',
          'Close the loop when timing or fit is not there.',
        ],
      },
      {
        id: 'deliverability',
        heading: 'Deliverability, opt-outs, and tracking',
        paragraphs: [
          'Cold outreach should be relevant, compliant, and easy to decline. Do not use a CRM workflow to keep pushing on people who opted out or clearly said no.',
          'Tracking can be useful for prioritization, but it is incomplete. Treat opens and clicks as rough timing hints, not as proof that someone is interested or ready to buy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does Donna have a native Instantly integration?',
        answer:
          'This draft does not assume a native Instantly integration. The recommended workflow is adjacent: Instantly handles outbound activity, while Donna helps manage Gmail replies, context, stages, tasks, and follow-ups.',
      },
      {
        question: 'What should I import from Instantly into a CRM?',
        answer:
          'Start with warm replies and useful account context. Importing every campaign row can make your CRM noisy and harder to review.',
      },
      {
        question: 'Should opt-outs stay in the pipeline?',
        answer:
          'No. Handle opt-outs according to your process, remove them from active follow-up, and avoid creating CRM tasks that could lead to more outreach.',
      },
    ],
  },
  {
    slug: 'manage-instantly-replies-in-gmail',
    topicCluster: 'outreach-tool-workflows',
    title: 'How to manage Instantly replies in Gmail without losing context',
    seoTitle: 'Manage Instantly Replies in Gmail',
    description:
      'A Gmail-first reply triage workflow for Instantly campaigns: classify replies, preserve context, set CRM stages, and follow up without spammy behavior.',
    category: 'Follow-up systems',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    faqSubtitle: 'Common questions about managing Instantly campaign replies in Gmail.',
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'reply-problem',
        heading: 'The reply problem: campaigns create noise, Gmail holds context',
        paragraphs: [
          'Outbound campaigns can create a mix of useful replies, soft declines, referrals, auto-replies, and hard no messages. Treating all of them the same creates clutter.',
          'Gmail is where the thread context is easiest to inspect. Donna can help you keep the useful replies organized with contact context, pipeline stages, notes, and tasks next to the conversation.',
        ],
      },
      {
        id: 'triage-categories',
        heading: 'Use five reply categories',
        paragraphs: [
          'Before you add anything to a CRM stage, classify the reply. A small triage model prevents messy follow-up.',
        ],
        bullets: [
          'Interested: asks for details, time, pricing, or next steps.',
          'Referral: points you to another person or team.',
          'Later: timing is not right but there is possible future fit.',
          'No fit: clear decline or mismatch.',
          'Operational: auto-reply, bounce, unsubscribe, or delivery issue.',
        ],
      },
      {
        id: 'gmail-workflow',
        heading: 'The Gmail workflow after triage',
        steps: [
          'Open the reply thread and read the previous outbound message before responding.',
          'Create or update the contact in Donna only for interested, referral, or credible later replies.',
          'Add a short note with the campaign/source and the reason the reply matters.',
          'Move the contact or opportunity to the right stage.',
          'Create a task with a specific date and action.',
          'Close or archive no-fit and operational replies so they do not pollute the active pipeline.',
        ],
      },
      {
        id: 'templates',
        heading: 'Reply templates that keep the thread human',
        templates: [
          {
            label: 'Interested reply',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for getting back to me. The most relevant next step is {{next_step}} because {{reason}}.\n\nWould you prefer {{option_1}} or {{option_2}}?\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Referral reply',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for the pointer. I will reach out to {{referral_name}} with the short version and keep it specific to {{context}}.\n\nAppreciate the help,\n{{your_name}}',
          },
          {
            label: 'Later timing reply',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nTotally fair. I will check back around {{date}} unless priorities change sooner.\n\nWhen I follow up, should I reference {{specific_context}}?\n\nThanks,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'what-not-to-do',
        heading: 'What not to do with campaign replies',
        bullets: [
          'Do not keep sequence-style messaging after a human reply.',
          'Do not mention that someone opened, clicked, or viewed an email.',
          'Do not create tasks for people who opted out or clearly declined.',
          'Do not add unverified enrichment data as if it came from the thread.',
        ],
      },
      {
        id: 'review-loop',
        heading: 'A 15-minute reply review loop',
        paragraphs: [
          'Set one recurring review for campaign replies that moved into Donna. The goal is to protect warm conversations from getting buried.',
        ],
        steps: [
          'Clear all Needs response items.',
          'Check all Waiting tasks due this week.',
          'Move Later items to a realistic future follow-up date.',
          'Close no-fit threads that should not stay visible.',
          'Write the next message from the thread context, not from the original campaign copy.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I respond to every Instantly reply from Gmail?',
        answer:
          'Respond where the thread context is clearest and where you can manage the next step. For many solo workflows, Gmail plus a Gmail-native CRM is the cleanest place for real replies.',
      },
      {
        question: 'How do I avoid messy CRM data from cold campaigns?',
        answer:
          'Use triage first. Only create active CRM records for replies that need a next step, useful context, or future follow-up.',
      },
      {
        question: 'Can AI help summarize campaign replies?',
        answer:
          'AI can help draft summaries and follow-ups, but you should review the actual thread before saving notes or sending anything. Cold outreach replies often contain nuance that matters.',
      },
    ],
  },
  {
    slug: 'cold-email-to-pipeline-workflow',
    topicCluster: 'solo-sales-workflows',
    title: 'Cold email to pipeline workflow: from reply to next step',
    seoTitle: 'Cold Email to Pipeline Workflow',
    description:
      'Turn cold email replies into an honest Gmail CRM pipeline with triage rules, stages, tasks, CSV/manual handoffs, and respectful follow-up habits.',
    category: 'Solo sales workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    faqSubtitle: 'Common questions about turning cold email replies into pipeline.',
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/features', label: 'Features' },
    ],
    sections: [
      {
        id: 'pipeline-starts-at-reply',
        heading: 'Pipeline starts when there is a real signal',
        paragraphs: [
          'Cold email activity is not the same as pipeline. A sent email, an open, or a sequence step does not mean there is a relationship to manage.',
          'A practical pipeline starts when there is a reply, a referral, a booked meeting, or a clear reason to follow up later. That keeps your CRM honest and your review list manageable.',
        ],
      },
      {
        id: 'triage',
        heading: 'Triage cold replies before creating pipeline',
        paragraphs: [
          'Reply triage is the difference between a useful CRM and a noisy one. Classify the reply first, then decide whether it deserves a stage and task.',
        ],
        bullets: [
          'Create pipeline: interested replies, meeting requests, qualified referrals, or specific future timing.',
          'Track lightly: credible later replies where a future follow-up is welcome.',
          'Close: clear no, bad fit, unsubscribe, bounce, or generic auto-reply.',
        ],
      },
      {
        id: 'handoff-steps',
        heading: 'Step-by-step: cold reply to Gmail CRM pipeline',
        steps: [
          'Open the Gmail thread and read the original cold email plus the reply.',
          'Create or update the contact in Donna if the reply is worth tracking.',
          'Add a note with source, segment, and the reason the conversation is active.',
          'Choose a stage based on commitment, not enthusiasm.',
          'Create one task with a date, owner, and specific next action.',
          'If the person is not a fit or opted out, close the loop and keep them out of active follow-up.',
        ],
      },
      {
        id: 'stages',
        heading: 'Stages for a cold-email-sourced pipeline',
        bullets: [
          'New reply: needs review and response.',
          'Qualified: there is a real problem, role fit, or account fit.',
          'Meeting: scheduling or completed discovery.',
          'Proposal or next step: a concrete offer, scope, or decision is pending.',
          'Waiting: you need to follow up after a meaningful exchange.',
          'Dormant or closed: no current action, no fit, or no permission to continue.',
        ],
      },
      {
        id: 'templates',
        heading: 'Follow-up templates after a cold reply',
        templates: [
          {
            label: 'Qualified reply',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for the context. Based on what you said about {{specific_detail}}, I think the useful next step is {{next_step}}.\n\nWould {{time_or_option}} work?\n\nBest,\n{{your_name}}',
          },
          {
            label: 'Not the right person',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThanks for letting me know. Is there someone else who owns {{area}} that I should contact, or should I close this out?\n\nAppreciate it,\n{{your_name}}',
          },
          {
            label: 'Permission-based later follow-up',
            content:
              'Subject: Re: {{topic}}\n\nHi {{first_name}},\n\nThat makes sense. Would it be useful if I checked back around {{date}}, or would you rather I close the loop here?\n\nThanks,\n{{your_name}}',
          },
        ],
      },
      {
        id: 'responsible-follow-up',
        heading: 'Responsible follow-up rules',
        paragraphs: [
          'Cold email follow-up should be specific, easy to decline, and grounded in the reply. The moment someone replies, stop relying on generic sequence copy.',
          'Deliverability and trust matter more than squeezing out one more touch. Respect opt-outs, avoid misleading personalization, and do not use tracking language as a pressure tactic.',
        ],
        bullets: [
          'Use one clear ask per message.',
          'Reference the actual reply, not just the campaign theme.',
          'Set a follow-up task only when follow-up is appropriate.',
          'Close inactive or no-fit threads so your pipeline stays accurate.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When should a cold email lead become a pipeline item?',
        answer:
          'Usually after a meaningful reply, referral, meeting request, or specific future timing. Do not treat every sent email or open as pipeline.',
      },
      {
        question: 'Should cold email tracking affect pipeline priority?',
        answer:
          'Only lightly. Tracking can be blocked or misleading. Actual replies, meeting activity, fit, and next-step clarity are stronger prioritization signals.',
      },
      {
        question: 'How does Donna help with cold email follow-up?',
        answer:
          'Donna helps once the conversation is in Gmail: contact context, notes, stages, tasks, and follow-up hygiene next to the thread. It should not be described as a cold email sending platform.',
      },
    ],
  },

  {
    slug: 'what-to-do-after-cold-email-reply',
    topicCluster: 'solo-sales-workflows',
    title: 'What to do after a cold email reply',
    seoTitle: 'What to Do After a Cold Email Reply',
    description:
      'A practical workflow for handling cold email replies: qualify the response, capture context, set the next step, and keep follow-up organized in Gmail.',
    category: 'Solo sales workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    primaryInternalLink: { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/ai-gmail-crm', label: 'AI assistant in Gmail' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
    ],
    sections: [
      {
        id: 'reply-is-start',
        heading: 'A reply is the start of the workflow, not the finish line',
        paragraphs: [
          'A cold email reply creates momentum, but it also creates risk. If you respond from memory, forget the context, or fail to set a next step, the opportunity can disappear back into the inbox.',
          'The best response workflow is simple: understand the reply, qualify the conversation, capture the relationship context, and create one clear next step before you move on.',
        ],
      },
      {
        id: 'classify-reply',
        heading: 'First, classify the reply',
        paragraphs: [
          'Do not treat every reply the same. Before you write back, decide what kind of reply you received.',
        ],
        bullets: [
          'Interested: they asked for details, pricing, a call, or a next step.',
          'Curious but vague: they replied, but the buying need is still unclear.',
          'Referral: they pointed you to someone else.',
          'Not now: the timing is wrong, but the fit may still exist.',
          'Not a fit: there is no useful reason to keep pursuing this thread.',
        ],
        note:
          'This classification determines your next step. An interested reply needs speed. A vague reply needs one clear question. A not-now reply needs a future follow-up date.',
      },
      {
        id: 'capture-context',
        heading: 'Capture context while the thread is fresh',
        paragraphs: [
          'The first few minutes after a reply are the easiest time to keep your CRM accurate. You still remember why you reached out and what the reply means.',
          'Add a short contact note instead of a long narrative. The note should help future you understand the relationship without rereading the whole thread.',
        ],
        bullets: [
          'Why you contacted them.',
          'What they replied with.',
          'What they seem to care about.',
          'The current stage of the conversation.',
          'The next step and owner.',
        ],
      },
      {
        id: 'reply-templates',
        heading: 'Reply templates for common cold email responses',
        paragraphs: [
          'Keep replies short and specific. The goal is to make the next step easy, not to send a full sales pitch.',
        ],
        templates: [
          {
            label: 'Interested reply',
            content:
              'Subject: Re: {topic}\n\nHi {first_name},\n\nThanks for getting back to me. Based on your note, the most useful next step is probably a quick look at {specific_context}.\n\nWould {option_1} or {option_2} work for a short call, or would you prefer I send a brief summary first?\n\nBest,\n{your_name}',
          },
          {
            label: 'Vague positive reply',
            content:
              'Subject: Re: {topic}\n\nHi {first_name},\n\nMakes sense. To point you in the right direction, what is the main thing you are trying to improve right now: {option_a}, {option_b}, or something else?\n\nOnce I know that, I can suggest a practical next step.\n\nThanks,\n{your_name}',
          },
          {
            label: 'Not now reply',
            content:
              'Subject: Re: {topic}\n\nHi {first_name},\n\nTotally understand. When would be a better time to revisit this?\n\nIf helpful, I can follow up around {future_month} with a short note and you can tell me if it is relevant then.\n\nBest,\n{your_name}',
          },
        ],
      },
      {
        id: 'pipeline-and-tasks',
        heading: 'Move the conversation into a pipeline and set one task',
        paragraphs: [
          'After you reply, place the conversation somewhere you can review it. A simple solo sales pipeline is enough.',
        ],
        bullets: [
          'Replied: they responded, but the next step is not booked yet.',
          'Qualified: there is a real problem, fit, and reason to continue.',
          'Meeting: a call is scheduled or completed.',
          'Proposal: terms, pricing, or scope are being discussed.',
          'Nurture: useful fit, but timing is later.',
        ],
        steps: [
          'Attach the thread to the right contact.',
          'Add the contact or opportunity to the right stage.',
          'Create one task with a date: reply, book call, send recap, or follow up.',
          'Update the note after the next meaningful reply.',
        ],
      },
      {
        id: 'how-donna-helps',
        heading: 'How Donna helps inside Gmail',
        paragraphs: [
          'Donna CRM is designed for this Gmail-native workflow. You can keep contact context close to the thread, use pipelines to track where replies stand, and create tasks for the next step before the conversation gets buried.',
          'The AI assistant can help summarize the thread or draft a reply, but you should still review the context and decide what to send. Tracking signals can also help with timing, as long as you treat them as signals rather than certainty.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How fast should I answer a cold email reply?',
        answer:
          'Reply as soon as you can write something useful and accurate. Speed helps, but a rushed generic reply can hurt the conversation. Classify the reply first, then send one clear next step.',
      },
      {
        question: 'Should every cold email reply become a CRM item?',
        answer:
          'No. Track replies that have potential value: interest, timing, referral, or future fit. If the reply is clearly not a fit, close it cleanly and keep your pipeline focused.',
      },
      {
        question: 'Can email tracking tell me when to follow up?',
        answer:
          'It can help with timing, especially after a proposal or important reply, but it is not proof of intent. Use tracking signals as one input alongside the actual thread context.',
      },
    ],
  },
  {
    slug: 'gmail-contact-notes-system',
    topicCluster: 'gmail-crm-foundations',
    title: 'A Gmail contact notes system for people who sell from email',
    seoTitle: 'Gmail Contact Notes System',
    description:
      'Build a simple contact notes system in Gmail: what to capture, what to skip, and how to keep relationship context useful without heavy CRM admin.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/ai-gmail-crm', label: 'AI Gmail CRM' },
      { href: '/features', label: 'Features' },
      { href: '/privacy', label: 'Privacy' },
    ],
    sections: [
      {
        id: 'why-notes-matter',
        heading: 'Why contact notes matter in a Gmail workflow',
        paragraphs: [
          'Email has the conversation, but it does not always surface the relationship context at the moment you need it. That is where contact notes help.',
          'A good note system lets you answer basic questions quickly: who is this person, what do they care about, what did we last agree to, and what happens next?',
        ],
      },
      {
        id: 'note-format',
        heading: 'Use a short note format you can maintain',
        paragraphs: [
          'The mistake most people make is writing notes that are too long. Long notes become another inbox. Keep the format small enough to update after a real conversation.',
        ],
        bullets: [
          'Context: who they are and why the relationship matters.',
          'Need: the problem, goal, or opportunity they mentioned.',
          'Status: current stage, active project, or open question.',
          'Next step: what happens next, who owns it, and when.',
          'Personal detail: only if it is relevant and appropriate.',
        ],
      },
      {
        id: 'examples',
        heading: 'Contact note examples you can copy',
        templates: [
          {
            label: 'Sales lead note',
            content:
              'Context: Founder at {company}; replied to outreach about {topic}.\nNeed: Wants a lighter way to manage follow-ups from Gmail.\nStatus: Interested, needs pricing and setup details.\nNext step: Send short recap and pricing link by {date}.',
          },
          {
            label: 'Consulting client note',
            content:
              'Context: Existing client on {project_name}.\nNeed: Wants help reducing manual reporting time.\nStatus: Phase 1 active; decision needed on scope change.\nNext step: Send change request summary by {date}.',
          },
          {
            label: 'Freelance prospect note',
            content:
              'Context: Referred by {referrer}; looking for {service}.\nNeed: Needs proposal with timeline and deliverables.\nStatus: Discovery complete, proposal pending.\nNext step: Send proposal and follow-up task for {date}.',
          },
        ],
      },
      {
        id: 'when-to-update',
        heading: 'When to update contact notes',
        paragraphs: [
          'You do not need to update notes after every email. Update when the relationship state changes.',
        ],
        steps: [
          'After a first meaningful reply, add the starting context.',
          'After a call or discovery exchange, capture the need and next step.',
          'After sending a proposal, record what was sent and when to follow up.',
          'After a decision, update status and archive or move the pipeline item.',
          'Before a re-engagement email, review the note so your message is specific.',
        ],
      },
      {
        id: 'what-to-skip',
        heading: 'What not to put in contact notes',
        paragraphs: [
          'A note system is useful only if it stays clean. Do not turn it into a transcript or a private scratchpad full of sensitive details you do not need.',
        ],
        bullets: [
          'Do not copy full email threads into notes.',
          'Do not record sensitive personal details unless they are necessary for the work and appropriate to store.',
          'Do not write opinions you would be uncomfortable explaining later.',
          'Do not create a note for every tiny interaction.',
        ],
      },
      {
        id: 'donna-workflow',
        heading: 'How to run this with Donna CRM',
        paragraphs: [
          'Donna keeps the relationship workflow close to Gmail, so notes can live next to the conversations that create them. Pair notes with pipelines and tasks so context turns into action.',
          'If a thread is long, the AI assistant can help summarize it into a draft note. Review the summary before relying on it, especially for names, dates, pricing, and commitments.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long should a contact note be?',
        answer:
          'Short enough to scan in a few seconds. For most Gmail CRM workflows, 4-6 lines covering context, need, status, and next step is more useful than a long history.',
      },
      {
        question: 'Should I keep notes by contact or by deal?',
        answer:
          'Use contact notes for stable relationship context and pipeline items for specific deals, projects, or opportunities. That keeps the relationship record clean while still tracking active work.',
      },
      {
        question: 'Can AI write my contact notes?',
        answer:
          'AI can help create a first draft from thread context, but you should review it. Contact notes affect follow-ups and decisions, so accuracy matters more than speed.',
      },
    ],
  },
  {
    slug: 'gmail-pipeline-tracker',
    topicCluster: 'gmail-crm-foundations',
    title: 'How to build a Gmail pipeline tracker',
    seoTitle: 'Gmail Pipeline Tracker',
    description:
      'A step-by-step Gmail pipeline tracker for solo sales, consulting, and freelance workflows: stages, task rules, weekly review, and cleanup habits.',
    category: 'Gmail CRM workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 8,
    primaryInternalLink: { href: '/gmail-crm', label: 'Gmail CRM overview' },
    supportingInternalLinks: [
      { href: '/crm-for-solo-b2b-sales', label: 'CRM for solo B2B sales' },
      { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
      { href: '/features', label: 'Features' },
    ],
    sections: [
      {
        id: 'pipeline-purpose',
        heading: 'What a Gmail pipeline tracker should do',
        paragraphs: [
          'A pipeline tracker should help you see open work, not create more work. For Gmail-first operators, the tracker needs to stay close to the inbox because that is where context arrives.',
          'The goal is to turn active email threads into visible stages and next steps. If the tracker does not help you decide what to do next, it is too complicated.',
        ],
      },
      {
        id: 'choose-stages',
        heading: 'Choose stages based on commitment',
        paragraphs: [
          'Avoid stages that describe vague activity. Use stages that show how committed the conversation is.',
        ],
        bullets: [
          'New: a lead, referral, or thread worth tracking.',
          'Replied: the person engaged and needs a response or qualification.',
          'Meeting: a call is scheduled or recently completed.',
          'Proposal: a concrete offer, scope, or price is under review.',
          'Active: work is underway or the relationship is live.',
          'Dormant: useful context, but no active next step right now.',
        ],
      },
      {
        id: 'entry-rules',
        heading: 'Set rules for what enters the pipeline',
        paragraphs: [
          'Not every email belongs in your tracker. If you track everything, your pipeline becomes another noisy inbox.',
        ],
        bullets: [
          'Track conversations with a clear business outcome: deal, project, onboarding, renewal, referral, or partnership.',
          'Track people you intend to follow up with.',
          'Skip one-off admin emails, newsletters, and threads with no future action.',
          'Move items to Dormant when there is no active next step but the relationship may matter later.',
        ],
      },
      {
        id: 'task-rule',
        heading: 'Use the one-task rule',
        paragraphs: [
          'Every active pipeline item should have one next task. That task is the difference between a pipeline and a static list.',
        ],
        steps: [
          'Open the thread and decide the real next action.',
          'Write the task as an action, not a status: "send recap" instead of "waiting".',
          'Add a due date based on the conversation.',
          'When the task is done, update the stage or create the next task.',
        ],
        note:
          'If an item has no next task and no reason to stay active, move it to Dormant or close it.',
      },
      {
        id: 'weekly-review',
        heading: 'Run a 15-minute weekly review',
        paragraphs: [
          'A Gmail pipeline tracker stays useful when you review it. Keep the review short and decision-oriented.',
        ],
        steps: [
          'Start with the latest stages: Proposal, Active, or equivalent.',
          'Confirm every active item has a next task.',
          'Move conversations that changed stage during the week.',
          'Close or mark dormant anything that is no longer real.',
          'Choose the 3 highest-value follow-ups for the next week.',
        ],
      },
      {
        id: 'donna-fit',
        heading: 'How Donna supports a Gmail pipeline',
        paragraphs: [
          'Donna CRM brings contacts, pipelines, tasks, and thread context into a Gmail-native workflow. That makes the pipeline easier to maintain because updates happen close to the emails that drive them.',
          'The AI assistant can help summarize long threads or draft follow-ups during review, while you decide what should move stages and what should be sent.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I track multiple workflows in one Gmail pipeline?',
        answer:
          'You can, but it is usually cleaner to start with one workflow and one stage model. If freelance proposals and client delivery have different stages, separate pipelines may be easier to maintain.',
      },
      {
        question: 'How many stages should a Gmail pipeline have?',
        answer:
          'Most solo workflows work well with 4-6 stages. If you need more, make sure each stage changes what you do next. Otherwise it is probably extra admin.',
      },
      {
        question: 'What should I do with stale pipeline items?',
        answer:
          'Decide whether there is a real follow-up. If yes, create a task. If no, move the item to Dormant or close it so your active pipeline stays honest.',
      },
    ],
  },
  {
    slug: 'freelance-proposal-tracker-in-gmail',
    topicCluster: 'freelance-workflows',
    title: 'Freelance proposal tracker in Gmail',
    seoTitle: 'Freelance Proposal Tracker in Gmail',
    description:
      'Track freelance proposals from Gmail with simple stages, follow-up tasks, proposal notes, and templates for nudging clients without sounding pushy.',
    category: 'Freelance workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 9,
    primaryInternalLink: { href: '/crm-for-freelancers', label: 'CRM for freelancers' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/email-tracking-in-gmail', label: 'Email tracking in Gmail' },
      { href: '/pricing', label: 'Pricing' },
    ],
    sections: [
      {
        id: 'why-track-proposals',
        heading: 'Why freelance proposals need a tracker',
        paragraphs: [
          'Freelance proposals often fail quietly. You send the scope, the client gets busy, and the thread slides down your inbox. Without a tracker, you either forget to follow up or follow up from anxiety.',
          'A proposal tracker gives every proposal a stage, a note, and a next task so you can follow up professionally.',
        ],
      },
      {
        id: 'proposal-stages',
        heading: 'Proposal stages you can use',
        bullets: [
          'Discovery: client need and fit are still being clarified.',
          'Drafting: you owe the client a proposal.',
          'Sent: proposal delivered, awaiting response.',
          'Questions: client is reviewing scope, timing, or pricing.',
          'Accepted: project is moving to onboarding.',
          'Dormant or closed: no active path forward.',
        ],
      },
      {
        id: 'proposal-note',
        heading: 'What to record when you send a proposal',
        paragraphs: [
          'The note should help you follow up without rereading the proposal every time.',
        ],
        bullets: [
          'Proposal sent date.',
          'Project goal and main deliverables.',
          'Price or package name, if appropriate to record.',
          'Decision maker and any other stakeholders.',
          'Decision timeline or expected response date.',
          'Follow-up date and message angle.',
        ],
      },
      {
        id: 'follow-up-templates',
        heading: 'Proposal follow-up templates',
        templates: [
          {
            label: 'First proposal follow-up',
            content:
              'Subject: Re: Proposal for {project_name}\n\nHi {first_name},\n\nChecking in on the proposal I sent for {project_name}. Are there any questions about scope, timing, or pricing that I can clarify?\n\nIf helpful, I can also send a short version with the options side by side.\n\nBest,\n{your_name}',
          },
          {
            label: 'Decision timeline follow-up',
            content:
              'Subject: Timeline for {project_name}\n\nHi {first_name},\n\nWanted to ask about timing for the proposal. Are you hoping to make a decision this week, or should I follow up later?\n\nThat will help me plan capacity on my side.\n\nThanks,\n{your_name}',
          },
          {
            label: 'Close the loop',
            content:
              'Subject: Closing the loop on {project_name}\n\nHi {first_name},\n\nI have not heard back, so I am going to close the loop for now. If the project becomes active again, reply here and I can revisit scope and timing.\n\nThanks,\n{your_name}',
          },
        ],
      },
      {
        id: 'tracking-signals',
        heading: 'Use tracking signals carefully',
        paragraphs: [
          'Open and click signals can help you decide when to follow up after sending a proposal, but they should not change your tone. Never mention that someone opened an email or clicked a proposal link.',
          'Use signals as a timing hint. The message should still be based on the client need, proposal scope, or decision timeline.',
        ],
      },
      {
        id: 'donna-workflow',
        heading: 'How Donna supports freelance proposal tracking',
        paragraphs: [
          'Donna CRM fits this workflow because proposals usually begin and continue in Gmail. You can keep the client contact, proposal stage, notes, and follow-up tasks close to the original thread.',
          'For longer proposal threads, the AI assistant can help draft summaries or follow-up emails that you review before sending.',
        ],
      },
    ],
    faqs: [
      {
        question: 'When should I follow up after sending a freelance proposal?',
        answer:
          'A common default is 2-3 business days after sending, unless the client gave you a specific decision date. Larger projects may need more time, but every proposal should have a follow-up task.',
      },
      {
        question: 'Should I discount if a client does not reply?',
        answer:
          'Not as a default follow-up tactic. First ask whether they have questions about scope, timing, or fit. Discounting without context can train the conversation around price instead of value.',
      },
      {
        question: 'How do I keep proposal tracking from becoming admin work?',
        answer:
          'Use a small stage list and capture only the details needed for the next follow-up: what you sent, when you sent it, what decision is pending, and when you will follow up.',
      },
    ],
  },
  {
    slug: 'consultant-client-onboarding-email-workflow',
    topicCluster: 'consulting-workflows',
    title: 'Consultant client onboarding email workflow',
    seoTitle: 'Consultant Client Onboarding Email Workflow',
    description:
      'A consultant-friendly client onboarding workflow for Gmail: kickoff stages, email templates, task checklist, and handoff notes after a proposal is accepted.',
    category: 'Consulting workflows',
    publishedAt: '2026-06-29',
    readingTimeMinutes: 10,
    primaryInternalLink: { href: '/crm-for-consultants', label: 'CRM for consultants' },
    supportingInternalLinks: [
      { href: '/gmail-crm', label: 'Gmail CRM overview' },
      { href: '/ai-gmail-crm', label: 'AI assistant in Gmail' },
      { href: '/features', label: 'Features' },
    ],
    sections: [
      {
        id: 'why-onboarding',
        heading: 'Why onboarding should start in the email thread',
        paragraphs: [
          'For many consultants, the first client experience after a proposal is accepted happens in Gmail. That thread sets expectations for kickoff, access, scope, timing, and communication.',
          'A clear onboarding workflow turns an accepted proposal into a working engagement without making the client wonder what happens next.',
        ],
      },
      {
        id: 'onboarding-stages',
        heading: 'Client onboarding stages',
        paragraphs: [
          'Use stages that show where the engagement stands between acceptance and active delivery.',
        ],
        bullets: [
          'Accepted: client agreed to move forward, but onboarding has not started.',
          'Admin: contract, invoice, payment, or procurement steps are underway.',
          'Kickoff scheduled: first working meeting is booked.',
          'Inputs needed: waiting on access, documents, stakeholders, or answers.',
          'Ready to start: kickoff complete and required inputs are available.',
          'Active: delivery has started and onboarding is complete.',
        ],
      },
      {
        id: 'kickoff-checklist',
        heading: 'Onboarding checklist for consultants',
        steps: [
          'Confirm the accepted scope and expected outcome.',
          'Send any contract, invoice, or payment instructions that apply.',
          'Schedule kickoff and name the people who should attend.',
          'Request required access, documents, and background context.',
          'Set the communication cadence and where updates will happen.',
          'Create the first delivery task and owner after kickoff.',
        ],
      },
      {
        id: 'email-templates',
        heading: 'Client onboarding email templates',
        templates: [
          {
            label: 'Acceptance to next steps',
            content:
              'Subject: Next steps for {project_name}\n\nHi {first_name},\n\nGreat, excited to move forward on {project_name}. Here are the next steps so we stay aligned:\n\n1. {admin_step}\n2. Schedule kickoff: {scheduling_link_or_options}\n3. Please send {inputs_needed} before kickoff if possible.\n\nOnce kickoff is scheduled, I will send a short agenda.\n\nBest,\n{your_name}',
          },
          {
            label: 'Kickoff agenda',
            content:
              'Subject: Kickoff agenda for {project_name}\n\nHi {first_name},\n\nHere is a simple agenda for our kickoff:\n\n- Confirm goals and success criteria\n- Review scope and timeline\n- Confirm stakeholders and communication cadence\n- Identify access or inputs still needed\n- Agree on the first delivery milestone\n\nIf there is anything else you want to cover, send it over before the call.\n\nBest,\n{your_name}',
          },
          {
            label: 'Waiting on inputs',
            content:
              'Subject: Inputs needed for {project_name}\n\nHi {first_name},\n\nTo start cleanly, I still need the following:\n\n- {input_1}\n- {input_2}\n- {input_3}\n\nOnce I have those, I can begin {first_delivery_step}. If any item will take longer, tell me and I will adjust the plan.\n\nThanks,\n{your_name}',
          },
        ],
      },
      {
        id: 'handoff-note',
        heading: 'Create a handoff note before delivery starts',
        paragraphs: [
          'Before you move the client into active delivery, write one handoff note. This prevents the sales thread from becoming the only source of truth.',
        ],
        bullets: [
          'Goal: what the client hired you to accomplish.',
          'Scope: what is included in this phase.',
          'Inputs: what has been received and what is still missing.',
          'Cadence: meeting rhythm, reporting rhythm, and main contact.',
          'First milestone: the first concrete delivery step and date.',
        ],
      },
      {
        id: 'donna-workflow',
        heading: 'How Donna supports consultant onboarding',
        paragraphs: [
          'Donna CRM helps keep onboarding close to the Gmail threads where acceptance, kickoff planning, and inputs happen. Contacts, pipelines, and tasks can help you move from accepted proposal to active delivery without losing context.',
          'The AI assistant can help summarize long pre-sales threads into onboarding notes or draft kickoff emails. Review the details before sending or relying on the summary.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What should happen immediately after a consulting proposal is accepted?',
        answer:
          'Send a next-steps email that confirms scope, admin steps, kickoff scheduling, and required inputs. Then create tasks for anything you or the client must do before kickoff.',
      },
      {
        question: 'How do I avoid onboarding delays?',
        answer:
          'Name the exact inputs needed, who owns them, and when they are needed. If something is late, follow up on that item specifically instead of sending a vague check-in.',
      },
      {
        question: 'Should onboarding live in a separate project tool?',
        answer:
          'Delivery may move into a project tool later, but early onboarding often starts in Gmail. Keep the first workflow close to the thread, then hand off cleanly once delivery begins.',
      },
    ],
  },
]

export function getResourceArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug) ?? null
}

export function getRelatedResourceArticles(article: ResourceArticle, limit = 3) {
  if (limit <= 0) return []

  const clusterArticles = resourceArticles.filter(
    (candidate) => candidate.topicCluster === article.topicCluster,
  )
  const currentIndex = clusterArticles.findIndex((candidate) => candidate.slug === article.slug)

  if (currentIndex === -1) return []

  const result: ResourceArticle[] = []
  const resultLimit = Math.min(limit, clusterArticles.length - 1)

  for (let offset = 1; result.length < resultLimit; offset += 1) {
    const candidate = clusterArticles[(currentIndex + offset) % clusterArticles.length]
    if (candidate.slug !== article.slug && !result.some((item) => item.slug === candidate.slug)) {
      result.push(candidate)
    }
  }

  return result
}
