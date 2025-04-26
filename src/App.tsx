
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// Import calculator components
import WalkingCalculator from "./components/calculators/WalkingCalculator";
import RunningCalculator from "./components/calculators/RunningCalculator";
import CyclingCalculator from "./components/calculators/CyclingCalculator";
import SwimmingCalculator from "./components/calculators/SwimmingCalculator";
import WeightliftingCalculator from "./components/calculators/WeightliftingCalculator";
import HIITCalculator from "./components/calculators/HIITCalculator";
import YogaCalculator from "./components/calculators/YogaCalculator";
import HouseholdCalculator from "./components/calculators/HouseholdCalculator";
import HikingCalculator from "./components/calculators/HikingCalculator";
import NEATCalculator from "./components/calculators/NEATCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          {/* Calculator Routes */}
          <Route path="/walking" element={<WalkingCalculator />} />
          <Route path="/running" element={<RunningCalculator />} />
          <Route path="/cycling" element={<CyclingCalculator />} />
          <Route path="/swimming" element={<SwimmingCalculator />} />
          <Route path="/weightlifting" element={<WeightliftingCalculator />} />
          <Route path="/hiit" element={<HIITCalculator />} />
          <Route path="/yoga" element={<YogaCalculator />} />
          <Route path="/household" element={<HouseholdCalculator />} />
          <Route path="/hiking" element={<HikingCalculator />} />
          <Route path="/neat" element={<NEATCalculator />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
