import { useState } from "react";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";
import CouponForm from "../../components/cart/CouponForm";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Atrak Black",
      category: "Men",
      price: 95,
      quantity: 1,
      image: "/images/products/product1.png",
    },
    {
      id: 2,
      name: "Royal Oud",
      category: "Unisex",
      price: 120,
      quantity: 2,
      image: "/images/products/product2.png",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-10 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-6 lg:col-span-2">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          {/* Cart Summary & Coupon */}
          <div className="space-y-6">
            <CartSummary cartItems={cartItems} />
            <CouponForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;