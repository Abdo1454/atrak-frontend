import HeroSection from "../../components/about/HeroSection";
import CompanyStory from "../../components/about/CompanyStory";
import MissionVision from "../../components/about/MissionVision";
import BrandValues from "../../components/about/BrandValues";
import WhyChooseUs from "../../components/about/WhyChooseUs";
// import TeamSection from "../../components/about/TeamSection";
// import Statistics from "../../components/about/Statistics";
// import CallToAction from "../../components/about/CallToAction";

function About() {
  return (
    <main className="bg-gray-50" dir="rtl">
      <div className="container mx-auto space-y-24 px-4 py-12">
        <HeroSection />

        <CompanyStory />
        <MissionVision />
        <BrandValues />
        <WhyChooseUs />
        {/*

        <Statistics />

        <TeamSection />

        <CallToAction /> */}
      </div>
    </main>
  );
}

export default About;