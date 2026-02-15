
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20 pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }} 
          className="absolute top-10 left-[10%] w-64 h-64 bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-4 rounded-full bg-background/50 border border-primary/20 backdrop-blur-sm shadow-sm">
            <SparklesCore className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground tracking-wide uppercase">Spring Collection Live</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-display text-foreground leading-[1.1]">
            Handcrafted <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Wonder</span> & Joy
          </h1>
          
          <p className="text-xl text-muted-foreground font-body max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Heirloom-quality wooden toys designed to spark imagination. Sustainable, safe, and sprinkled with a little bit of magic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="rounded-full text-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-primary-foreground border-none">
              Shop New Arrivals
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-lg h-14 px-8 border-2 border-primary/20 hover:bg-primary/5 hover:text-primary">
              Our Story
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden border-8 border-border shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 ease-in-out">
            <img 
              src="/images/hero-toy.png" 
              alt="Whimsical wooden toy set" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 md:bottom-8 md:-left-12 bg-background p-4 rounded-2xl shadow-xl border border-secondary/20 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent-foreground font-bold">
                5★
              </div>
              <span className="font-bold text-foreground">Parent Approved</span>
            </div>
            <p className="text-xs text-muted-foreground">"The most beautiful toys we've ever owned. Pure magic!"</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Cloud Separator */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-background">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
