import { Search } from "lucide-react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="ابحث عن عطر..."
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
      />
    </div>
  );
}

export default SearchBar;