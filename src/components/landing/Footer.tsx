import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Icon from "@/components/ui/icon"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="#" className="flex items-center justify-center mb-4">
          <span className="text-2xl font-bold text-black dark:text-white">
            Мастер<span className="text-[#7A7FEE]">ОФФ</span>
          </span>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Сервис проверенных мастеров в Иркутске. Ремонт, отделка, строительство бань, электрика и сантехника.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6 text-sm">
          <a href="tel:+79086461687" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-[#7A7FEE] transition-colors">
            <Icon name="Phone" size={15} />
            +7 (908) 646-16-87
          </a>
          <span className="hidden sm:block text-gray-400">·</span>
          <a href="mailto:masteroff38@mail.ru" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-[#7A7FEE] transition-colors">
            <Icon name="Mail" size={15} />
            masteroff38@mail.ru
          </a>
          <span className="hidden sm:block text-gray-400">·</span>
          <a href="https://t.me/masteroff38" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-700 dark:text-gray-300 hover:text-[#7A7FEE] transition-colors">
            <Icon name="Send" size={15} />
            @masteroff38
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} МАСТЕРОФФ. Все права защищены.
        </p>
      </div>
    </footer>
  )
}