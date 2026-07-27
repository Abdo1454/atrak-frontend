import HeroSection from "../../components/builder/HeroSection";
import ScentSelection from "../../components/builder/ScentSelection";

function Builder() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <HeroSection />
      <ScentSelection />
    </main>
  );
}

export default Builder;