import ContactFormButton from "./ContactFormButton"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Сервис мастеров
            <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">в Иркутске</span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            МАСТЕРОФФ — сервис проверенных мастеров. Разнорабочие, грузчики, отделка квартир и домов, строительство и отделка бань, электрика, сантехника. Быстро. Надёжно. С гарантией.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Наши услуги
            </a>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:right-0 md:top-0 md:bottom-0" style={{ width: "45%" }}>
          <img
            src="https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/1433e198-55f7-470f-9b5c-eb8096e390d5.png"
            alt="Разнорабочие"
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  )
}