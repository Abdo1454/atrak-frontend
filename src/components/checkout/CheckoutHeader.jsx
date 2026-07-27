const CheckoutHeader = () => {
  return (
    <section className="mb-8">
      <h1 className="mb-3 text-3xl font-bold text-gray-900">
        إتمام الطلب
      </h1>

      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>الرئيسية</span>

        <span>/</span>

        <span>السلة</span>

        <span>/</span>

        <span className="font-medium text-purple-700">
          إتمام الطلب
        </span>
      </div>
    </section>
  );
};

export default CheckoutHeader;