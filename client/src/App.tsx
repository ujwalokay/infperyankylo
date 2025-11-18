import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/home";
import Features from "@/pages/features";
import PricingBreakdown from "@/pages/pricing-breakdown";
import PricingBest from "@/pages/pricing-best";
import PricingPro from "@/pages/pricing-pro";
import NotFound from "@/pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={PricingBreakdown} />
        <Route path="/pricing-best" component={PricingBest} />
        <Route path="/pricing-pro" component={PricingPro} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full relative">
      <div className="animated-grid-background" />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
