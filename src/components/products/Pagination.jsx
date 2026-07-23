import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border p-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`h-10 w-10 rounded-lg font-medium transition ${
            currentPage === index + 1
              ? "bg-violet-600 text-white"
              : "border hover:bg-gray-100"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-lg border p-2 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>
    </div>
  );
}

export default Pagination;