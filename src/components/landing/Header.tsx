import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "next-themes"
import Icon from "@/components/ui/icon"

const serviceLinks = [
  { href: "/raznorabochie", label: "Разнорабочие", icon: "Hammer" },
  { href: "/gruzchiki", label: "Грузчики", icon: "Package" },
  { href: "/remont-kvartir", label: "Ремонт квартир", icon: "PaintBucket" },
  { href: "/elektrika", label: "Электрика", icon: "Zap" },
  { href: "/master-na-chas", label: "Мастер на час", icon: "Clock" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black dark:text-white">
                Мастер<span className="text-[#7A7FEE]">ОФФ</span>
              </span>
            </a>

            <div className="flex items-center space-x-4">
              <a
                href="tel:+79086461687"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-black dark:text-white hover:text-[#7A7FEE] transition-colors"
              >
                <Icon name="Phone" size={15} />
                +7 (908) 646-16-87
              </a>

              <nav className="hidden md:block">
                <ul className="flex space-x-6 items-center">
                  {/* Услуги с дропдауном */}
                  <li className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="flex items-center gap-1 text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                    >
                      Услуги
                      <Icon name={servicesOpen ? "ChevronUp" : "ChevronDown"} size={14} />
                    </button>

                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-xl shadow-xl py-2 z-50">
                        {serviceLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#7A7FEE] transition-colors"
                          >
                            <Icon name={link.icon} size={15} className="text-[#7A7FEE]" />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </li>

                  <li>
                    <a
                      href="/#projects"
                      className="text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                    >
                      Работы
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#faq"
                      className="text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                    >
                      Вопросы
                    </a>
                  </li>
                  <li>
                    <a
                      href="/#contact"
                      className="text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>

              <ThemeToggle />

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-transparent hover:bg-gray-200/50 dark:hover:bg-gray-800/20 md:hidden"
                aria-label="Меню"
              >
                <Menu className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 md:hidden">
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-[#111111] shadow-xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#111111]">
              <span className="text-xl font-bold text-black dark:text-white">
                Мастер<span className="text-[#7A7FEE]">ОФФ</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <a
                    href="/"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Главная
                  </a>
                </li>

                {/* Услуги аккордеон */}
                <li>
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center justify-between w-full py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    Услуги
                    <Icon name={mobileServicesOpen ? "ChevronUp" : "ChevronDown"} size={16} />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {serviceLinks.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-2 px-4 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#7A7FEE]"
                          >
                            <Icon name={link.icon} size={14} className="text-[#7A7FEE]" />
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                <li>
                  <a
                    href="/#projects"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Работы
                  </a>
                </li>
                <li>
                  <a
                    href="/#faq"
                    className="flex items-center py-3 px-4 rounded-lg text-base text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Вопросы
                  </a>
                </li>
              </ul>
            </nav>

            <div className="p-4 mt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
              <a
                href="tel:+79086461687"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#7A7FEE] text-white rounded-lg text-base font-medium hover:bg-opacity-90 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="Phone" size={16} />
                +7 (908) 646-16-87
              </a>
              <a
                href="https://t.me/masteroff38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-lg text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="Send" size={16} />
                Telegram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}