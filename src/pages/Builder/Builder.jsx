import HeroSection from "../../components/builder/HeroSection";
import ScentSelection from "../../components/builder/ScentSelection";
import NotesSelection from "../../components/builder/NotesSelection";
import BottleCustomization from "../../components/builder/BottleCustomization";
// import PerfumePreview from "../../components/builder/PerfumePreview";

function Builder() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <HeroSection />
      <ScentSelection />
          <NotesSelection />
          <BottleCustomization />
          {/* <PerfumePreview /> */}
    </main>
  );
}

export default Builder;