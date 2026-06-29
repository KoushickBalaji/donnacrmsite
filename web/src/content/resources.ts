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

export type ResourceArticle = {
  slug: string
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
]

export function getResourceArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug) ?? null
}
