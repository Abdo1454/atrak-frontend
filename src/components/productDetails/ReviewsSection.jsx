import ReviewCard from "./ReviewCard";

function ReviewsSection({ reviews = [] }) {
  if (reviews.length === 0) {
    return (
      <div className="rounded-xl bg-gray-100 p-6 text-center">
        <p className="text-gray-500">لا توجد تقييمات حتى الآن.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
}

export default ReviewsSection;