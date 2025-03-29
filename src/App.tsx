
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CropMonitoring from "./pages/CropMonitoring";
import Marketplace from "./pages/Marketplace";
import WeatherSoil from "./pages/WeatherSoil";
import PestDetection from "./pages/PestDetection";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crops" element={<CropMonitoring />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/weather-soil" element={<WeatherSoil />} />
          <Route path="/pests" element={<PestDetection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
