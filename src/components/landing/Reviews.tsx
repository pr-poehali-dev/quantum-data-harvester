import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "Алексей М.",
    date: "15 февраля 2025",
    rating: 5,
    text: "Заказывал ремонт ванной комнаты. Мастера приехали вовремя, всё сделали аккуратно и в срок. Очень доволен результатом — плитка лежит идеально, никаких щелей.",
    service: "Ремонт квартир",
  },
  {
    name: "Марина С.",
    date: "3 марта 2025",
    rating: 5,
    text: "Собирали кухонный гарнитур. Мастер Дмитрий — просто золотые руки! Всё собрал быстро, чисто убрал за собой. Обязательно обращусь снова.",
    service: "Сборка мебели",
  },
  {
    name: "Игорь В.",
    date: "20 января 2025",
    rating: 5,
    text: "Помогали с переездом — грузчики отличные, аккуратные. Диван на 5-й этаж без лифта занесли без единой царапины. Цена адекватная.",
    service: "Грузчики",
  },
  {
    name: "Ольга Д.",
    date: "10 марта 2025",
    rating: 5,
    text: "Вызывала электрика, нужно было разобраться с проводкой после ремонта. Всё объяснил, сделал быстро и безопасно. Рекомендую!",
    service: "Электрика",
  },
  {
    name: "Сергей Т.",
    date: "1 февраля 2025",
    rating: 4,
    text: "Разнорабочие помогли с демонтажом перегородки. Работали слаженно, мусор вынесли сами. Единственный минус — приехали чуть позже условленного времени.",
    service: "Разнорабочие",
  },
  {
    name: "Наталья К.",
    date: "25 марта 2025",
    rating: 5,
    text: "Мастер на час — починил дверной замок и повесил карнизы. Быстро, качественно, без лишних вопросов. Очень удобный сервис!",
    service: "Мастер на час",
  },
]

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

export default function Reviews() {
  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="section-title mb-3">Отзывы клиентов</h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <span className="text-5xl font-bold text-foreground">4.9</span>
          <div className="flex flex-col items-start gap-1">
            <StarRating rating={5} size={22} />
            <span className="text-muted-foreground text-sm">{reviews.length} отзывов</span>
          </div>
        </div>
        <p className="section-subtitle">Средняя оценка наших мастеров</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review, i) => (
          <div key={i} className="card p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
            <span className="text-xs accent-text font-medium">{review.service}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
