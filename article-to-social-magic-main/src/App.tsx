import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporateHome from "./pages/variants/CorporateHome";
import FriendlyHome from "./pages/variants/FriendlyHome";
import TechnicalHome from "./pages/variants/TechnicalHome";
import PlayfulHome from "./pages/variants/PlayfulHome";
import MinimalHome from "./pages/variants/MinimalHome";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/v/corporate" element={<CorporateHome />} />
          <Route path="/v/friendly" element={<FriendlyHome />} />
          <Route path="/v/technical" element={<TechnicalHome />} />
          <Route path="/v/playful" element={<PlayfulHome />} />
          <Route path="/v/minimal" element={<MinimalHome />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
