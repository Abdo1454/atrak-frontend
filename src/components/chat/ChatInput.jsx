import { RotateCcw } from "lucide-react";

function ChatInput({ onRestart }) {
  return (
    <div
      className="
        border-t
        bg-white
        p-3
      "
    >
      <button
        type="button"
        onClick={onRestart}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-violet-700
          px-4
          py-3
          text-sm
          font-medium
          text-violet-700
          transition-all
          duration-200
          hover:bg-violet-700
          hover:text-white
          active:scale-95
        "
      >
        <RotateCcw size={18} />
        ابدأ من جديد
      </button>
    </div>
  );
}

export default ChatInput;