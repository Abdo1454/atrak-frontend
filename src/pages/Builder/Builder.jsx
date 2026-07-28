import { useState } from "react";

import HeroSection from "../../components/builder/HeroSection";
import ScentSelection from "../../components/builder/ScentSelection";
import NotesSelection from "../../components/builder/NotesSelection";
import BottleCustomization from "../../components/builder/BottleCustomization";

const bottleSizes = [
  { id: 1, size: "30ml", height: "h-40" },
  { id: 2, size: "50ml", height: "h-52" },
  { id: 3, size: "100ml", height: "h-64" },
];

const bottleColors = [
  { id: 1, name: "شفاف", color: "bg-white border-2 border-gray-300" },
  { id: 2, name: "أسود", color: "bg-black" },
  { id: 3, name: "ذهبي", color: "bg-yellow-400" },
  { id: 4, name: "بنفسجي", color: "bg-purple-700" },
];

const capColors = [
  { id: 1, name: "ذهبي", color: "bg-yellow-500" },
  { id: 2, name: "فضي", color: "bg-gray-300" },
  { id: 3, name: "أسود", color: "bg-black" },
];

function Builder() {
  const [selectedScent, setSelectedScent] = useState(null);
  const [selectedNotes, setSelectedNotes] = useState([]);

  const [selectedSize, setSelectedSize] = useState(bottleSizes[1]);

  const [selectedBottleColor, setSelectedBottleColor] =
    useState(bottleColors[3]);

  const [selectedCapColor, setSelectedCapColor] =
    useState(capColors[0]);

  return (
    <main className="bg-gray-50">
      <HeroSection />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12">
        <ScentSelection
          selectedScent={selectedScent}
          setSelectedScent={setSelectedScent}
        />

        <NotesSelection
          selectedNotes={selectedNotes}
          setSelectedNotes={setSelectedNotes}
        />

        <BottleCustomization
          selectedScent={selectedScent}
          selectedNotes={selectedNotes}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedBottleColor={selectedBottleColor}
          setSelectedBottleColor={setSelectedBottleColor}
          selectedCapColor={selectedCapColor}
          setSelectedCapColor={setSelectedCapColor}
        />
      </div>
    </main>
  );
}

export default Builder;