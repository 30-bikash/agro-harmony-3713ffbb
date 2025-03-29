
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

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/crops" element={<CropMonitoring />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/weather-soil" element={<WeatherSoil />} />
          <Route path="/pests" element={<PestDetection />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
