import CheckoutHeader from "../../components/checkout/CheckoutHeader";
import ShippingForm from "../../components/checkout/ShippingForm";

const Checkout = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">

        <CheckoutHeader />
        <ShippingForm />
      </div>
    </main>
  );
};

export default Checkout;