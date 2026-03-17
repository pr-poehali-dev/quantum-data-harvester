import { useEffect } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"

const tasks = [
  { icon: "Drill", title: "Повесить карниз, полку, TV", desc: "Надёжно закрепим на любую стену: бетон, гипсокартон, кирпич" },
  { icon: "Wrench", title: "Сборка мебели", desc: "Шкафы, кровати, кухни, стеллажи из любого магазина — IKEA, Леруа и др." },
  { icon: "DoorOpen", title: "Замки и двери", desc: "Замена и установка замков, регулировка дверей, установка петель" },
  { icon: "Hammer", title: "Мелкий ремонт", desc: "Зашпаклевать дыру, заменить плинтус, починить что сломалось" },
  { icon: "Lightbulb", title: "Электрика мелкая", desc: "Заменить розетку, выключатель, патрон, повесить люстру или бра" },
  { icon: "Droplets", title: "Сантехника мелкая", desc: "Заменить смеситель, прокладки, устранить течь, подтянуть соединения" },
  { icon: "Move", title: "Перестановка мебели", desc: "Передвинем, поднимем, занесём на этаж — быстро и аккуратно" },
  { icon: "Package", title: "Сборка и распаковка", desc: "Распакуем доставку, соберём, установим, уберём коробки" },
  { icon: "Paintbrush", title: "Покраска и шпаклёвка", desc: "Небольшие покрасочные работы, подкрашивание, шпаклёвка царапин" },
  { icon: "Scissors", title: "Установка карнизов и штор", desc: "Повесим шторы, жалюзи, рулонные шторы, багет любой сложности" },
  { icon: "Tv", title: "Монтаж техники", desc: "Подключим технику, установим кронштейн, протянем кабель" },
  { icon: "TreePine", title: "Работы на участке", desc: "Мелкие задачи во дворе, на даче, в саду" },
]

const steps = [
  { icon: "Phone", title: "Позвоните или напишите", desc: "Опишите задачу — уточним объём и примерное время" },
  { icon: "Clock", title: "Приедем в удобное время", desc: "Мастер прибывает точно в согласованный час с инструментом" },
  { icon: "Hammer", title: "Выполним всё чисто", desc: "Делаем быстро, аккуратно, убираем за собой мусор" },
  { icon: "Wallet", title: "Оплата по факту", desc: "Платите только за отработанные часы — без предоплаты" },
]

const faq = [
  { q: "Сколько стоит мастер на час в Иркутске?", a: "500 рублей в час. Минимальный заказ — 4 часа (2 000 ₽). Платите только за фактически отработанное время." },
  { q: "Мастер приедет сегодня?", a: "В большинстве случаев — да. Позвоните или напишите в Telegram, и мы согласуем удобное время на сегодня или любой другой день." },
  { q: "Нужно ли готовить материалы заранее?", a: "Мастер приедет со своим инструментом. Расходные материалы (дюбели, шурупы и т.д.) обычно есть с собой. Специфические материалы уточните при заказе." },
  { q: "Какие задачи можно поручить мастеру?", a: "Любые бытовые задачи: сборка мебели, навеска полок и карнизов, мелкий ремонт, замена розеток и смесителей, установка дверей и замков, перестановка мебели и многое другое." },
  { q: "Работаете в выходные и праздники?", a: "Да, работаем ежедневно, включая выходные и праздники. Стоимость в выходные — стандартная." },
  { q: "Нужно ли платить, если задача заняла меньше 4 часов?", a: "Минимальный заказ — 4 часа (2 000 ₽). Если задача выполнена быстрее — мастер возьмётся за другие задачи до конца оплаченного времени." },
]

export default function MasterNaChas() {
  useEffect(() => {
    document.title = "Мастер на час в Иркутске — 500 руб/час | МастерОФФ"

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

    setMeta("description", "Мастер на час в Иркутске — 500 руб/час, минимум 4 часа (2 000 ₽). Сборка мебели, навеска полок, мелкий ремонт, замена розеток. Приедем сегодня. Звоните: +7 (908) 646-16-87")
    setMeta("keywords", "мастер на час Иркутск, мастер на час цена, муж на час Иркутск, сборка мебели, навеска полок Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Мастер на час в Иркутске — 500 руб/час | МастерОФФ")
    setOg("og:description", "Мастер на час в Иркутске от 500 руб/час. Любые бытовые задачи. Приедем в удобное время. Минимальный заказ 4 часа.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Мастер на час в Иркутске",
      "description": "Услуги мастера на час в Иркутске от 500 рублей в час",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 2 000 ₽",
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-master")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-master"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-master")?.remove() }
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
                Мастер на час
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Опытный мастер со своим инструментом решит любые бытовые задачи. Приедем в удобное время — сегодня!
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Clock" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">500 ₽ / час</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Timer" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Минимум 4 часа</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Wrench" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Свой инструмент</span>
                </div>
              </div>
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
              <img src="/purple-circle-wave-static.png" alt="Purple Wave" className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left" />
            </div>
          </div>
        </section>

        {/* Что делаем */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Что умеет
            <span className="block text-[#7A7FEE]">наш мастер</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Мастер на час берётся за любые бытовые задачи — от сборки табуретки до установки дверей.
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
            Простая почасовая оплата — платите только за отработанное время без скрытых доплат.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">2 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">4 часа</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Минимальный заказ. Успеем собрать мебель, повесить полки, сделать мелкий ремонт.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md border-2 border-[#7A7FEE] flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-6 bg-[#7A7FEE] text-white text-xs font-semibold px-3 py-1 rounded-full">Популярно</div>
              <div className="text-4xl font-bold text-[#7A7FEE]">4 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">8 часов</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Полный рабочий день. Выполним список задач накопившихся по дому за один раз.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">500 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">за час</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Много задач или крупный объём — обсудим и рассчитаем индивидуально.</p>
              <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Send" size={16} /> Обсудить
              </a>
            </div>
          </div>
        </section>

        {/* Как работаем */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Как мы
            <span className="block text-[#7A7FEE]">работаем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Всё просто — от звонка до готового результата за несколько часов.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="card p-6 shadow-md flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-[#7A7FEE] w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                    <Icon name={step.icon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-[#7A7FEE]/20">0{i + 1}</span>
                </div>
                <h3 className="font-semibold text-black dark:text-white">{step.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на популярные вопросы о сервисе «Мастер на час» в Иркутске.
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
                Нужен мастер <span className="text-[#7A7FEE]">сегодня?</span>
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Мастер приедет в удобное для вас время с инструментом.
              </p>
              <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Перезвоним в течение 15 минут и согласуем время визита.
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
              <img src="/purple-circle-wave-static.png" alt="Purple Wave" className="w-full h-auto md:h-full md:w-auto md:object-cover md:object-left" />
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <TelegramFloat />
    </main>
  )
}
