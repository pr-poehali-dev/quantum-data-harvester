interface Review {
  name: string
  date: string
  rating: number
  text: string
}

interface ServiceReviewsProps {
  reviews: Review[]
  rating?: string
}

function StarRating({ rating, size = 18 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={star <= rating ? "#f59e0b" : "none"}
          stroke={star <= rating ? "#f59e0b" : "#d1d5db"}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function ServiceReviews({ reviews, rating = "4.9" }: ServiceReviewsProps) {
  return (
    <section className="my-20">
      <div className="mb-10">
        <h2 className="text-black dark:text-white mb-4 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Отзывы
          <span className="block text-[#7A7FEE]">клиентов</span>
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-black dark:text-white">{rating}</span>
          <div className="flex flex-col gap-1">
            <StarRating rating={5} size={20} />
            <span className="text-sm text-gray-500 dark:text-gray-400">{reviews.length} отзыва</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <div key={i} className="card p-5 flex flex-col gap-3 shadow-md">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-black dark:text-white">{review.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
