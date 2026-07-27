const SuccessHeader = () => {
  return (
    <section className="text-center">

      {/* Success Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <span className="text-4xl font-bold text-green-600">
          ✓
        </span>
      </div>


      {/* Title */}
      <h1 className="mb-3 text-3xl font-bold text-gray-900">
        تم تأكيد طلبك بنجاح
      </h1>


      {/* Description */}
      <p className="text-gray-500">
        شكرًا لك، تم استلام طلبك وسيتم تجهيزه للشحن قريبًا.
      </p>

    </section>
  );
};

export default SuccessHeader;