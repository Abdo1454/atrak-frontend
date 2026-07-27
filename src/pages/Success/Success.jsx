import SuccessHeader from "../../components/success/SuccessHeader";
import OrderDetails from "../../components/success/OrderDetails";

const Success = () => {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">

      <div className="mx-auto max-w-3xl">

        <SuccessHeader />

        <OrderDetails />

        <div className="mt-8 text-center">
          <a
            href="/products"
            className="inline-block rounded-xl bg-purple-700 px-8 py-3 font-semibold text-white transition hover:bg-purple-800"
          >
            العودة للتسوق
          </a>
        </div>

      </div>

    </main>
  );
};

export default Success;