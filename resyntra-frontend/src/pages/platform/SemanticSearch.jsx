import PageLayout from "@/layouts/PageLayout";

import {
  SearchHero,
  SearchExperience,
  SemanticComparison,
  ResearchDomains,
  SearchInsights,
} from "@/components/search";

const SemanticSearch = () => {
  return (
    <PageLayout>
      <SearchHero />
      <SearchExperience />
      <SemanticComparison />
      <ResearchDomains />
      <SearchInsights />
    </PageLayout>
  );
};

export default SemanticSearch;