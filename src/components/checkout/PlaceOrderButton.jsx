import { useNavigate } from "react-router-dom";

const PlaceOrderButton = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/success");
  };

  return (
    <button
      onClick={handleSubmit}
      className="w-full rounded-xl bg-purple-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-purple-800"
    >
      تأكيد الطلب
    </button>
  );
};

export default PlaceOrderButton;