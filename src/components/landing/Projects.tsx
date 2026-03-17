import { useState } from "react"
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react"

const kvartiraPhotos = [
  "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/24034cd6-702a-41d4-ab66-ab1702716b23.jpg",
  "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/20ce469e-0a18-46a4-a288-ea5d00082691.jpg",
  "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/6a6095b4-58ee-4697-84e4-183a81a1b406.jpg",
  "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/49a4b6ed-0f66-433d-85dd-d1aeceeb0af6.jpg",
  "https://cdn.poehali.dev/projects/00eabb41-cd43-402b-855a-9ee2fb26e229/bucket/c311ae41-2550-4b1b-9ed5-467c8972f5a3.jpg",
]

const projects = [
  {
    id: 1,
    slug: "otdelka-kvartiry",
    title: "Отделка квартиры",
    shortDescription: "Полный ремонт 3-комнатной квартиры под ключ: стяжка, штукатурка, плитка, обои",
    photos: kvartiraPhotos,
  },
  {
    id: 2,
    slug: "banya-pod-kluch",
    title: "Баня под ключ",
    shortDescription: "Строительство и отделка бани из бруса 6х4м: фундамент, сруб, кровля, внутренняя отделка",
    photos: ["/portfolio-images/ecommerce-interface-1.jpg"],
  },
  {
    id: 3,
    slug: "otdelka-doma",
    title: "Отделка частного дома",
    shortDescription: "Внешняя и внутренняя отделка дома 120 кв.м: фасад, утепление, чистовая отделка",
    photos: ["/portfolio-images/ai-platform-1.jpg"],
  },
]

function Lightbox({ photos, startIndex, onClose }: { photos: string[]; startIndex: number; onClose: () => void }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent((c) => (c - 1 + photos.length) % photos.length)
  const next = () => setCurrent((c) => (c + 1) % photos.length)

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white hover:text-[#7A7FEE] transition-colors"
        onClick={onClose}
      >
        <X className="w-8 h-8" />
      </button>

      <button
        className="absolute left-4 text-white hover:text-[#7A7FEE] transition-colors"
        onClick={(e) => { e.stopPropagation(); prev() }}
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <img
        src={photos[current]}
        alt={`Фото ${current + 1}`}
        className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        className="absolute right-4 text-white hover:text-[#7A7FEE] transition-colors"
        onClick={(e) => { e.stopPropagation(); next() }}
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <div className="absolute bottom-4 text-white/60 text-sm">
        {current + 1} / {photos.length}
      </div>
    </div>
  )
}

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null)

  return (
    <section id="projects" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Наши
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">работы</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Реальные объекты наших мастеров в Иркутске. Квартиры, дома, бани — смотрите что мы умеем и заказывайте с уверенностью.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card overflow-hidden shadow-lg"
          >
            {project.photos.length > 1 ? (
              <div className="grid grid-cols-2 gap-0.5">
                <div
                  className="col-span-2 overflow-hidden cursor-pointer"
                  onClick={() => setLightbox({ photos: project.photos, index: 0 })}
                >
                  <img
                    src={project.photos[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {project.photos.slice(1, 4).map((photo, i) => (
                  <div
                    key={i}
                    className="overflow-hidden cursor-pointer relative"
                    onClick={() => setLightbox({ photos: project.photos, index: i + 1 })}
                  >
                    <img
                      src={photo}
                      alt={`Фото ${i + 2}`}
                      className="w-full h-24 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {i === 2 && project.photos.length > 4 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg">
                        +{project.photos.length - 4}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="overflow-hidden cursor-pointer"
                onClick={() => setLightbox({ photos: project.photos, index: 0 })}
              >
                <img
                  src={project.photos[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-black dark:text-white">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-1 mb-4">{project.shortDescription}</p>
              <div
                className="inline-flex items-center text-[#7A7FEE] text-sm font-medium group cursor-pointer"
                onClick={() => setLightbox({ photos: project.photos, index: 0 })}
              >
                Смотреть фото{" "}
                <ArrowUpRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <a href="#contact" className="btn-primary">
          Все работы
        </a>
      </div>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
