"use client";

import HeroSection from "@/src/components/home/HeroSection";
import TrendingSection from "@/src/components/home/TrendingSection";
import StoryGridSection from "@/src/components/home/StoryGridSection";
import CommunitySection from "@/src/components/home/CommunitySection";
import BusinessSection from "@/src/components/home/BusinessSection";

export default function Page() {
  return (
    <div className="space-y-10">

      <HeroSection />
      <TrendingSection />
      <StoryGridSection />
      <CommunitySection />
      <BusinessSection />

    </div>
  );
}