import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "Как вызвать мастера?",
    answer:
      "Оставьте заявку на сайте или позвоните нам. Менеджер свяжется с вами в течение 15 минут, уточнит задачу и согласует удобное время. Мастер приедет в назначенный срок.",
  },
  {
    id: 2,
    question: "Работаете ли вы в выходные и праздники?",
    answer:
      "Да, мы работаем 7 дней в неделю, включая праздничные дни. Стоимость работ в выходные не отличается от будних дней.",
  },
  {
    id: 3,
    question: "Какая гарантия на выполненные работы?",
    answer:
      "На все виды работ предоставляем гарантию от 6 месяцев до 2 лет в зависимости от вида работ. Если что-то пойдёт не так — устраним за свой счёт.",
  },
  {
    id: 4,
    question: "Сколько стоят услуги?",
    answer:
      "Стоимость зависит от вида работ и объёма. Разнорабочий от 1 500 руб/час, грузчик от 1 200 руб/час. Отделочные работы рассчитываются по площади. Точную стоимость назовём после осмотра объекта — это бесплатно.",
  },
  {
    id: 5,
    question: "Привозите ли вы материалы?",
    answer:
      "Да, по желанию мастер закупает все необходимые материалы. Мы работаем с проверенными поставщиками и не делаем наценку на материалы — вы платите по чекам.",
  },
  {
    id: 6,
    question: "Как происходит оплата?",
    answer:
      "Оплата после выполнения работ — наличными или переводом на карту. Для крупных объектов (отделка квартиры, строительство бани) предусмотрена поэтапная оплата.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Частые
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">вопросы</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Отвечаем на самые частые вопросы о работе МАСТЕРОФФ. Не нашли ответ — звоните, поможем!
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}