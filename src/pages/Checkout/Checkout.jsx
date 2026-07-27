import BillingAddress from "../../components/checkout/BillingAddress";
import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import ShippingForm from "../../components/checkout/ShippingForm";
import ShippingMethod from "../../components/checkout/ShippingMethod";
import PaymentMethod from "../../components/checkout/PaymentMethod"
import OrderReview from "../../components/checkout/OrderReview";
import OrderSummary from "../../components/checkout/OrderSummary";
import PlaceOrderButton from "../../components/checkout/PlaceOrderButton";
import OrderNotes from "../../components/checkout/OrderNotes";


const Checkout = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        <CheckoutHeader />
        <ShippingForm />
        <BillingAddress />
        <ShippingMethod />
        <PaymentMethod />
        <OrderReview />
        <OrderSummary />
        <div className="mt-6">
  <PlaceOrderButton />
<OrderNotes />
</div>
      </div>
    </main>
  );
};

export default Checkout;