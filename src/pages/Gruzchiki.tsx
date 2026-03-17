import { useEffect } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"

const tasks = [
  { icon: "Truck", title: "Переезды квартир", desc: "Полный переезд под ключ: упаковка, вынос, погрузка, разгрузка" },
  { icon: "Home", title: "Переезды офисов", desc: "Аккуратно перевезём офисную мебель и технику без простоев" },
  { icon: "Package", title: "Подъём на этаж", desc: "Поднимем мебель, технику и стройматериалы на любой этаж" },
  { icon: "ArrowDown", title: "Вынос мебели", desc: "Вынесем старую мебель, холодильник, диван — быстро и без царапин" },
  { icon: "Boxes", title: "Погрузка/разгрузка", desc: "Загрузим и разгрузим газель, фуру или контейнер" },
  { icon: "Trash2", title: "Вывоз мусора", desc: "Строительный мусор, старая мебель, хлам после ремонта" },
  { icon: "ShoppingCart", title: "Доставка товаров", desc: "Привезём и занесём покупки из магазина, стройматериалы с базы" },
  { icon: "Wrench", title: "Сборка мебели", desc: "После переезда соберём и расставим мебель на новом месте" },
]

const faq = [
  { q: "Сколько стоят услуги грузчиков?", a: "500 рублей в час с одного грузчика. Минимальный заказ — 4 часа (2 000 ₽ с человека)." },
  { q: "Сколько грузчиков нужно для переезда?", a: "Зависит от объёма. Для квартиры-студии хватит 2 человек, для 3-комнатной квартиры — 3–4. Уточним при звонке." },
  { q: "Вы работаете с транспортом?", a: "Мы предоставляем только грузчиков. Транспорт организуете самостоятельно или уточните у нас — подскажем проверенных перевозчиков." },
  { q: "Нужно ли платить заранее?", a: "Нет. Оплата только после выполнения работы — за фактически отработанные часы каждого грузчика." },
]

export default function Gruzchiki() {
  useEffect(() => {
    document.title = "Грузчики в Иркутске — 500 руб/час | МастерОФФ"

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", name); document.head.appendChild(el) }
      el.setAttribute("content", content)
    }
    const setOg = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`) as HTMLMetaElement
      if (!el) { el = document.createElement("meta"); el.setAttribute("property", prop); document.head.appendChild(el) }
      el.setAttribute("content", content)
    }

    setMeta("description", "Услуги грузчиков в Иркутске от 500 руб/час с человека, минимум 4 часа. Переезды квартир и офисов, погрузка, разгрузка, подъём на этаж. МастерОФФ — звоните: +7 (908) 646-16-87")
    setMeta("keywords", "грузчики Иркутск, переезд квартиры Иркутск, погрузка разгрузка, грузчики цена Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Грузчики в Иркутске — 500 руб/час | МастерОФФ")
    setOg("og:description", "Грузчики от 500 руб/час. Переезды, погрузка, разгрузка по всему Иркутску. Минимальный заказ 4 часа.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Грузчики",
      "description": "Услуги грузчиков в Иркутске от 500 рублей в час",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 2000 ₽",
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-gruzchiki")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-gruzchiki"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-gruzchiki")?.remove() }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4">

        {/* Hero */}
        <section className="card my-8 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Грузчики
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Переезды, погрузка и разгрузка, подъём на этаж. 500 ₽/час с человека, минимум 4 часа. Работаем быстро и аккуратно.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+79086461687" className="btn-primary inline-flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (908) 646-16-87
                </a>
                <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary text-black dark:text-white inline-flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  Написать в Telegram
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
              <img
                src="/purple-circle-wave-static.png"
                alt="Purple Wave"
                className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
              />
            </div>
          </div>
        </section>

        {/* Что делаем */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Что мы
            <span className="block text-[#7A7FEE]">делаем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Профессиональные грузчики для любых задач — от подъёма холодильника до полного переезда под ключ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tasks.map((task) => (
              <div key={task.title} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={task.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{task.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{task.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Стоимость */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Стоимость
            <span className="block text-[#7A7FEE]">услуг</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Оплата почасовая с каждого грузчика — платите только за отработанное время.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">2 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">4 часа · 1 грузчик</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Минимальный заказ. Подходит для подъёма крупных вещей, небольшой разгрузки или доставки.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md border-2 border-[#7A7FEE] flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-6 bg-[#7A7FEE] text-white text-xs font-semibold px-3 py-1 rounded-full">Популярно</div>
              <div className="text-4xl font-bold text-[#7A7FEE]">от 4 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">4 часа · 2 грузчика</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Оптимально для переезда 1–2 комнатной квартиры. Справимся быстро и аккуратно.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">500 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">за час · 1 грузчик</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Крупные переезды, офисы, большие объёмы — рассчитаем стоимость индивидуально.</p>
              <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Send" size={16} /> Обсудить
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на самые популярные вопросы о работе грузчиков МастерОФФ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((item) => (
              <div key={item.q} className="card p-6 shadow-md">
                <h3 className="font-semibold text-black dark:text-white mb-2">{item.q}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Нужны грузчики? <span className="text-[#7A7FEE]">Звоните</span> прямо сейчас
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Выезд в день обращения.
              </p>
              <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Перезвоним в течение 15 минут и согласуем удобное время.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <a href="tel:+79086461687" className="btn-primary inline-flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (908) 646-16-87
                </a>
                <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  Написать в Telegram
                </a>
              </div>
            </div>
            <div className="hidden md:block md:w-2/5 md:absolute md:right-0 md:top-0 md:bottom-0 md:flex md:items-center">
              <img
                src="/purple-circle-wave-static.png"
                alt="Purple Wave"
                className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left"
              />
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <TelegramFloat />
    </main>
  )
}
