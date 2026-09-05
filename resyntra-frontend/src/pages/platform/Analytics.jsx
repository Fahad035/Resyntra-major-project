import PageLayout from "@/layouts/PageLayout";

import {
  AnalyticsHero,
  ResearchDashboard,
  CitationAnalytics,
} from "@/components/analytics";

const Analytics = () => {
  return (
    <PageLayout>
      <AnalyticsHero />
      <ResearchDashboard />
      <CitationAnalytics />
    </PageLayout>
  );
};

export default Analytics;