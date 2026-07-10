export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  content?: string; // HTML string for the article body
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "why-hvac-businesses-feel-busy-but-not-profitable",
    title: "Why HVAC businesses feel busy but don't feel profitable",
    excerpt: "You're dispatching crews, closing estimates, and working 12-hour days. Revenue is up, but the margins at the end of the month don't reflect the effort. Here is where the money is quietly slipping away.",
    publishedAt: "July 12, 2026",
    readTime: "4 min read",
    content: `
      <p>It is the most common paradox in the HVAC industry once a company crosses the $2M mark: everyone is exhausted, the dispatch board is completely full, top-line revenue is growing, but the net profit margin feels entirely disconnected from the effort being put in.</p>
      
      <p>If you ask most consultants why this happens, they will tell you to raise your prices or cut your labor costs. But if you have been running a successful business for five years, you already know your pricing and your payroll.</p>
      
      <p>The real reason established HVAC businesses feel busy but not profitable is because <strong>they are moving too fast to track the gaps between their systems.</strong></p>
      
      <h2>The Illusion of "Busy"</h2>
      
      <p>A full dispatch board proves that demand exists. It does not prove that you are capturing the maximum yield of that demand.</p>
      
      <p>When an HVAC business is built on speed—answering the phone fast, getting a tech out fast, moving to the next job fast—the things that don't happen immediately tend not to happen at all.</p>
      
      <ul>
        <li>A customer calls at 6:45 PM on a Tuesday. They leave a voicemail. They aren't bleeding out, so dispatch ignores it until morning. By morning, they've booked someone else. The business was too busy to notice the lost $8,000 install.</li>
        <li>A tech goes out, does a diagnostic, and writes up an estimate. The customer says, "Let me think about it." The tech moves to the next job. No one ever follows up. The business was too busy running new calls to close the one they already paid to acquire.</li>
        <li>A loyal customer's maintenance agreement lapses. They forget. You forget. Two years later, they call a competitor when their AC breaks.</li>
      </ul>
      
      <h2>Where the Money Actually Goes</h2>
      
      <p>When we run Revenue Intelligence diagnostics on $5M to $20M HVAC companies, we rarely find that they are fundamentally broken. We find that they are leaking.</p>
      
      <p>They are bleeding cash in three highly specific areas that rarely show up on a standard P&L report:</p>
      
      <ol>
        <li><strong>Missed after-hours and overflow calls:</strong> Not just the calls that go to voicemail, but the calls where the customer hangs up after 30 seconds on hold. </li>
        <li><strong>Abandoned mid-ticket estimates:</strong> Estimates between $1,500 and $4,000 that require a second thought from the homeowner, but zero follow-up from the office.</li>
        <li><strong>Unoptimized routing:</strong> Paying a technician $40 an hour to drive 45 minutes across town, past three existing customers who are due for a checkup, to run a zero-dollar warranty call.</li>
      </ol>
      
      <h2>How to Fix the Paradox</h2>
      
      <p>You cannot fix this by buying more leads. Buying more leads just pours more water into a leaky bucket.</p>
      
      <p>You fix this by stopping. By pulling the data out of your phone system, matching it against your CRM, and looking at the exact dollar amount that fell through the cracks last month.</p>
      
      <p>Once you see the real number, "busy" stops being the goal. Yield becomes the goal.</p>
    `
  },
  {
    id: "2",
    slug: "cost-of-missed-after-hours-call",
    title: "How much revenue does a missed after-hours call actually cost an HVAC company",
    excerpt: "It's not just a missed diagnostic fee. When you calculate the true lifetime value and conversion rates of emergency dispatch, a single voicemail can cost thousands.",
    publishedAt: "July 19, 2026",
    readTime: "3 min read"
  },
  {
    id: "3",
    slug: "hvac-estimate-follow-up-data",
    title: "HVAC estimate follow-up: what the data actually shows",
    excerpt: "We analyzed thousands of abandoned estimates. The difference between companies that follow up and those that don't isn't just closing rate—it's profit margin.",
    publishedAt: "July 26, 2026",
    readTime: "4 min read"
  },
  {
    id: "4",
    slug: "technicians-not-recommending-maintenance",
    title: "Why your HVAC technicians aren't recommending maintenance plans (and what it's costing you)",
    excerpt: "If your techs are acting like order-takers instead of advisors, you are losing recurring revenue. Here is why it happens and the mathematical cost of ignoring it.",
    publishedAt: "August 2, 2026",
    readTime: "5 min read"
  },
  {
    id: "5",
    slug: "hvac-membership-renewal-rates",
    title: "HVAC membership renewal rates: what's normal and what's a leak",
    excerpt: "Are you churning 10% or 40% of your maintenance agreements? How to calculate your true retention rate and benchmark it against established industry leaders.",
    publishedAt: "August 9, 2026",
    readTime: "3 min read"
  },
  {
    id: "6",
    slug: "crm-vs-revenue-intelligence",
    title: "The difference between an HVAC CRM and revenue intelligence",
    excerpt: "ServiceTitan, Housecall Pro, and FieldEdge are operational tools. They track what happened. Revenue intelligence tells you what didn't happen, and what it cost you.",
    publishedAt: "August 16, 2026",
    readTime: "4 min read"
  },
  {
    id: "7",
    slug: "hvac-dispatch-routing-leaks",
    title: "How to tell if your HVAC dispatch routing is costing you money",
    excerpt: "Windshield time is the silent killer of HVAC profit margins. Here is how to analyze your dispatch logs to find out if your routing is bleeding your labor budget.",
    publishedAt: "August 23, 2026",
    readTime: "5 min read"
  },
  {
    id: "8",
    slug: "what-an-hvac-business-diagnostic-looks-like",
    title: "What an HVAC business diagnostic actually looks like",
    excerpt: "No slide decks. No marketing pitches. Just a raw, cross-referenced look at your own data. Step inside the process of a real WOVREX revenue audit.",
    publishedAt: "August 30, 2026",
    readTime: "3 min read"
  },
  {
    id: "9",
    slug: "hvac-businesses-2m-to-10m-slow-growth",
    title: "HVAC businesses doing $2M–$10M: the three things that tend to slow growth",
    excerpt: "What works to get you to two million will break before you get to ten million. The three operational bottlenecks that trap established HVAC companies.",
    publishedAt: "September 6, 2026",
    readTime: "6 min read"
  },
  {
    id: "10",
    slug: "how-to-recover-lapsed-hvac-maintenance-customers",
    title: "How to recover lapsed HVAC maintenance customers",
    excerpt: "They haven't used you in two years, but they already trust you. How to identify and reactivate the most profitable segment of your dead database.",
    publishedAt: "September 13, 2026",
    readTime: "4 min read"
  },
  {
    id: "11",
    slug: "what-i-wish-i-tracked-first-five-years",
    title: "What I wish I'd tracked in my first five years running an HVAC business",
    excerpt: "If you are only looking at top-line revenue and bank balances, you are flying blind. The operational metrics every owner wishes they had started tracking sooner.",
    publishedAt: "September 20, 2026",
    readTime: "5 min read"
  },
  {
    id: "12",
    slug: "hvac-revenue-benchmarks-5m-business",
    title: "HVAC revenue benchmarks: what should a $5M business actually be keeping",
    excerpt: "Stop guessing if your margins are healthy. A breakdown of the net profit, labor ratio, and recurring revenue benchmarks that a $5M operation should be hitting.",
    publishedAt: "September 27, 2026",
    readTime: "4 min read"
  }
];
