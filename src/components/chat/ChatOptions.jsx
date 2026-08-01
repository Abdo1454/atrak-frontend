import ChatOptions from "./ChatOptions";

function ChatBubble({
  message,
  onOptionClick,
}) {
  if (!message) return null;

  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[85%]
          rounded-2xl
          px-4
          py-3
          shadow-sm
          ${
            isUser
              ? "bg-violet-700 text-white rounded-br-none"
              : "bg-white text-gray-800 rounded-bl-none border"
          }
        `}
      >
        <p className="whitespace-pre-line break-words text-sm leading-6">
          {message.text}
        </p>

        {!isUser && message.options?.length > 0 && (
          <ChatOptions
            options={message.options}
            onSelect={onOptionClick}
          />
        )}
      </div>
    </div>
  );
}

export default ChatBubble;