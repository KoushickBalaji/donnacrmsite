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
    description:
      'A practical way to turn email threads into a lightweight pipeline: keep context in Gmail, capture next steps as tasks, and review your work without spreadsheets.',
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
    description:
      'A plain-English explanation of agentic CRMs: what "agentic" means, why human-in-the-loop matters, and how an assistant can help without taking control away from you.',
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
      'A lightweight consulting pipeline you can reuse: clear stages, simple exit criteria, and next-step habits that keep your client tracker accurate without admin work.',
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
    description:
      'A practical system for keeping CRM data fresh: capture updates in context, keep stages lightweight, and use a human-in-the-loop assistant to reduce repetitive work.',
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
      'A practical checklist for evaluating Gmail CRM extensions: workflow fit, pipelines and tasks, AI safety, permissions, privacy, and the details that matter for solo operators.',
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
]

export function getResourceArticleBySlug(slug: string) {
  return resourceArticles.find((article) => article.slug === slug) ?? null
}
