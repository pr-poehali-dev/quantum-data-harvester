import { useEffect, useState } from "react"
import Header from "@/components/landing/Header"
import Footer from "@/components/landing/Footer"
import TelegramFloat from "@/components/landing/TelegramFloat"
import Icon from "@/components/ui/icon"

const works = [
  { icon: "Zap", title: "Монтаж проводки", desc: "Разводка кабеля в квартирах, домах, офисах. Скрытая и открытая прокладка" },
  { icon: "ToggleLeft", title: "Розетки и выключатели", desc: "Установка наружных и внутренних розеток, выключателей, диммеров" },
  { icon: "Lightbulb", title: "Освещение", desc: "Монтаж люстр, бра, точечных светильников, светодиодных лент" },
  { icon: "ShieldCheck", title: "Щиты и автоматы", desc: "Установка электрощитков, автоматических выключателей, УЗО" },
  { icon: "Gauge", title: "Счётчики", desc: "Установка однофазных и трёхфазных счётчиков электроэнергии" },
  { icon: "Wind", title: "Вентиляция", desc: "Монтаж вытяжных и канальных вентиляторов в ванной, кухне" },
  { icon: "Thermometer", title: "Тёплый пол", desc: "Монтаж электрического тёплого пола и терморегуляторов" },
  { icon: "Wifi", title: "Слаботочные сети", desc: "Прокладка кабеля интернет, ТВ-антенны, телефона" },
]

const faq = [
  { q: "Выезд и консультация платные?", a: "Выезд и консультация по Иркутску — бесплатно. За пределами города — 25 руб/км." },
  { q: "Как рассчитывается стоимость?", a: "По прайс-листу ниже. Цена зависит от типа работ, материала стен и сложности. В стеснённых условиях, при работе выше 3м или ниже 30см от пола применяется коэффициент 1,5." },
  { q: "Работаете в новостройках и вторичке?", a: "Да, выполняем электромонтажные работы в квартирах, домах и офисах любого типа по всему Иркутску." },
  { q: "Даёте ли гарантию?", a: "Да, на все выполненные работы даём гарантию. Точные условия обсуждаются при заключении договора." },
]

const priceGroups = [
  {
    title: "Выезд и консультация",
    icon: "MapPin",
    rows: [
      { name: "Выезд и консультация в городе", unit: "", price: "Бесплатно" },
      { name: "Выезд и консультация в Иркутской области", unit: "км", price: "25 руб." },
    ],
  },
  {
    title: "Монтаж кабеля",
    icon: "Cable",
    rows: [
      { name: "Кабель 3-х жильный сечением до 2,5 мм²", unit: "п.м.", price: "49 руб." },
      { name: "Кабель 3-х жильный сечением до 6 мм²", unit: "п.м.", price: "57 руб." },
      { name: "Кабель 3-х жильный сечением до 10 мм²", unit: "п.м.", price: "65 руб." },
      { name: "Кабель 5-ти жильный сечением до 4 мм²", unit: "п.м.", price: "55 руб." },
      { name: "Кабель 5-ти жильный сечением до 10 мм²", unit: "п.м.", price: "70 руб." },
      { name: "Кабель 5-ти жильный сечением до 16 мм²", unit: "п.м.", price: "87 руб." },
      { name: "Кабель 5-ти жильный сечением до 35 мм²", unit: "п.м.", price: "145 руб." },
      { name: "Кабель 5-ти жильный сечением до 50 мм²", unit: "п.м.", price: "210 руб." },
      { name: "Кабель 5-ти жильный сечением до 95 мм²", unit: "п.м.", price: "310 руб." },
      { name: "Кабель 5-ти жильный сечением до 120 мм²", unit: "п.м.", price: "350 руб." },
      { name: "Монтаж кабеля по воздуху (СИП 4х16)", unit: "п.м.", price: "130 руб." },
      { name: "Монтаж кабеля по воздуху (СИП 4х35)", unit: "п.м.", price: "200 руб." },
    ],
  },
  {
    title: "Монтаж провода",
    icon: "Plug",
    rows: [
      { name: "Провод 1 жильный сечением до 4 мм²", unit: "п.м.", price: "15 руб." },
      { name: "Провод 1 жильный сечением до 10 мм²", unit: "п.м.", price: "20 руб." },
      { name: "Провод 1 жильный сечением до 25 мм²", unit: "п.м.", price: "40 руб." },
      { name: "Провод 1 жильный сечением до 35 мм²", unit: "п.м.", price: "60 руб." },
      { name: "Провод 1 жильный сечением до 50 мм²", unit: "п.м.", price: "100 руб." },
      { name: "Провод 1 жильный сечением до 95 мм²", unit: "п.м.", price: "150 руб." },
      { name: "Провод 1 жильный сечением до 120 мм²", unit: "п.м.", price: "200 руб." },
    ],
  },
  {
    title: "Монтаж слаботочных сетей",
    icon: "Wifi",
    rows: [
      { name: "Кабель UTP (интернет)", unit: "п.м.", price: "30 руб." },
      { name: "Кабель ТВ (антенна)", unit: "п.м.", price: "30 руб." },
      { name: "Кабель телефонный", unit: "п.м.", price: "30 руб." },
    ],
  },
  {
    title: "Протяжка кабеля в трубе",
    icon: "ArrowRight",
    rows: [
      { name: "Труба гофрированная до Ø20 мм", unit: "п.м.", price: "7,5 руб." },
      { name: "Труба гофрированная до Ø32 мм", unit: "п.м.", price: "12,5 руб." },
      { name: "Труба гофрированная до Ø50 мм", unit: "п.м.", price: "22 руб." },
      { name: "Металлорукав до Ø20 мм", unit: "п.м.", price: "15 руб." },
      { name: "Металлорукав до Ø35 мм", unit: "п.м.", price: "25 руб." },
      { name: "Металлорукав до Ø50 мм", unit: "п.м.", price: "44 руб." },
    ],
  },
  {
    title: "Монтаж кабель-канала (короб)",
    icon: "Minus",
    rows: [
      { name: "Кабель-канал до 25×16", unit: "п.м.", price: "60 руб." },
      { name: "Кабель-канал до 60×40", unit: "п.м.", price: "75 руб." },
      { name: "Кабель-канал до 100×60", unit: "п.м.", price: "125 руб." },
    ],
  },
  {
    title: "Монтаж лотков",
    icon: "AlignJustify",
    rows: [
      { name: "Лоток металлический ширина до 200 мм", unit: "п.м.", price: "180 руб." },
      { name: "Лоток металлический ширина до 400 мм", unit: "п.м.", price: "350 руб." },
      { name: "Установка кронштейна для лотка до 400 мм", unit: "шт.", price: "105 руб." },
    ],
  },
  {
    title: "Штробление борозд",
    icon: "Hammer",
    rows: [
      { name: "В гипсолите/пеноблоке 20×20", unit: "п.м.", price: "100 руб." },
      { name: "В кирпиче 20×20", unit: "п.м.", price: "160 руб." },
      { name: "В бетоне 20×20", unit: "п.м.", price: "210 руб." },
      { name: "В гипсолите/пеноблоке 20×40", unit: "п.м.", price: "125 руб." },
      { name: "В кирпиче 20×40", unit: "п.м.", price: "190 руб." },
      { name: "В бетоне 20×40", unit: "п.м.", price: "270 руб." },
      { name: "В гипсолите/пеноблоке 40×40", unit: "п.м.", price: "195 руб." },
      { name: "В кирпиче 40×40", unit: "п.м.", price: "250 руб." },
      { name: "В бетоне 40×40", unit: "п.м.", price: "350 руб." },
    ],
  },
  {
    title: "Сквозное сверление стен",
    icon: "CircleDot",
    rows: [
      { name: "В гипсолите/пеноблоке до Ø20 мм", unit: "см.", price: "5 руб." },
      { name: "В кирпиче до Ø20 мм", unit: "см.", price: "8 руб." },
      { name: "В бетоне до Ø20 мм", unit: "см.", price: "11 руб." },
      { name: "В гипсолите/пеноблоке до Ø32 мм", unit: "см.", price: "8 руб." },
      { name: "В кирпиче до Ø32 мм", unit: "см.", price: "10 руб." },
      { name: "В бетоне до Ø32 мм", unit: "см.", price: "15 руб." },
    ],
  },
  {
    title: "Подрозетники и коробки",
    icon: "Square",
    rows: [
      { name: "Лунка под подрозетник в гипсокартоне/газобетоне Ø65 мм", unit: "шт.", price: "100 руб." },
      { name: "Лунка под подрозетник в кирпиче Ø65 мм", unit: "шт.", price: "101 руб." },
      { name: "Лунка под подрозетник в бетоне Ø65 мм", unit: "шт.", price: "102 руб." },
      { name: "Подрозетник в гипсокартоне", unit: "шт.", price: "10 руб." },
      { name: "Подрозетник в бетоне/кирпиче/пеноблоке", unit: "шт.", price: "20 руб." },
      { name: "Распаечная коробка наружная 80×80×60", unit: "шт.", price: "40 руб." },
      { name: "Распаечная коробка наружная 100×100×60", unit: "шт.", price: "45 руб." },
      { name: "Распаечная коробка внутренняя Ø80", unit: "шт.", price: "70 руб." },
    ],
  },
  {
    title: "Установка боксов (щитов)",
    icon: "Server",
    rows: [
      { name: "Бокс наружный", unit: "шт.", price: "600 руб." },
      { name: "Бокс внутренний до 6 модулей — гипсокартон", unit: "шт.", price: "1 000 руб." },
      { name: "Бокс внутренний до 6 модулей — кирпич", unit: "шт.", price: "1 500 руб." },
      { name: "Бокс внутренний до 6 модулей — бетон", unit: "шт.", price: "2 000 руб." },
      { name: "Бокс внутренний до 12 модулей — гипсокартон", unit: "шт.", price: "1 500 руб." },
      { name: "Бокс внутренний до 12 модулей — кирпич", unit: "шт.", price: "1 800 руб." },
      { name: "Бокс внутренний до 12 модулей — бетон", unit: "шт.", price: "2 600 руб." },
      { name: "Бокс внутренний до 24 модулей — гипсокартон", unit: "шт.", price: "2 000 руб." },
      { name: "Бокс внутренний до 24 модулей — кирпич", unit: "шт.", price: "2 500 руб." },
      { name: "Бокс внутренний до 24 модулей — бетон", unit: "шт.", price: "3 700 руб." },
      { name: "Бокс внутренний до 36 модулей — гипсокартон", unit: "шт.", price: "2 500 руб." },
      { name: "Бокс внутренний до 36 модулей — кирпич", unit: "шт.", price: "3 300 руб." },
      { name: "Бокс внутренний до 36 модулей — бетон", unit: "шт.", price: "4 800 руб." },
      { name: "Бокс внутренний до 54 модулей — гипсокартон", unit: "шт.", price: "3 200 руб." },
      { name: "Бокс внутренний до 54 модулей — кирпич", unit: "шт.", price: "4 200 руб." },
      { name: "Бокс внутренний до 54 модулей — бетон", unit: "шт.", price: "5 800 руб." },
    ],
  },
  {
    title: "Установка автоматов",
    icon: "ToggleLeft",
    rows: [
      { name: "Автомат однополюсной", unit: "шт.", price: "145 руб." },
      { name: "Автомат двухполюсной", unit: "шт.", price: "200 руб." },
      { name: "Автомат трёхполюсной", unit: "шт.", price: "320 руб." },
      { name: "УЗО двухполюсное", unit: "шт.", price: "225 руб." },
      { name: "УЗО четырёхполюсное", unit: "шт.", price: "350 руб." },
    ],
  },
  {
    title: "Счётчики электрические",
    icon: "Gauge",
    rows: [
      { name: "Счётчик однофазный", unit: "шт.", price: "700 руб." },
      { name: "Счётчик трёхфазный", unit: "шт.", price: "1 200 руб." },
    ],
  },
  {
    title: "Розетки и выключатели",
    icon: "Power",
    rows: [
      { name: "Розетка наружная", unit: "шт.", price: "130 руб." },
      { name: "Выключатель наружный одноклавишный", unit: "шт.", price: "110 руб." },
      { name: "Выключатель наружный двухклавишный", unit: "шт.", price: "120 руб." },
      { name: "Переключатель проходной наружный одноклавишный", unit: "шт.", price: "150 руб." },
      { name: "Переключатель проходной наружный двухклавишный", unit: "шт.", price: "200 руб." },
      { name: "Розетка внутренняя", unit: "шт.", price: "130 руб." },
      { name: "Выключатель внутренний одноклавишный", unit: "шт.", price: "120 руб." },
      { name: "Выключатель внутренний двухклавишный", unit: "шт.", price: "130 руб." },
      { name: "Переключатель проходной внутренний одноклавишный", unit: "шт.", price: "150 руб." },
      { name: "Переключатель проходной внутренний двухклавишный", unit: "шт.", price: "200 руб." },
      { name: "Розетка компьютерная (интернет)", unit: "шт.", price: "200 руб." },
      { name: "Розетка ТВ", unit: "шт.", price: "200 руб." },
      { name: "Розетка телефонная", unit: "шт.", price: "200 руб." },
      { name: "Диммер (светорегулятор)", unit: "шт.", price: "250 руб." },
      { name: "Терморегулятор тёплого пола", unit: "шт.", price: "500 руб." },
      { name: "Розетка для электроплиты", unit: "шт.", price: "500 руб." },
    ],
  },
  {
    title: "Установка светильников",
    icon: "Lightbulb",
    rows: [
      { name: "Светодиодная лента", unit: "м.п.", price: "от 150 руб." },
      { name: "Светильник настенный (бра)", unit: "шт.", price: "350 руб." },
      { name: "Светильник Армстронг", unit: "шт.", price: "350 руб." },
      { name: "Светильник с люминесцентными лампами 2×36", unit: "шт.", price: "450 руб." },
      { name: "Светильник накладной/плафон", unit: "шт.", price: "350 руб." },
      { name: "Точечный встраиваемый светильник", unit: "шт.", price: "160 руб." },
      { name: "Люстра стоимостью свыше 15 000 руб.", unit: "шт.", price: "10% от цены" },
      { name: "Люстра сложная / с пультом ДУ", unit: "шт.", price: "1 100 руб." },
      { name: "Люстра с креплением на крюк", unit: "шт.", price: "600 руб." },
      { name: "Сборка сложной люстры", unit: "шт.", price: "500 руб." },
      { name: "Монтаж крюка под навеску люстры", unit: "шт.", price: "250 руб." },
      { name: "Отверстие под точечный светильник", unit: "шт.", price: "100 руб." },
    ],
  },
  {
    title: "Вентиляция и тёплый пол",
    icon: "Wind",
    rows: [
      { name: "Вентилятор вытяжки", unit: "шт.", price: "550 руб." },
      { name: "Вентилятор канальный накладной", unit: "шт.", price: "850 руб." },
      { name: "Монтаж тёплого пола", unit: "м²", price: "330 руб." },
    ],
  },
  {
    title: "Демонтаж",
    icon: "Trash2",
    rows: [
      { name: "Демонтаж вентилятора", unit: "шт.", price: "120 руб." },
      { name: "Демонтаж люстры", unit: "шт.", price: "200 руб." },
      { name: "Демонтаж светильников/бра", unit: "шт.", price: "120 руб." },
      { name: "Демонтаж автомата защиты", unit: "шт.", price: "40 руб." },
      { name: "Демонтаж выключателя/розетки накладной", unit: "шт.", price: "50 руб." },
      { name: "Демонтаж выключателя/розетки встроенной", unit: "шт.", price: "70 руб." },
      { name: "Демонтаж звонка/кнопки", unit: "шт.", price: "50 руб." },
      { name: "Демонтаж электропроводки/TV-кабеля", unit: "п.м.", price: "7 руб." },
      { name: "Демонтаж кабель-канала (короба)", unit: "шт.", price: "20 руб." },
    ],
  },
]

export default function Elektrika() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  useEffect(() => {
    document.title = "Электрика в Иркутске — прайс-лист и цены | МастерОФФ"

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

    setMeta("description", "Услуги электрика в Иркутске. Монтаж проводки, розеток, щитов, светильников, тёплого пола. Прайс-лист с ценами. Выезд бесплатно. Звоните: +7 (908) 646-16-87")
    setMeta("keywords", "электрик Иркутск, монтаж проводки Иркутск, установка розеток, электрощит, цены электрика Иркутск")
    setMeta("robots", "index, follow")
    setOg("og:title", "Электрика в Иркутске — прайс-лист и цены | МастерОФФ")
    setOg("og:description", "Электромонтажные работы в Иркутске. Прайс-лист с ценами. Выезд и консультация бесплатно.")
    setOg("og:type", "website")

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "МастерОФФ — Электрик в Иркутске",
      "description": "Электромонтажные работы в Иркутске",
      "telephone": "+7-908-646-16-87",
      "email": "masteroff38@mail.ru",
      "address": { "@type": "PostalAddress", "addressLocality": "Иркутск", "addressCountry": "RU" },
      "url": window.location.href,
    }
    let schemaEl = document.getElementById("schema-elektrika")
    if (!schemaEl) {
      schemaEl = document.createElement("script")
      schemaEl.id = "schema-elektrika"
      schemaEl.setAttribute("type", "application/ld+json")
      document.head.appendChild(schemaEl)
    }
    schemaEl.textContent = JSON.stringify(schema)

    return () => { document.getElementById("schema-elektrika")?.remove() }
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
                Электрик
                <span className="block text-[#7A7FEE]">в Иркутске</span>
              </h1>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Электромонтажные работы любой сложности. Монтаж проводки, розеток, щитов, освещения. Выезд и консультация по Иркутску — бесплатно.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="MapPin" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Выезд бесплатно</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="Shield" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Гарантия на работы</span>
                </div>
                <div className="card px-4 py-2 flex items-center gap-2 shadow-sm text-sm">
                  <Icon name="FileText" size={16} className="text-[#7A7FEE]" />
                  <span className="text-black dark:text-white font-medium">Прайс-лист</span>
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
            Виды
            <span className="block text-[#7A7FEE]">работ</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Выполняем полный комплекс электромонтажных работ в квартирах, домах и офисах Иркутска.
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

        {/* Прайс-лист */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Прайс-лист
            <span className="block text-[#7A7FEE]">на работы</span>
          </h2>
          <div className="card p-6 mb-8 border-l-4 border-[#7A7FEE] shadow-md">
            <div className="flex items-start gap-3">
              <Icon name="Info" size={20} className="text-[#7A7FEE] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-black dark:text-white">Это примерная стоимость.</span> Реальная стоимость рассчитывается в зависимости от ваших предпочтений и пожеланий. В стеснённых условиях, при работе выше 3 м или ниже 30 см от пола, в запыленных/загазованных помещениях и при экстремальных температурах применяется коэффициент <span className="font-semibold text-[#7A7FEE]">×1,5</span>.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {priceGroups.map((group) => (
              <div key={group.title} className="card overflow-hidden shadow-md">
                <button
                  onClick={() => setActiveGroup(activeGroup === group.title ? null : group.title)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#7A7FEE] w-9 h-9 rounded-full flex items-center justify-center shrink-0">
                      <Icon name={group.icon} className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-semibold text-black dark:text-white">{group.title}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">— {group.rows.length} позиций</span>
                  </div>
                  <Icon
                    name={activeGroup === group.title ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    className="text-gray-400 shrink-0"
                  />
                </button>

                {activeGroup === group.title && (
                  <div className="border-t border-gray-100 dark:border-gray-800">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50 dark:bg-gray-800/50">
                          <th className="text-left px-5 py-3 text-gray-500 dark:text-gray-400 font-medium">Наименование</th>
                          <th className="text-center px-3 py-3 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap hidden sm:table-cell">Ед. изм.</th>
                          <th className="text-right px-5 py-3 text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap">Стоимость</th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                          >
                            <td className="px-5 py-3 text-gray-700 dark:text-gray-300">{row.name}</td>
                            <td className="px-3 py-3 text-center text-gray-500 dark:text-gray-400 hidden sm:table-cell">{row.unit}</td>
                            <td className="px-5 py-3 text-right font-semibold text-[#7A7FEE] whitespace-nowrap">{row.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a href="tel:+79086461687" className="btn-primary inline-flex items-center gap-2">
              <Icon name="Phone" size={16} />
              Рассчитать стоимость
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="my-20">
          <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Частые
            <span className="block text-[#7A7FEE]">вопросы</span>
          </h2>
          <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
            Отвечаем на популярные вопросы об электромонтажных работах в Иркутске.
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
                Нужен электрик? <span className="text-[#7A7FEE]">Звоните</span> прямо сейчас
              </h2>
              <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
                Работаем по всему Иркутску. Выезд и консультация — бесплатно.
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
