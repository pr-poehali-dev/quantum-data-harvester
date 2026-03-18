import { useEffect } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"
import ServiceReviews from "@/components/landing/ServiceReviews"

const reviews = [
  { name: "Сергей Т.", date: "1 февраля 2025", rating: 5, text: "Вызывал разнорабочих для демонтажа перегородки. Работали слаженно, мусор вынесли сами. Всё чисто и в срок." },
  { name: "Анна Б.", date: "14 марта 2025", rating: 5, text: "Помогли убраться на участке — покосили траву, вывезли хлам. Приехали вовремя, сделали быстро. Очень довольна!" },
  { name: "Павел Р.", date: "22 января 2025", rating: 5, text: "Заказывал погрузку мебели при переезде. Ребята аккуратные, диван и шкаф не поцарапали. Цена адекватная." },
]

const tasks = [
  { icon: "PackageOpen", title: "Погрузка и разгрузка", desc: "Мебель, техника, стройматериалы — аккуратно и быстро" },
  { icon: "Trash2", title: "Вывоз мусора", desc: "Строительный и бытовой мусор, старая мебель" },
  { icon: "Shovel", title: "Земляные работы", desc: "Копка ям, траншей, выравнивание участка" },
  { icon: "Hammer", title: "Демонтаж", desc: "Снос перегородок, демонтаж полов, плитки, потолков" },
  { icon: "Paintbrush", title: "Подготовка к ремонту", desc: "Уборка, зачистка стен, подготовка поверхностей" },
  { icon: "TreePine", title: "Работы на участке", desc: "Распил дров, уборка территории, покос травы" },
  { icon: "Move", title: "Перестановка мебели", desc: "Сборка, разборка и перемещение мебели внутри помещения" },
  { icon: "Wrench", title: "Разные поручения", desc: "Любые физические работы по вашему заданию" },
]

const faq = [
  { q: "Сколько стоят услуги разнорабочих?", a: "500 рублей в час. Минимальный заказ — 4 часа (2 000 ₽)." },
  { q: "Как быстро приедет мастер?", a: "В большинстве случаев — в день обращения. Позвоните или напишите в Telegram, и мы согласуем удобное время." },
  { q: "Какие задачи вы выполняете?", a: "Любые физические работы: погрузка, вывоз мусора, сборка мебели, демонтаж, земляные работы, уборка территории и многое другое." },
  { q: "Нужно ли платить заранее?", a: "Нет. Оплата только после выполнения работы — за фактически отработанные часы." },
]

export default function Raznorabochie() {
  useEffect(() => {
    document.title = "Разнорабочие в Иркутске — 500 руб/час | МастерОФФ"

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

    setMeta("description", "Услуги разнорабочих в Иркутске от 500 руб/час, минимум 4 часа (от 2000 ₽). Погрузка, демонтаж, вывоз мусора, сборка мебели. МастерОФФ — звоните: +7 (908) 646-16-87")
    setMeta("keywords", "разнорабочие Иркутск, разнорабочий цена, помощник по хозяйству Иркутск, вывоз мусора, сборка мебели Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Разнорабочие в Иркутске — 500 руб/час | МастерОФФ")
    setOg("og:description", "Услуги разнорабочих от 500 руб/час. Минимальный заказ 4 часа. Приедем в удобное время по всему Иркутску.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Разнорабочие",
      "description": "Услуги разнорабочих в Иркутске от 500 рублей в час",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 2000 ₽",
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-raznorabochie")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-raznorabochie"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-raznorabochie")?.remove() }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4">

        {/* Hero — как на главной */}
        <section className="card my-8 relative shadow-md" style={{ minHeight: "380px", overflow: "visible" }}>
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start min-h-[380px]">
            <div className="w-full md:w-3/5 z-10">
              <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Разнорабочие
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Выполним любую физическую работу быстро и без лишних вопросов. 500 ₽/час, минимум 4 часа. Приедем в удобное время.
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
            <div className="hidden md:block md:absolute md:right-0 md:bottom-0" style={{ width: "45%" }}>
              <img
                src="https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/332bcdb1-acbc-4888-a1d2-0325ff88efb1.png"
                alt="Разнорабочие"
                className="w-full object-contain object-bottom"
                style={{ height: "480px", marginBottom: "-1px" }}
              />
            </div>
          </div>
        </section>

        {/* Что делаем — как блок услуг на главной */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Что мы
            <span className="block text-[#7A7FEE]">делаем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Берёмся за любые задачи, где нужны руки и физическая сила. Работаем быстро, аккуратно и с уважением к вашему имуществу.
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
            Простая почасовая оплата — платите только за отработанное время.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">2 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">4 часа</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Минимальный заказ. Подойдёт для сборки мебели, мелкого ремонта, небольшой перевозки.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md border-2 border-[#7A7FEE] flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-6 bg-[#7A7FEE] text-white text-xs font-semibold px-3 py-1 rounded-full">Популярно</div>
              <div className="text-4xl font-bold text-[#7A7FEE]">4 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">8 часов</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Полный рабочий день. Успеем сделать переезд, разобрать и собрать мебель, вывезти мусор.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">500 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">за час</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Крупные объекты или постоянное сотрудничество — обсудим индивидуальные условия.</p>
              <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Send" size={16} /> Обсудить
              </a>
            </div>
          </div>
        </section>

        <ServiceReviews reviews={reviews} />

        {/* FAQ — как на главной */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на самые популярные вопросы о работе разнорабочих МастерОФФ.
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

        {/* CTA — как на главной */}
        <section id="contact" className="card my-20 relative overflow-hidden shadow-md">
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                Нужен разнорабочий? <span className="text-[#7A7FEE]">Звоните</span> прямо сейчас
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Выезд мастера — в день обращения.
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