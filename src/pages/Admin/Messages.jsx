import { useMemo, useState } from "react";
import {
  Search,
  Mail,
  Trash2,
  Eye,
  Clock,
} from "lucide-react";

function Messages() {
  const [search, setSearch] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Ahmed Ali",
      email: "ahmed@example.com",
      subject: "استفسار عن المنتج",
      message:
        "أرغب في معرفة مكونات عطر Royal Oud وهل هو مناسب للاستخدام اليومي؟",
      date: "31 Jul 2026",
      read: false,
    },
    {
      id: 2,
      name: "Sara Mohamed",
      email: "sara@example.com",
      subject: "تأخر الشحنة",
      message:
        "لم يصلني الطلب حتى الآن، هل يمكن معرفة حالة الشحنة؟",
      date: "30 Jul 2026",
      read: true,
    },
    {
      id: 3,
      name: "Omar Hassan",
      email: "omar@example.com",
      subject: "اقتراح",
      message:
        "أتمنى إضافة أحجام أكبر للعطور في المستقبل.",
      date: "29 Jul 2026",
      read: false,
    },
  ]);

  const filteredMessages = useMemo(() => {
    const keyword = search.toLowerCase();

    return messages.filter(
      (msg) =>
        msg.name.toLowerCase().includes(keyword) ||
        msg.email.toLowerCase().includes(keyword) ||
        msg.subject.toLowerCase().includes(keyword)
    );
  }, [messages, search]);

  const handleDelete = (id) => {
    setMessages((prev) =>
      prev.filter((msg) => msg.id !== id)
    );

    // لاحقًا:
    // await adminService.deleteMessage(id);
  };

  const handleRead = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id
          ? { ...msg, read: true }
          : msg
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          رسائل التواصل
        </h1>

        <p className="mt-2 text-gray-500">
          إدارة رسائل العملاء الواردة من صفحة التواصل.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="ابحث بالاسم أو البريد أو الموضوع..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border py-3 pl-12 pr-4 outline-none focus:border-violet-500"
          />
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`rounded-2xl border bg-white p-6 shadow-sm transition ${
                !message.read
                  ? "border-violet-300"
                  : "border-gray-200"
              }`}
            >
              <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {message.subject}
                  </h2>

                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Mail size={16} />
                      {message.email}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={16} />
                      {message.date}
                    </span>
                  </div>

                  <p className="mt-1 font-medium text-gray-700">
                    {message.name}
                  </p>
                </div>

                {!message.read && (
                  <span className="rounded-full bg-violet-100 px-3 py-1 text-sm font-semibold text-violet-700">
                    جديدة
                  </span>
                )}
              </div>

              <p className="mb-6 leading-7 text-gray-600">
                {message.message}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    handleRead(message.id)
                  }
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                >
                  <Eye size={18} />
                  عرض
                </button>

                <button
                  onClick={() =>
                    handleDelete(message.id)
                  }
                  className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
                >
                  <Trash2 size={18} />
                  حذف
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl bg-white py-16 text-center text-gray-500 shadow-sm">
            لا توجد رسائل.
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages;