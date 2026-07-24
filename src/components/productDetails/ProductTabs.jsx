import { useState } from "react";
import ReviewsSection from "./ReviewsSection";

function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "الوصف" },
    { id: "ingredients", label: "المكونات" },
    { id: "reviews", label: "التقييمات" },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      {/* Tabs */}
      <div className="mb-8 flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 px-6 py-3 text-lg font-medium transition ${
              activeTab === tab.id
                ? "border-violet-600 text-violet-600"
                : "border-transparent text-gray-500 hover:text-violet-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === "description" && (
        <div>
          <h3 className="mb-4 text-xl font-semibold">
            وصف المنتج
          </h3>

          <p className="leading-8 text-gray-600">
            {product.description}
          </p>
        </div>
      )}

      {activeTab === "ingredients" && (
        <div>
          <h3 className="mb-4 text-xl font-semibold">
            المكونات
          </h3>

          <ul className="list-disc space-y-2 pr-6 text-gray-600">
            {product.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "reviews" && (
        <ReviewsSection reviews={product.reviewsList} />
      )}
    </div>
  );
}

export default ProductTabs;