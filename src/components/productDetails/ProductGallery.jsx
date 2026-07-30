import { useEffect, useState } from "react";

const STORAGE_URL = "http://127.0.0.1:8000/storage";

function ProductGallery({ product }) {
  const defaultImage = `${STORAGE_URL}/products/default.png`;

  const images = product?.image
    ? [`${STORAGE_URL}/${product.image}`]
    : [defaultImage];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [product]);

  return (
    <div className="space-y-5">
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
        <img
          src={selectedImage}
          alt={product?.name || "Perfume"}
          className="h-[500px] w-full object-cover transition duration-500 hover:scale-105"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
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
              onError={(e) => {
                e.target.src = defaultImage;
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;