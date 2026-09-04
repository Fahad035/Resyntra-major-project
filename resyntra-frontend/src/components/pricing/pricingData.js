const pricingData = [
  {
    name: "Starter",
    price: "Free",
    description:
      "Perfect for students and anyone exploring AI-powered research.",
    highlighted: false,
    features: [
      "5 AI paper analyses / day",
      "Basic summaries",
      "Citation extraction",
      "Community support",
    ],
    button: "Get Started",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description:
      "Designed for researchers who rely on AI every day.",
    highlighted: true,
    features: [
      "Unlimited AI analysis",
      "Research gap detection",
      "Knowledge graph",
      "Semantic search",
      "Export reports",
      "Priority AI",
    ],
    button: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "Built for universities, research groups, and organizations.",
    highlighted: false,
    features: [
      "Team workspaces",
      "Admin dashboard",
      "Usage analytics",
      "Dedicated support",
      "Custom integrations",
    ],
    button: "Contact Sales",
  },
];

export default pricingData;