import { useState } from "react";
import { useCart } from "../../context/CartContext";

import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import EmptyCart from "../../components/cart/EmptyCart";
import CouponForm from "../../components/cart/CouponForm";
import GiftWrap from "../../components/cart/GiftWrap";
import RecommendedProducts from "../../components/cart/RecommendedProducts";

function Cart() {
  const {
    cart,
    subtotal,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const [giftWrap, setGiftWrap] = useState(false);

  const increaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((item) => item.id === id);

    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <section dir="rtl" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-10 text-right text-4xl font-bold">
          سلة التسوق
        </h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* المنتجات */}
          <div className="space-y-6 lg:col-span-2">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeFromCart}
              />
            ))}
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <CartSummary
              cartItems={cart}
              subtotal={subtotal}
              giftWrap={giftWrap}
            />

            <CouponForm />

            <GiftWrap
              enabled={giftWrap}
              onToggle={() => setGiftWrap(!giftWrap)}
            />
          </div>
        </div>

        {/* المنتجات المقترحة */}
        <div className="mt-20">
          <RecommendedProducts />
        </div>
      </div>
    </section>
  );
}

export default Cart;