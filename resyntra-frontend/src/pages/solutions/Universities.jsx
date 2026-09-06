import PageLayout from "@/layouts/PageLayout";

import {
  UniversityHero,
  UniversityDashboard,
  CampusResearchHub,
  FacultyInsights,
  StudentResearchPrograms,
  AIResearchInfrastructure,
  InstitutionalAnalytics,
  GlobalPartnerships,
  SecurityCompliance,
  UniversityCTA,
} from "@/components/universities";


const Universities = () => {
  return (
    <PageLayout>

      <UniversityHero />

      <UniversityDashboard />

      <CampusResearchHub />

      <FacultyInsights />

      <StudentResearchPrograms />

      <AIResearchInfrastructure />

      <InstitutionalAnalytics />

      <GlobalPartnerships />

      <SecurityCompliance />

      <UniversityCTA />

    </PageLayout>
  );
};

export default Universities;