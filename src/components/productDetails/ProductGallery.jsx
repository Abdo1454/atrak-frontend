import { useState } from "react";
function ProductGallery({ product }) {

      const images = product?.images || [
    "/images/products/perfume-1.png",
    "/images/products/perfume-2.png",
    "/images/products/perfume-3.png",
    "/images/products/perfume-4.png",
  ];
   const [selectedImage, setSelectedImage] = useState(images[0]);
   return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <img
          src={selectedImage}
          alt={product?.name || "Perfume"}
          className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-xl border-2 transition ${
              selectedImage === image
                ? "border-violet-600"
                : "border-gray-200 hover:border-violet-400"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-24 w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
export default ProductGallery;