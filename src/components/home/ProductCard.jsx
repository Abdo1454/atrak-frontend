import { Link } from "react-router-dom";

function ProductCard({product}){
return(
  <div className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
  <div className="overflow-hidden">
    <img
      src={product.image}
      alt={product.name}
      className="h-96 w-full object-cover transition duration-500 group-hover:scale-110"
    />
  </div>

  <div className="space-y-4 p-6 text-center">

    <span className="rounded-full bg-[#F5F0FF] px-4 py-1 text-sm font-medium text-[#4E19AB]">
      {product.category}
    </span>

    <h3 className="text-2xl font-bold text-gray-800">
      {product.name}
    </h3>

    <div className="flex justify-center gap-1 text-yellow-500">
      {Array.from({ length: 5 }, (_, index) => (
        <i
          key={index}
          className={
            index < Math.floor(product.rating)
              ? "fa-solid fa-star"
              : "fa-regular fa-star"
          }
        ></i>
      ))}
    </div>

    <p className="text-3xl font-bold text-[#4E19AB]">
      {product.price} ج.م
    </p>

    <button className="w-full rounded-xl bg-[#4E19AB] py-3 font-semibold text-white transition hover:bg-[#3b1282]">
      أضف للسلة
    </button>
  </div>
</div>
)
}

export default ProductCard;