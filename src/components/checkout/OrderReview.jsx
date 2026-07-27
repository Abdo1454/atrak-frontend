const OrderReview = () => {
  const products = [
    {
      id: 1,
      name: "Luxury Perfume",
      image: "/images/products/product1.png",
      quantity: 1,
      price: 1200,
    },
    {
      id: 2,
      name: "Royal Oud",
      image: "/images/products/product2.png",
      quantity: 2,
      price: 900,
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-2xl font-semibold text-gray-900">
        مراجعة الطلب
      </h2>


      <div className="space-y-5">

        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between border-b border-gray-200 pb-5"
          >

            <div className="flex items-center gap-4">

              <img
                src={product.image}
                alt={product.name}
                className="h-20 w-20 rounded-xl object-cover"
              />

              <div>

                <h3 className="font-medium text-gray-900">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  الكمية: {product.quantity}
                </p>

              </div>

            </div>


            <span className="font-semibold text-purple-700">
              {product.price} جنيه
            </span>

          </div>
        ))}

      </div>

    </section>
  );
};

export default OrderReview;