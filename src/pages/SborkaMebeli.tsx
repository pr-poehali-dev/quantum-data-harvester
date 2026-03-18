import { useEffect, useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"
import ServiceReviews from "@/components/landing/ServiceReviews"

const reviews = [
  { name: "Марина С.", date: "3 марта 2025", rating: 5, text: "Собирали кухонный гарнитур. Мастер Дмитрий — просто золотые руки! Всё собрал быстро, чисто убрал за собой. Обязательно обращусь снова." },
  { name: "Татьяна О.", date: "17 января 2025", rating: 5, text: "Собрали шкаф-купе из Hoff. Приехали вовремя, за 3 часа всё готово. Качество отличное, всё ровно, двери ходят плавно." },
  { name: "Роман Ш.", date: "28 февраля 2025", rating: 5, text: "Заказывал сборку детской комнаты — кровать, стол, шкаф. Мастер аккуратный, ребёнок доволен. Рекомендую МастерОФФ!" },
]

const services = [
  { icon: "DoorOpen", title: "Шкафы-купе", desc: "Сборка шкафов-купе любой сложности — корпус, направляющие, двери, зеркала" },
  { icon: "Sofa", title: "Кухни", desc: "Соберём кухонный гарнитур под ключ: навесные и напольные шкафы, столешница" },
  { icon: "BedDouble", title: "Кровати и диваны", desc: "Сборка кроватей с подъёмным механизмом, двуспальных, детских, диван-кроватей" },
  { icon: "BookOpen", title: "Стеллажи и полки", desc: "Сборка стеллажей, книжных шкафов, полок — IKEA, Leroy Merlin и другие" },
  { icon: "Briefcase", title: "Офисная мебель", desc: "Столы, тумбы, шкафы для документов, стеллажи для офиса и кабинета" },
  { icon: "Baby", title: "Детская мебель", desc: "Кровати-чердаки, двухъярусные кровати, игровые уголки, парты" },
  { icon: "Tv", title: "Тумбы и тв-стойки", desc: "Тумбы под телевизор, стойки, комоды, тумбы в прихожую" },
  { icon: "Hammer", title: "Любая другая", desc: "Любая мебель из любого магазина — привезите инструкцию, всё соберём" },
]

const brands = [
  { icon: "Store", text: "IKEA / ИКЕА" },
  { icon: "Store", text: "Hoff" },
  { icon: "Store", text: "Leroy Merlin" },
  { icon: "Store", text: "SV Мебель" },
  { icon: "Store", text: "Lazurit" },
  { icon: "Store", text: "Много мебели" },
  { icon: "Store", text: "Столплит" },
  { icon: "Store", text: "Любой магазин" },
]

const steps = [
  { icon: "Phone", title: "Позвоните или напишите", desc: "Уточним состав мебели, количество позиций и назначим удобное время" },
  { icon: "Truck", title: "Мастер приедет вовремя", desc: "Прибудем точно в согласованное время со всем инструментом" },
  { icon: "Wrench", title: "Соберём быстро и аккуратно", desc: "Без лишних вопросов и беспорядка — всё упаковочное уберём сами" },
  { icon: "Wallet", title: "Оплата по факту", desc: "Платите только после того, как убедились в качестве работы" },
]

const faq = [
  { q: "Сколько стоит сборка мебели в Иркутске?", a: "Стоимость зависит от типа и сложности мебели. Шкаф-купе — от 1 500 ₽, кухня — от 2 500 ₽, кровать — от 800 ₽. Точную цену назовём после описания задачи." },
  { q: "Нужно ли мне покупать инструменты?", a: "Нет, мастер приедет со всем необходимым инструментом. Вам ничего дополнительно покупать не нужно." },
  { q: "Как быстро приедет мастер?", a: "В большинстве случаев в день обращения или на следующий день. Позвоните или напишите — согласуем удобное время." },
  { q: "Собираете мебель из ИКЕА?", a: "Да, собираем мебель из любых магазинов — IKEA, Hoff, Leroy Merlin, СВ Мебель и других. Нужна только инструкция по сборке." },
  { q: "Что если деталь окажется бракованной?", a: "Мастер сообщит об этом сразу. Замена бракованных деталей — ответственность магазина, поможем разобраться." },
  { q: "Убираете мусор после сборки?", a: "Да, складываем картонные упаковки и уносим их либо оставляем аккуратно сложенными у мусоропровода." },
]

export default function SborkaMebeli() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    document.title = "Сборка мебели в Иркутске — недорого | МастерОФФ"

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

    setMeta("description", "Сборка мебели в Иркутске — шкафы-купе, кухни, кровати, стеллажи. Приедем в день обращения, соберём быстро и аккуратно. МастерОФФ. Звоните: +7 (908) 646-16-87")
    setMeta("keywords", "сборка мебели Иркутск, сборщик мебели Иркутск, собрать шкаф купе Иркутск, сборка кухни Иркутск, IKEA сборка Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Сборка мебели в Иркутске | МастерОФФ")
    setOg("og:description", "Соберём любую мебель в Иркутске — шкафы, кухни, кровати, стеллажи. Быстро, аккуратно, недорого.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Сборка мебели в Иркутске",
      "description": "Сборка мебели в Иркутске — шкафы-купе, кухни, кровати, стеллажи",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 800 ₽",
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-sborka")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-sborka"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-sborka")?.remove() }
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
                Сборка мебели
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Соберём любую мебель — шкафы, кухни, кровати, стеллажи. Приедем в день обращения, сделаем быстро и аккуратно.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Wrench" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Инструмент с собой</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Clock" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Приедем в день обращения</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="ShieldCheck" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Гарантия на работу</span>
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

        {/* Что собираем */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Что
            <span className="block text-[#7A7FEE]">собираем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Работаем с мебелью любой сложности — от простой тумбы до многосекционного шкафа-купе.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={s.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{s.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Магазины */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Работаем с мебелью
            <span className="block text-[#7A7FEE]">из любых магазинов</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Привезли мебель из магазина? Просто позвоните — приедем и соберём.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((b) => (
              <div key={b.text} className="card p-5 flex items-center justify-center shadow-sm">
                <span className="text-base font-semibold text-black dark:text-white">{b.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Как работаем */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Как мы
            <span className="block text-[#7A7FEE]">работаем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Просто и без лишних хлопот — от звонка до готовой мебели.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="card p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#7A7FEE] w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Icon name={step.icon} className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-[#7A7FEE]/20">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Прайс */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Примерные
            <span className="block text-[#7A7FEE]">цены</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Точная стоимость зависит от сложности и количества позиций. Звоните — рассчитаем бесплатно.
          </p>
          <div className="card shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <th className="text-left px-5 py-3 text-gray-500 dark:text-gray-400 font-medium">Вид мебели</th>
                  <th className="text-right px-5 py-3 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">Стоимость</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Тумба, комод", price: "от 600 ₽" },
                  { name: "Кровать односпальная", price: "от 800 ₽" },
                  { name: "Кровать двуспальная", price: "от 1 200 ₽" },
                  { name: "Кровать с подъёмным механизмом", price: "от 1 800 ₽" },
                  { name: "Шкаф распашной", price: "от 1 200 ₽" },
                  { name: "Шкаф-купе (2-дверный)", price: "от 1 500 ₽" },
                  { name: "Шкаф-купе (3-дверный)", price: "от 2 000 ₽" },
                  { name: "Кухонный гарнитур", price: "от 2 500 ₽" },
                  { name: "Стеллаж / полки", price: "от 700 ₽" },
                  { name: "Детская кровать-чердак", price: "от 2 000 ₽" },
                  { name: "Офисный стол / тумба", price: "от 800 ₽" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                    <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{row.name}</td>
                    <td className="px-5 py-3 text-right font-semibold text-[#7A7FEE] whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <a href="tel:+79086461687" className="btn-primary inline-flex items-center gap-2">
              <Icon name="Phone" size={16} />
              Узнать точную стоимость
            </a>
          </div>
        </section>

        <ServiceReviews reviews={reviews} />

        {/* FAQ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на популярные вопросы о сборке мебели в Иркутске.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faq.map((item, i) => (
              <div key={i} className="card shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-black dark:text-white pr-4">{item.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={18} className="text-gray-400 shrink-0" />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Нужна сборка мебели? <span className="text-[#7A7FEE]">Звоните</span> прямо сейчас
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Консультация — бесплатно.
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