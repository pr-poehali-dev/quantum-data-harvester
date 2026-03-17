import { useEffect } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"

const tasks = [
  { icon: "Drill", title: "Повесить на стену", desc: "Телевизор, картину, карниз, полку, зеркало — надёжно на любую стену" },
  { icon: "Wrench", title: "Сборка мебели", desc: "Шкафы, кровати, кухни, стеллажи — любая мебель из магазина" },
  { icon: "DoorOpen", title: "Ремонт дверей", desc: "Отрегулируем петли, замки, ручки. Устраним скрип и перекос" },
  { icon: "Droplets", title: "Мелкая сантехника", desc: "Заменим смеситель, прокладки, душевую лейку, устраним подтёк" },
  { icon: "Plug", title: "Мелкая электрика", desc: "Замена розетки, выключателя, лампочки, починим бытовую технику" },
  { icon: "PaintBucket", title: "Мелкий ремонт", desc: "Зашпаклюем трещину, подклеим обои, покрасим батарею или трубу" },
  { icon: "Move", title: "Перестановка", desc: "Передвинем мебель, переставим технику, организуем пространство" },
  { icon: "Hammer", title: "Всё остальное", desc: "Любое мелкое задание по дому — просто позвоните и опишите" },
]

const examples = [
  { icon: "Tv", text: "Повесить телевизор на стену" },
  { icon: "Sofa", text: "Собрать кухню из ИКЕА" },
  { icon: "Shower", text: "Заменить смеситель в ванной" },
  { icon: "Lamp", text: "Установить люстру" },
  { icon: "Frame", text: "Повесить 10 картин" },
  { icon: "Blinds", text: "Установить карниз и шторы" },
  { icon: "Lock", text: "Поменять замок на двери" },
  { icon: "AirVent", text: "Установить кондиционер" },
  { icon: "Box", text: "Собрать шкаф-купе" },
  { icon: "Plug", text: "Заменить розетки" },
  { icon: "BookOpen", text: "Повесить полки" },
  { icon: "MoreHorizontal", text: "И многое другое..." },
]

const steps = [
  { icon: "Phone", title: "Позвоните или напишите", desc: "Опишите задачу — уточним объём и назначим удобное время" },
  { icon: "Clock", title: "Мастер приедет вовремя", desc: "Прибываем точно в согласованное время с инструментом" },
  { icon: "CheckCircle", title: "Выполним всё быстро", desc: "Мастер решит задачу аккуратно и без лишних вопросов" },
  { icon: "Wallet", title: "Оплата по факту", desc: "Платите только за отработанные часы после завершения работы" },
]

const faq = [
  { q: "Сколько стоит мастер на час в Иркутске?", a: "500 рублей в час. Минимальный заказ — 4 часа (2 000 ₽). Оплата только за фактически отработанное время." },
  { q: "Как быстро приедет мастер?", a: "В большинстве случаев в день обращения. Позвоните или напишите в Telegram — согласуем удобное время." },
  { q: "Мастер привезёт инструменты?", a: "Да, мастер приедет со всем необходимым инструментом. Расходные материалы (дюбели, шурупы, крепёж) оплачиваются отдельно по факту." },
  { q: "Какие задачи мастер не берёт?", a: "Мастер на час берётся за большинство бытовых задач. Сложные электромонтажные и сантехнические работы выполняются узкими специалистами — уточните при звонке." },
  { q: "Можно ли заказать мастера на несколько часов?", a: "Конечно! Заказывайте на любое количество часов от 4. Для больших объёмов работ обсудим индивидуальные условия." },
  { q: "Работаете в выходные?", a: "Да, работаем 7 дней в неделю. Звоните или пишите в любой день — поможем." },
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

    setMeta("description", "Мастер на час в Иркутске от 500 руб/час, минимум 4 часа. Повесим, соберём, починим, установим — любые бытовые задачи. МастерОФФ. Звоните: +7 (908) 646-16-87")
    setMeta("keywords", "мастер на час Иркутск, муж на час Иркутск, мелкий ремонт Иркутск, сборка мебели, повесить телевизор Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Мастер на час в Иркутске — 500 руб/час | МастерОФФ")
    setOg("og:description", "Мастер на час в Иркутске. Любые бытовые задачи. 500 руб/час, минимум 4 часа. Приедем в день обращения.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Мастер на час в Иркутске",
      "description": "Мастер на час в Иркутске от 500 руб/час",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 2000 ₽",
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
                Повесим, соберём, починим, установим — любые бытовые задачи по дому. 500 ₽/час, минимум 4 часа. Приедем в день обращения.
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
                  <span className="text-black dark:text-white font-medium">Инструмент с собой</span>
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
            <span className="block text-[#7A7FEE]">мастер</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Один мастер — решение любых бытовых задач. Приедет с полным набором инструментов и всё сделает быстро.
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

        {/* Примеры задач */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Примеры
            <span className="block text-[#7A7FEE]">задач</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Вот что чаще всего заказывают жители Иркутска — но это далеко не полный список!
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {examples.map((ex) => (
              <div key={ex.text} className="card p-4 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-[#7A7FEE]/10 w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                  <Icon name={ex.icon} size={18} className="text-[#7A7FEE]" />
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300">{ex.text}</span>
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
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Минимальный заказ. Успеем повесить телевизор, собрать мебель или сделать несколько мелких дел.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md border-2 border-[#7A7FEE] flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-6 bg-[#7A7FEE] text-white text-xs font-semibold px-3 py-1 rounded-full">Популярно</div>
              <div className="text-4xl font-bold text-[#7A7FEE]">4 000 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">8 часов</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Полный рабочий день. Справимся с большим списком задач — соберём мебель, повесим, починим.</p>
              <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                <Icon name="Phone" size={16} /> Заказать
              </a>
            </div>
            <div className="card p-8 shadow-md flex flex-col gap-3">
              <div className="text-4xl font-bold text-[#7A7FEE]">500 ₽</div>
              <div className="text-xl font-semibold text-black dark:text-white">за час</div>
              <p className="text-gray-700 dark:text-gray-300 text-sm flex-1">Большой объём работ или постоянное сотрудничество — обсудим выгодные условия индивидуально.</p>
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
            Просто и без лишних сложностей — от звонка до выполненного результата.
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
            Отвечаем на популярные вопросы о вызове мастера на час в Иркутске.
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
                Нужен мастер? <span className="text-[#7A7FEE]">Звоните</span> прямо сейчас
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Приедем в день обращения.
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
