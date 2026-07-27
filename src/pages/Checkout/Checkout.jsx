import { useNavigate } from "react-router-dom";

import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import ShippingForm from "../../components/checkout/ShippingForm";
import BillingAddress from "../../components/checkout/BillingAddress";
import ShippingMethod from "../../components/checkout/ShippingMethod";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderReview from "../../components/checkout/OrderReview";
import OrderNotes from "../../components/checkout/OrderNotes";
import OrderSummary from "../../components/checkout/OrderSummary";

const Checkout = () => {
  const navigate = useNavigate();

  // مؤقتًا حتى يتم ربط الفورم الحقيقي
  const isFormValid = true;

  const handlePlaceOrder = () => {
    // سيتم إرسال الطلب إلى الـ API لاحقًا
    navigate("/success");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <CheckoutHeader />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Side */}
          <div className="space-y-6 lg:col-span-2">
            <ShippingForm />
            <BillingAddress />
            <ShippingMethod />
            <PaymentMethod />
            <OrderReview />
            <OrderNotes />
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <OrderSummary />

            <button
              onClick={handlePlaceOrder}
              disabled={!isFormValid}
              className={`w-full rounded-xl py-4 text-lg font-semibold transition ${
                isFormValid
                  ? "bg-purple-700 text-white hover:bg-purple-800"
                  : "cursor-not-allowed bg-gray-300 text-gray-500"
              }`}
            >
              تأكيد الطلب
            </button>

            <p className="text-center text-sm text-gray-500">
              🔒 جميع عمليات الدفع محمية وآمنة.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;