import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createOrder } from "../../api/orderService";
import { useCart } from "../../context/CartContext";

import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import ShippingForm from "../../components/checkout/ShippingForm";
import BillingAddress from "../../components/checkout/BillingAddress";
import ShippingMethod from "../../components/checkout/ShippingMethod";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderReview from "../../components/checkout/OrderReview";
import OrderNotes from "../../components/checkout/OrderNotes";
import OrderSummary from "../../components/checkout/OrderSummary";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    shipping,
    tax,
    discount,
    total,
    clearCart,
  } = useCart();

  const [form, setForm] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",

    address: "",
    city: "",
    country: "",

    payment_method: "cash",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!form.customer_name.trim()) {
      newErrors.customer_name = "الاسم الكامل مطلوب";
    }

    if (!form.customer_email.trim()) {
      newErrors.customer_email = "البريد الإلكتروني مطلوب";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.customer_email
      )
    ) {
      newErrors.customer_email =
        "البريد الإلكتروني غير صحيح";
    }

    if (!form.customer_phone.trim()) {
      newErrors.customer_phone = "رقم الهاتف مطلوب";
    }

    if (!form.country.trim()) {
      newErrors.country = "الدولة مطلوبة";
    }

    if (!form.city.trim()) {
      newErrors.city = "المدينة مطلوبة";
    }

    if (!form.address.trim()) {
      newErrors.address = "العنوان مطلوب";
    }

    if (cart.length === 0) {
      alert("السلة فارغة.");
      return false;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      await createOrder({
        ...form,

        subtotal,
        shipping,
        tax,
        discount,
        total_price: total,

        items: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      clearCart();

      navigate("/success");
    } catch (error) {
      console.error(error);

      if (error.response?.status === 422) {
        alert("يرجى مراجعة البيانات المدخلة.");
      } else {
        alert("حدث خطأ أثناء إنشاء الطلب.");
      }
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = cart.length > 0;

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <CheckoutHeader />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left */}
          <div className="space-y-6 lg:col-span-2">
            <ShippingForm
              form={form}
              setForm={setForm}
              errors={errors}
            />

            <BillingAddress />

            <ShippingMethod />

            <PaymentMethod
              value={form.payment_method}
              onChange={(value) =>
                setForm((prev) => ({
                  ...prev,
                  payment_method: value,
                }))
              }
            />

            <OrderReview />

            <OrderNotes />
          </div>

          {/* Right */}
          <div className="space-y-6">
            <OrderSummary />

            <button
              onClick={handlePlaceOrder}
              disabled={!isFormValid || loading}
              className={`w-full rounded-xl py-4 text-lg font-semibold transition ${
                !isFormValid || loading
                  ? "cursor-not-allowed bg-gray-300 text-gray-500"
                  : "bg-purple-700 text-white hover:bg-purple-800"
              }`}
            >
              {loading
                ? "جاري إنشاء الطلب..."
                : "تأكيد الطلب"}
            </button>

            <p className="text-center text-sm text-gray-500">
              🔒 جميع عمليات الدفع محمية وآمنة.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;