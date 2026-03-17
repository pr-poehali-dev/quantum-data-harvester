import Icon from "@/components/ui/icon"

export default function TelegramFloat() {
  return (
    <a
      href="https://t.me/masteroff38"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#7A7FEE] hover:bg-[#6366d6] text-white text-sm font-medium px-4 py-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
      aria-label="Написать в Telegram"
    >
      <Icon name="Send" size={18} />
      <span className="hidden sm:inline">Написать в Telegram</span>
    </a>
  )
}
