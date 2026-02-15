
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "./components/Hero";
import { AgeNavigator } from "./components/AgeNavigator";
import { FeaturedCollection } from "./components/FeaturedCollection";
import { ValueProps } from "./components/ValueProps";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
          <Hero />
          <AgeNavigator />
          <FeaturedCollection />
          <ValueProps />
          <Testimonials />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
