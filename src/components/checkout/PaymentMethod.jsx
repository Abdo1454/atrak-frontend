import { useState } from "react";

const PaymentMethod = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const paymentMethods = [
    {
      id: "card",
      title: "بطاقة ائتمان",
      description: "الدفع باستخدام Visa أو Mastercard",
    },
    {
      id: "vodafone-cash",
      title: "Vodafone Cash",
      description: "الدفع باستخدام محفظة Vodafone Cash",
    },
    {
      id: "fawry",
      title: "Fawry",
      description: "الدفع عبر خدمة فوري",
    },
    {
      id: "apple",
      title: "Apple Pay",
      description: "الدفع السريع باستخدام Apple Pay",
    },
    {
      id: "google",
      title: "Google Pay",
      description: "الدفع باستخدام Google Pay",
    },
    {
      id: "paypal",
      title: "PayPal",
      description: "الدفع عبر حساب PayPal",
    },
    {
      id: "cash",
      title: "الدفع عند الاستلام",
      description: "ادفع عند وصول الطلب",
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        طريقة الدفع
      </h2>

      <div className="space-y-4">

        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-center gap-4 rounded-xl border p-4 transition
            ${
              selectedPayment === method.id
                ? "border-purple-700 bg-purple-50"
                : "border-gray-300"
            }`}
          >

            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedPayment === method.id}
              onChange={() => setSelectedPayment(method.id)}
              className="h-5 w-5 text-purple-700 focus:ring-purple-700"
            />

            <div>
              <h3 className="font-medium text-gray-900">
                {method.title}
              </h3>

              <p className="text-sm text-gray-500">
                {method.description}
              </p>
            </div>

          </label>
        ))}

      </div>

    </section>
  );
};

export default PaymentMethod;