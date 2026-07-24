import { Star } from "lucide-react";

function ReviewCard({ review }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-lg font-semibold">
          {review.user}
        </h4>

        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={18}
              className={
                index < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
      </div>

      <p className="text-gray-600 leading-7">
        {review.comment}
      </p>
    </div>
  );
}

export default ReviewCard;