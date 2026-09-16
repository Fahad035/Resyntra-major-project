import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";

import TutorialsHero from "@/components/resources/tutorials/TutorialsHero";
import TutorialCategories from "@/components/resources/tutorials/TutorialCategories";
import TutorialGrid from "@/components/resources/tutorials/TutorialGrid";

const Tutorials = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <PageLayout>
      <TutorialsHero />

      <TutorialCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <TutorialGrid
        activeCategory={activeCategory}
      />
    </PageLayout>
  );
};

export default Tutorials;