import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import ShippingForm from "../../components/checkout/ShippingForm";
import BillingAddress from "../../components/checkout/BillingAddress";
import ShippingMethod from "../../components/checkout/ShippingMethod";
import PaymentMethod from "../../components/checkout/PaymentMethod";
import OrderReview from "../../components/checkout/OrderReview";
import OrderNotes from "../../components/checkout/OrderNotes";
import OrderSummary from "../../components/checkout/OrderSummary";
import PlaceOrderButton from "../../components/checkout/PlaceOrderButton";

const Checkout = () => {
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

            <PlaceOrderButton />

          </div>


        </div>

      </div>

    </main>
  );
};

export default Checkout;