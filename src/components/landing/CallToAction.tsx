import Icon from "@/components/ui/icon"

export default function CallToAction() {
  return (
    <section id="contact" className="card my-20 relative shadow-md" style={{ overflow: "visible" }}>
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Нужен мастер? <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">Звоните</span> прямо сейчас
          </h2>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Работаем по всему Иркутску. Выезд мастера на оценку — бесплатно.
          </p>
          <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            Оставьте заявку — перезвоним в течение 15 минут и согласуем удобное время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a
              href="tel:+79086461687"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Icon name="Phone" size={16} />
              +7 (908) 646-16-87
            </a>
            <a
              href="https://t.me/masteroff38"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:right-0 md:bottom-0" style={{ width: "42%", top: "-100px" }}>
          <img
            src="https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/a5921613-2c73-4d29-86cc-0151aacd320d.png"
            alt="Менеджер"
            className="w-full h-full object-contain object-top"
          />
        </div>
      </div>
    </section>
  )
}