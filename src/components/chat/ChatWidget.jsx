import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

function ChatWidget() {
  const initialMessages = [
    {
      id: 1,
      sender: "bot",
      text: "👋 أهلاً بك في Atark\n\nاختر نوع العطر:",
      options: [
        "🌙 شرقي",
        "🌊 منعش",
        "🌸 زهري",
        "🪵 خشبي",
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping] = useState(false);

  const handleOptionClick = (option) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: option,
    };

    let botMessage;

    switch (option) {
      case "🌙 شرقي":
      case "🌊 منعش":
      case "🌸 زهري":
      case "🪵 خشبي":
        botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: "لمن تبحث عن العطر؟",
          options: [
            "👨 رجالي",
            "👩 نسائي",
            "👨‍👩‍👧 للجنسين",
          ],
        };
        break;

      case "👨 رجالي":
      case "👩 نسائي":
      case "👨‍👩‍👧 للجنسين":
        botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: "اختر ميزانيتك:",
          options: [
            "💰 أقل من 500",
            "💰 500 - 1000",
            "💰 أكثر من 1000",
          ],
        };
        break;

      case "💰 أقل من 500":
      case "💰 500 - 1000":
      case "💰 أكثر من 1000":
        botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text:
            "🎉 شكراً لاختياراتك.\nسيتم عرض العطور المناسبة لك قريباً.",
          options: [],
        };
        break;

      default:
        botMessage = {
          id: Date.now() + 1,
          sender: "bot",
          text: "يرجى اختيار أحد الخيارات المتاحة.",
          options: [],
        };
    }

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);
  };

  const restartConversation = () => {
    setMessages(initialMessages);
  };

  return (
    <>
      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-50
            flex
            h-[500px]
            w-[380px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            bg-white
            shadow-2xl
          "
        >
          <ChatHeader
            onClose={() => setOpen(false)}
          />

          <ChatMessages
            messages={messages}
            isTyping={isTyping}
            onOptionClick={handleOptionClick}
          />

          <ChatInput
            onRestart={restartConversation}
          />
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-violet-700
          text-white
          shadow-xl
          transition
          hover:scale-110
          hover:bg-violet-800
        "
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </>
  );
}

export default ChatWidget;