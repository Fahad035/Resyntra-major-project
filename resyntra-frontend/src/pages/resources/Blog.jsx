import { useState } from "react";
import PageLayout from "@/layouts/PageLayout";

import {
  BlogHero,
  BlogCategories,
  FeaturedPost,
  BlogGrid,
} from "@/components/resources/blog";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <PageLayout>
      <BlogHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <BlogCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <FeaturedPost />

      <BlogGrid
        activeCategory={activeCategory}
        searchQuery={searchQuery}
      />
    </PageLayout>
  );
};

export default Blog;