import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "next-themes"
import Index from "./pages/Index"
import NotFound from "./pages/NotFound"
import Raznorabochie from "./pages/Raznorabochie"
import Gruzchiki from "./pages/Gruzchiki"
import RemontKvartir from "./pages/RemontKvartir"
import Elektrika from "./pages/Elektrika"
import MasterNaChas from "./pages/MasterNaChas"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/raznorabochie" element={<Raznorabochie />} />
            <Route path="/gruzchiki" element={<Gruzchiki />} />
            <Route path="/remont-kvartir" element={<RemontKvartir />} />
            <Route path="/elektrika" element={<Elektrika />} />
            <Route path="/master-na-chas" element={<MasterNaChas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
)

export default App