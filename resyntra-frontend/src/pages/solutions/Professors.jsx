import PageLayout from "@/layouts/PageLayout";

import {
  ProfessorHero,
  TeachingDashboard,
  CourseAssistant,
  ResearchSupervision,
  StudentMentorship,
  PublicationInsights,
  AcademicImpact,
  DepartmentAnalytics,
  ProfessorTestimonials,
  ProfessorCTA,
} from "@/components/professors";

const Professors = () => {
  return (
    <PageLayout>
      <ProfessorHero />

      <TeachingDashboard />

      <CourseAssistant />

      <ResearchSupervision />

      <StudentMentorship />

      <PublicationInsights />

      <AcademicImpact />

      <DepartmentAnalytics />

      <ProfessorTestimonials />

      <ProfessorCTA />
    </PageLayout>
  );
};

export default Professors;