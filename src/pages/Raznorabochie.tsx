import { useEffect } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"

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

const steps = [
  { num: "01", title: "Позвоните или напишите", desc: "Опишите задачу — уточним объём и время" },
  { num: "02", title: "Приедем в удобное время", desc: "Мастер прибывает в согласованный час" },
  { num: "03", title: "Выполним работу", desc: "Быстро, аккуратно, без лишних вопросов" },
  { num: "04", title: "Оплата по факту", desc: "Платите только за отработанные часы" },
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

    // Schema.org LocalBusiness
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

    return () => {
      document.getElementById("schema-raznorabochie")?.remove()
    }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />

      {/* Hero */}
      <section className="container pt-12 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#7A7FEE]/10 text-[#7A7FEE] text-sm font-medium px-3 py-1.5 rounded-full mb-6">
            <Icon name="Users" size={14} />
            Иркутск · выезд от 4 часов
          </div>
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
            Разнорабочие<br />
            <span className="text-[#7A7FEE]">в Иркутске</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-xl">
            Выполним любую физическую работу быстро и без лишних вопросов. Приедем в удобное время.
          </p>

          {/* Цена */}
          <div className="card p-6 inline-flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-8">
            <div>
              <div className="text-4xl font-bold text-[#7A7FEE]">500 ₽</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">за час работы</div>
            </div>
            <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 hidden sm:block" />
            <div>
              <div className="text-lg font-semibold text-black dark:text-white">от 2 000 ₽</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">минимальный заказ (4 часа)</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
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
      </section>

      {/* Виды работ */}
      <section className="container py-16 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl font-medium mb-4">
          Что мы
          <span className="block text-[#7A7FEE]">делаем</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl">
          Беремся за любые задачи, где нужны руки и физическая сила.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <div key={task.title} className="card p-5 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#7A7FEE]/10 flex items-center justify-center mb-4">
                <Icon name={task.icon} size={20} className="text-[#7A7FEE]" />
              </div>
              <h3 className="font-semibold text-black dark:text-white mb-1">{task.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{task.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Как работаем */}
      <section className="container py-16 border-t border-gray-100 dark:border-gray-800">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl font-medium mb-10">
          Как мы
          <span className="block text-[#7A7FEE]">работаем</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col">
              <div className="text-5xl font-bold text-[#7A7FEE]/20 mb-3">{step.num}</div>
              <h3 className="font-semibold text-black dark:text-white mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <div className="card p-8 md:p-12 text-center">
          <h2 className="text-black dark:text-white text-3xl md:text-4xl font-medium mb-4">
            Нужны разнорабочие <span className="text-[#7A7FEE]">сегодня?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Позвоните или напишите — согласуем время и приедем в удобный для вас час.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2">
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
            <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <TelegramFloat />
    </main>
  )
}