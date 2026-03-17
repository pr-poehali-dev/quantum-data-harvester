import Icon from "@/components/ui/icon"

const services = [
  {
    id: 1,
    title: "Разнорабочие",
    description: "Любые бытовые задачи по дому: сборка мебели, перестановка, мелкий ремонт и помощь по хозяйству.",
    icon: "Hammer",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Грузчики",
    description: "Переезды, подъём и вынос мебели, погрузка и разгрузка. Работаем быстро и аккуратно.",
    icon: "Package",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Отделка квартир",
    description: "Полный комплекс отделочных работ: выравнивание стен, укладка плитки, покраска, поклейка обоев.",
    icon: "PaintBucket",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 4,
    title: "Отделка домов",
    description: "Внутренняя и внешняя отделка частных домов — от черновой до чистовой под ключ.",
    icon: "Home",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 5,
    title: "Строительство бань",
    description: "Возведение бань из бруса, бревна и кирпича. Фундамент, стены, кровля — полный цикл.",
    icon: "Flame",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 6,
    title: "Отделка бань",
    description: "Внутренняя отделка парилки, моечной и предбанника. Вагонка, плитка, утепление.",
    icon: "Sparkles",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 7,
    title: "Электрика",
    description: "Монтаж и замена проводки, установка розеток, выключателей, щитков и светильников.",
    icon: "Zap",
    color: "bg-[#7A7FEE]",
  },
  {
    id: 8,
    title: "Сантехника",
    description: "Установка сантехники, замена труб, монтаж радиаторов отопления и водяных систем.",
    icon: "Droplets",
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наши
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">услуги</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Профессиональные мастера для любых строительных и ремонтных задач в Иркутске. Работаем быстро, качественно и с гарантией результата.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <Icon name={service.icon} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
