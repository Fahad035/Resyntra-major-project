import PageLayout from "@/layouts/PageLayout";

import {
  SolutionHero,
  PainPoints,
  FeatureShowcase,
  StudyWorkflow,
  SuccessMetrics,
  SolutionCTA,
} from "@/components/solutions";

import { STUDENTS } from "@/data/students";

const Students = () => {
  return (
    <PageLayout>
      <SolutionHero data={STUDENTS} />

      <PainPoints data={STUDENTS} />

      <FeatureShowcase data={STUDENTS} />

      <StudyWorkflow data={STUDENTS} />

      <SuccessMetrics data={STUDENTS} />

      <SolutionCTA />
    </PageLayout>
  );
};

export default Students;