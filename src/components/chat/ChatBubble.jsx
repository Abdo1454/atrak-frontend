function ChatBubble({
  message,
  onOptionClick,
}) {
  return (
    <div
      className={`flex ${
        message.sender === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          ${
            message.sender === "user"
              ? "bg-violet-700 text-white rounded-br-none"
              : "bg-gray-100 text-gray-800 rounded-bl-none"
          }
        `}
      >
        <p className="whitespace-pre-line">
          {message.text}
        </p>

        {message.options?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.options.map((option) => (
              <button
                key={option}
                onClick={() => onOptionClick(option)}
                className="
                  rounded-full
                  border
                  border-violet-700
                  px-3
                  py-2
                  text-sm
                  text-violet-700
                  transition
                  hover:bg-violet-700
                  hover:text-white
                "
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBubble;