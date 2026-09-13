export const pricingPlans = [
  {
    name: "Starter",
    tagline: "Perfect for students and casual exploration.",
    monthly: 0,
    annual: 0,
    highlighted: false,
    cta: "Get Started Free",
    ctaTo: "/register",
    features: [
      "5 AI paper analyses / day",
      "Basic summaries",
      "Citation extraction",
      "1 workspace",
      "Community support",
    ],
  },
  {
    name: "Pro",
    tagline: "For researchers who rely on AI every day.",
    monthly: 19,
    annual: 15,
    highlighted: true,
    cta: "Start Pro Trial",
    ctaTo: "/register",
    features: [
      "Unlimited AI analysis",
      "Research gap detection",
      "Knowledge graph",
      "Semantic search",
      "Export reports (PDF, DOCX)",
      "Priority AI processing",
      "5 workspaces",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Built for universities and research teams.",
    monthly: null,
    annual: null,
    highlighted: false,
    cta: "Contact Sales",
    ctaTo: "/contact",
    features: [
      "Everything in Pro",
      "Unlimited workspaces",
      "Team collaboration",
      "Admin dashboard & SSO",
      "Usage analytics",
      "Dedicated support",
      "Custom integrations",
    ],
  },
];

// Feature comparison matrix shown below the pricing cards.
// value: true | false | string (e.g. "5/day", "Unlimited")
export const comparisonGroups = [
  {
    group: "Core AI",
    rows: [
      { label: "AI paper analyses", starter: "5 / day", pro: "Unlimited", enterprise: "Unlimited" },
      { label: "Research gap detection", starter: false, pro: true, enterprise: true },
      { label: "Semantic search", starter: false, pro: true, enterprise: true },
      { label: "Knowledge graph", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    group: "Workspace",
    rows: [
      { label: "Workspaces", starter: "1", pro: "5", enterprise: "Unlimited" },
      { label: "Export formats", starter: "TXT", pro: "PDF, DOCX", enterprise: "PDF, DOCX, API" },
      { label: "Team collaboration", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    group: "Support & Security",
    rows: [
      { label: "Support", starter: "Community", pro: "Priority email", enterprise: "Dedicated manager" },
      { label: "Admin dashboard & SSO", starter: false, pro: false, enterprise: true },
      { label: "Custom integrations", starter: false, pro: false, enterprise: true },
    ],
  },
];