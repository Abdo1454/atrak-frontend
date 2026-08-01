import { useEffect, useRef } from "react";

import ChatBubble from "./ChatBubble";

function ChatMessages({
  messages = [],
  isTyping = false,
  onOptionClick,
}) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message}
          onOptionClick={onOptionClick}
        />
      ))}

      {isTyping && (
        <div className="flex justify-start">
          <div className="rounded-2xl rounded-bl-none bg-gray-200 px-4 py-3 text-sm text-gray-600">
            <div className="flex gap-1">
              <span className="animate-bounce">•</span>
              <span className="animate-bounce [animation-delay:150ms]">
                •
              </span>
              <span className="animate-bounce [animation-delay:300ms]">
                •
              </span>
            </div>
          </div>
        </div>
      )}

      <div ref={endRef} />
    </div>
  );
}

export default ChatMessages;