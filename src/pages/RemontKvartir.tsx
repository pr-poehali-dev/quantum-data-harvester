import { useEffect, useState, useRef } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import ServiceReviews from "@/components/landing/ServiceReviews"

const reviewsData = [
  { name: "Алексей М.", date: "15 февраля 2025", rating: 5, text: "Заказывал ремонт ванной комнаты. Мастера приехали вовремя, всё сделали аккуратно и в срок. Плитка лежит идеально, никаких щелей." },
  { name: "Ольга Н.", date: "3 марта 2025", rating: 5, text: "Делали косметический ремонт в двушке. Очень довольна результатом — качество на высоком уровне, сроки соблюдены, цена честная." },
  { name: "Виктор К.", date: "10 января 2025", rating: 5, text: "Выравнивали стены и делали стяжку под ключ. Бригада профессиональная, объект сдали вовремя. Однозначно рекомендую!" },
]

const works = [
  { icon: "Layers", title: "Демонтажные работы", desc: "Снос перегородок, демонтаж стяжки, плитки, старых покрытий и отделки" },
  { icon: "Ruler", title: "Стяжка пола", desc: "Выравнивание полов цементной или самовыравнивающейся стяжкой под ключ" },
  { icon: "Brush", title: "Штукатурка стен", desc: "Выравнивание стен гипсовой или цементной штукатуркой, маяки, углы" },
  { icon: "Square", title: "Укладка плитки", desc: "Керамическая и керамогранитная плитка в ванной, туалете, кухне" },
  { icon: "PaintBucket", title: "Покраска и обои", desc: "Поклейка обоев любых видов, покраска стен и потолков в 2 слоя" },
  { icon: "Zap", title: "Электрика", desc: "Разводка проводки, установка розеток, выключателей, светильников, щитка" },
  { icon: "Droplets", title: "Сантехника", desc: "Монтаж и замена труб, установка ванны, душевой, унитаза, раковины" },
  { icon: "DoorOpen", title: "Двери и полы", desc: "Установка межкомнатных дверей, укладка ламината, паркетной доски, линолеума" },
]

const packages = [
  {
    name: "Косметический",
    price: "от 1 500 ₽/м²",
    desc: "Обновление внешнего вида без глобальных изменений",
    included: ["Покраска или поклейка обоев", "Покраска потолков", "Замена напольного покрытия", "Покраска или замена дверей", "Мелкий ремонт"],
    popular: false,
  },
  {
    name: "Комплексный",
    price: "от 3 500 ₽/м²",
    desc: "Полноценный ремонт с заменой всех покрытий",
    included: ["Все работы косметического", "Выравнивание стен и потолков", "Стяжка пола", "Укладка плитки в санузлах", "Электрика и сантехника", "Установка дверей"],
    popular: true,
  },
  {
    name: "Под ключ",
    price: "от 6 000 ₽/м²",
    desc: "Полный ремонт с дизайном и материалами",
    included: ["Все работы комплексного", "Дизайн-проект", "Закупка материалов", "Снос и возведение перегородок", "Сложный потолок", "Гарантия 2 года"],
    popular: false,
  },
]

const steps = [
  { icon: "Phone", title: "Заявка и замер", desc: "Звоните или пишите — приедем, замерим и составим смету бесплатно" },
  { icon: "FileText", title: "Договор и смета", desc: "Фиксируем все работы, материалы и сроки в договоре — никаких сюрпризов" },
  { icon: "Hammer", title: "Выполнение работ", desc: "Мастера приступают в согласованный день. Контроль на каждом этапе" },
  { icon: "CheckCircle", title: "Сдача объекта", desc: "Принимаете работу, подписываем акт. Даём гарантию на все виды работ" },
]

const advantages = [
  { icon: "Shield", title: "Гарантия на работы", desc: "Даём письменную гарантию на все виды выполненных работ" },
  { icon: "FileCheck", title: "Договор и смета", desc: "Фиксируем стоимость до начала работ — цена не меняется" },
  { icon: "Clock", title: "Соблюдаем сроки", desc: "Сдаём объект в оговорённый срок или выплачиваем неустойку" },
  { icon: "Users", title: "Собственные мастера", desc: "Работаем без субподрядчиков — только проверенная команда" },
  { icon: "Camera", title: "Фотоотчёт", desc: "Присылаем фото каждого этапа работ — видите прогресс онлайн" },
  { icon: "Wallet", title: "Удобная оплата", desc: "Поэтапная оплата: аванс при старте, остаток — после сдачи" },
]

const faq = [
  { q: "Сколько стоит ремонт квартиры в Иркутске?", a: "Стоимость зависит от вида ремонта и площади. Косметический — от 1 500 ₽/м², комплексный — от 3 500 ₽/м², под ключ — от 6 000 ₽/м². Точную стоимость считаем после бесплатного замера." },
  { q: "Сколько времени займёт ремонт?", a: "Косметический ремонт однушки — 2–3 недели, комплексный — 4–8 недель, под ключ — 2–4 месяца. Сроки фиксируем в договоре." },
  { q: "Вы работаете с материалами заказчика?", a: "Да, работаем как с нашими материалами, так и с материалами заказчика. При закупке через нас — оптовые цены и гарантия качества." },
  { q: "Есть ли гарантия на ремонт?", a: "Да. На все виды работ даём письменную гарантию. При комплексном ремонте — 1 год, при ремонте под ключ — 2 года." },
  { q: "Можно ли делать ремонт в ипотечной квартире?", a: "Да, никаких ограничений. Работаем в новостройках, вторичном жилье, ипотечных квартирах по всему Иркутску." },
  { q: "Убираете ли вы мусор после ремонта?", a: "Да, вывоз строительного мусора включён в стоимость всех видов комплексного ремонта и ремонта под ключ." },
]

const projects = [
  {
    title: "Ремонт студии 24 м²",
    desc: "Комплексный ремонт в новостройке: выравнивание стен, укладка ламината, покраска, сантехника",
    area: "24 м²",
    type: "Комплексный",
    photos: [
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/ec9cb240-fe3f-4db7-9f47-0f3b4611f5bc.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/7ff5c1dd-888f-4424-bda0-3e14aabced6b.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/b4108273-addd-46f6-82a3-0b9c9e2a44e2.jpg",
    ],
  },
  {
    title: "Однокомнатная в хрущёвке 30 м²",
    desc: "Ремонт под ключ: демонтаж, новая планировка, полный цикл отделки с материалами",
    area: "30 м²",
    type: "Под ключ",
    photos: [
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/8f9ebb34-e43a-4a6c-ab63-c59ad6daf795.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/b04edae9-b5f5-49cb-820c-b68ac7d2d3c9.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/0db0bf3e-54fa-4908-a1c6-781b5a506025.png",
    ],
  },
  {
    title: "Ванная комната в сталинке",
    desc: "Полный ремонт ванной: плитка, замена труб и сантехники, вентиляция, натяжной потолок",
    area: "4.5 м²",
    type: "Комплексный",
    photos: [
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/1d6f2eef-6588-4685-ba10-38c81f1731c6.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/ee4a785e-093e-466a-952a-647407a21de9.jpg",
      "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/879de337-9ed5-4414-82e6-90f4fcd3ebcd.jpg",
    ],
  },
]

function ProjectCard({ project, onPhotoClick }: { project: typeof projects[0]; onPhotoClick: (photos: string[], index: number) => void }) {
  const [current, setCurrent] = useState(0)
  const touchStartX = useRef<number | null>(null)

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c - 1 + project.photos.length) % project.photos.length) }
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setCurrent((c) => (c + 1) % project.photos.length) }

  return (
    <div className="card shadow-md overflow-hidden flex flex-col">
      <div
        className="relative overflow-hidden aspect-[4/3] cursor-zoom-in"
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return
          const diff = touchStartX.current - e.changedTouches[0].clientX
          if (Math.abs(diff) > 40) {
            if (diff > 0) setCurrent((c) => (c + 1) % project.photos.length)
            else setCurrent((c) => (c - 1 + project.photos.length) % project.photos.length)
          }
          touchStartX.current = null
        }}
        onClick={() => onPhotoClick(project.photos, current)}
      >
        {project.photos.map((photo, i) => (
          <img
            key={i}
            src={photo}
            alt={`${project.title} — фото ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#7A7FEE] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10"
          onClick={prev}
          aria-label="Предыдущее фото"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-[#7A7FEE] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-200 z-10"
          onClick={next}
          aria-label="Следующее фото"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {project.photos.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-white scale-110" : "bg-white/50"}`}
            />
          ))}
        </div>
        <div className="absolute top-3 right-3 bg-[#7A7FEE] text-white text-xs font-semibold px-2 py-1 rounded-full z-10">{project.type}</div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-black dark:text-white text-base">{project.title}</h3>
          <span className="text-xs text-gray-500 dark:text-gray-400 shrink-0 ml-2">{project.area}</span>
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300">{project.desc}</p>
      </div>
    </div>
  )
}

function Lightbox({ photos, startIndex, onClose }: { photos: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex)
  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length)
  const next = () => setCurrent((c) => (c + 1) % photos.length)
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white hover:text-[#7A7FEE] transition-colors" onClick={onClose}>
        <X className="w-8 h-8" />
      </button>
      <button className="absolute left-4 text-white hover:text-[#7A7FEE] transition-colors" onClick={(e) => { e.stopPropagation(); prev() }}>
        <ChevronLeft className="w-10 h-10" />
      </button>
      <img src={photos[current]} alt={`Фото ${current + 1}`} className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
      <button className="absolute right-4 text-white hover:text-[#7A7FEE] transition-colors" onClick={(e) => { e.stopPropagation(); next() }}>
        <ChevronRight className="w-10 h-10" />
      </button>
      <div className="absolute bottom-4 text-white/60 text-sm">{current + 1} / {photos.length}</div>
    </div>
  )
}

export default function RemontKvartir() {
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null)

  useEffect(() => {
    document.title = "Ремонт квартир в Иркутске под ключ — от 1 500 ₽/м² | МастерОФФ"

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

    setMeta("description", "Ремонт квартир в Иркутске под ключ от 1 500 ₽/м². Косметический, комплексный и капитальный ремонт. Договор, гарантия, фиксированная цена. Звоните: +7 (908) 646-16-87")
    setMeta("keywords", "ремонт квартир Иркутск, ремонт под ключ Иркутск, косметический ремонт Иркутск, капитальный ремонт Иркутск, цена ремонта квартиры")
    setMeta("robots", "index, follow")
    setOg("og:title", "Ремонт квартир в Иркутске под ключ — от 1 500 ₽/м² | МастерОФФ")
    setOg("og:description", "Ремонт квартир в Иркутске под ключ. Договор и фиксированная смета. Гарантия на все работы. Бесплатный замер.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Ремонт квартир в Иркутске",
      "description": "Ремонт квартир в Иркутске под ключ от 1 500 ₽/м²",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "priceRange": "от 1 500 ₽/м²",
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-remont")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-remont"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-remont")?.remove() }
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      <Header />
      <div className="container pt-4">

        {/* Hero */}
        <section className="card my-8 relative shadow-md" style={{ overflow: "visible" }}>
          <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
            <div className="w-full md:w-3/5 z-10">
              <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
                Ремонт квартир
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Косметический, комплексный и ремонт под ключ. Фиксированная смета, договор, гарантия на все виды работ. Бесплатный выезд на замер.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Ruler" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">от 1 500 ₽/м²</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Shield" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Гарантия до 2 лет</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="FileText" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Договор и смета</span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+79086461687" className="btn-primary inline-flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  Бесплатный замер
                </a>
                <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="btn-secondary text-black dark:text-white inline-flex items-center gap-2">
                  <Icon name="Send" size={16} />
                  Написать в Telegram
                </a>
              </div>
            </div>
            <div className="hidden md:block md:absolute md:right-0 md:bottom-0" style={{ width: "42%", top: "-180px" }}>
              <img src="https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/a5921613-2c73-4d29-86cc-0151aacd320d.png" alt="Менеджер" className="w-full h-full object-contain object-top" />
            </div>
          </div>
        </section>

        {/* Виды работ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Виды
            <span className="block text-[#7A7FEE]">работ</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Выполняем весь комплекс ремонтно-отделочных работ в квартирах по всему Иркутску — от демонтажа до чистовой отделки.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {works.map((work) => (
              <div key={work.title} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={work.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{work.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{work.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Пакеты */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Виды
            <span className="block text-[#7A7FEE]">ремонта</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Выберите подходящий вариант — от освежения интерьера до полного ремонта под ключ с дизайн-проектом.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`card p-8 shadow-md flex flex-col gap-4 relative ${pkg.popular ? "border-2 border-[#7A7FEE]" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-6 bg-[#7A7FEE] text-white text-xs font-semibold px-3 py-1 rounded-full">Популярно</div>
                )}
                <div className="text-3xl font-bold text-[#7A7FEE]">{pkg.price}</div>
                <div className="text-xl font-semibold text-black dark:text-white">{pkg.name}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{pkg.desc}</p>
                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <Icon name="Check" size={16} className="text-[#7A7FEE] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+79086461687" className="btn-primary inline-flex items-center justify-center gap-2 mt-2">
                  <Icon name="Phone" size={16} /> Узнать цену
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Наши работы */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Наши
            <span className="block text-[#7A7FEE]">проекты</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Реальные фото выполненных ремонтов квартир в Иркутске нашими мастерами.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onPhotoClick={(photos, index) => setLightbox({ photos, index })}
              />
            ))}
          </div>
        </section>

        {/* Почему мы */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Почему выбирают
            <span className="block text-[#7A7FEE]">МастерОФФ</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Более 5 лет делаем ремонты в Иркутске. Работаем честно, с договором и гарантией.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <div key={adv.title} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-[#7A7FEE] w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <Icon name={adv.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{adv.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Этапы работы */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Как мы
            <span className="block text-[#7A7FEE]">работаем</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Чёткий процесс от первого звонка до сдачи ключей — без неожиданностей и скрытых доплат.
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

        <ServiceReviews reviews={reviewsData} />

        {/* FAQ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на самые популярные вопросы о ремонте квартир в Иркутске.
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
                Хотите ремонт? <span className="text-[#7A7FEE]">Замер</span> бесплатно
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Приедем, замерим, составим подробную смету — без обязательств. Работаем по всему Иркутску.
              </p>
              <p className="mb-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Перезвоним в течение 15 минут и согласуем удобное время для выезда.
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

      {lightbox && (
        <Lightbox photos={lightbox.photos} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      )}
    </main>
  )
}