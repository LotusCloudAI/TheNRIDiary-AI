import HeroSection from "../components/home/HeroSection"
import TrendingSection from "../components/home/TrendingSection"
import StoryGridSection from "../components/home/StoryGridSection"
import StateNewsSection from "../components/home/StateNewsSection"
import CommunitySection from "../components/home/CommunitySection"
import BusinessSection from "../components/home/BusinessSection"
import ClassifiedSection from "../components/home/ClassifiedSection"
import EventsSection from "../components/home/EventsSection"
import VideoSection from "../components/home/VideoSection"
import AdvertisementBanner from "../components/ads/AdvertisementBanner"

export default function Home() {

  return (

    <div
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "30px 40px"
      }}
    >

      {/* HERO + TRENDING */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "40px",
          alignItems: "start",
          marginBottom: "50px"
        }}
      >
        <HeroSection />
        <TrendingSection />
      </div>


      {/* TOP ADVERTISEMENT */}

      <section style={{ marginBottom: "50px" }}>
        <AdvertisementBanner />
      </section>


      {/* LATEST STORIES */}

      <section style={{ marginBottom: "50px" }}>
        <StoryGridSection />
      </section>


      {/* USA STATE NEWS */}

      <section style={{ marginBottom: "50px" }}>
        <StateNewsSection />
      </section>


      {/* COMMUNITY MODULES */}

      <section style={{ marginBottom: "50px" }}>
        <CommunitySection />
      </section>


      {/* BUSINESS DIRECTORY + CLASSIFIEDS */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginBottom: "50px"
        }}
      >
        <BusinessSection />
        <ClassifiedSection />
      </section>


      {/* MID PAGE ADVERTISEMENT */}

      <section style={{ marginBottom: "50px" }}>
        <AdvertisementBanner />
      </section>


      {/* EVENTS + VIDEOS */}

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          marginBottom: "50px"
        }}
      >
        <EventsSection />
        <VideoSection />
      </section>

    </div>

  )

}