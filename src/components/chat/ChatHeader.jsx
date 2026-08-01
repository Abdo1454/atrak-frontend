import { Bot, X } from "lucide-react";

function ChatHeader({ onClose }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        bg-violet-700
        px-4
        py-3
        text-white
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/20
          "
        >
          <Bot size={22} />
        </div>

        <div>
          <h3 className="font-semibold">
            Atark Assistant
          </h3>

          <p className="text-xs text-violet-100">
            مساعد اختيار العطور
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="
          rounded-full
          p-2
          transition
          hover:bg-white/20
        "
      >
        <X size={20} />
      </button>
    </div>
  );
}

export default ChatHeader;