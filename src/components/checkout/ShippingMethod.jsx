import { useState } from "react";

const ShippingMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("standard");

  const shippingMethods = [
    {
      id: "standard",
      title: "الشحن العادي",
      description: "يصل خلال 3 - 5 أيام",
      price: "50 جنيه",
    },
    {
      id: "express",
      title: "الشحن السريع",
      description: "يصل خلال 1 - 2 يوم",
      price: "100 جنيه",
    },
    {
      id: "pickup",
      title: "الاستلام من الفرع",
      description: "استلام الطلب من أقرب فرع",
      price: "مجاني",
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        طريقة الشحن
      </h2>


      <div className="space-y-4">

        {shippingMethods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition
            ${
              selectedMethod === method.id
                ? "border-purple-700 bg-purple-50"
                : "border-gray-300"
            }`}
          >

            <div className="flex items-center gap-4">

              <input
                type="radio"
                name="shipping"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
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

            </div>


            <span className="font-semibold text-purple-700">
              {method.price}
            </span>

          </label>
        ))}

      </div>

    </section>
  );
};

export default ShippingMethod;