
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { Leaf, ShieldCheck, HeartHandshake } from "lucide-react";

export function ValueProps() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-display text-center mb-16 text-foreground">Why Timber & Tulle?</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-primary min-h-[300px] lg:min-h-[400px] xl:min-h-[300px]"
            className=""
          >
            <div className="max-w-lg">
              <div className="flex items-center gap-3 mb-4 text-primary-foreground">
                <HeartHandshake className="w-8 h-8" />
                <span className="uppercase tracking-widest text-sm font-bold">The Artisan Way</span>
              </div>
              <h2 className="text-left text-balance text-3xl md:text-5xl font-display tracking-[-0.015em] text-foreground">
                Handcrafted with love, not assembly lines.
              </h2>
              <p className="mt-4 text-left  text-base/6 text-primary-foreground/90 font-body">
                Every toy in our collection is shaped by skilled artisans who pour their heart into every curve. We believe in toys that carry a soul, not just a barcode.
              </p>
            </div>
            <img
              src="/images/craft-hands.png"
              width={500}
              height={500}
              alt="Artisan hands carving wood"
              className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl opacity-50 rotate-12"
            />
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-accent">
             <div className="flex items-center gap-3 mb-4 text-accent-foreground">
                <Leaf className="w-8 h-8" />
                <span className="uppercase tracking-widest text-sm font-bold">Earth Friendly</span>
              </div>
            <h2 className="max-w-80 text-left text-balance text-3xl font-display tracking-[-0.015em] text-foreground">
              Sustainable Timber
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-accent-foreground/90 font-body">
              Sourced from responsibly managed forests. Finished with beeswax and natural oils.
            </p>
          </WobbleCard>
          
          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-secondary min-h-[300px]">
             <div className="flex items-center gap-3 mb-4 text-secondary-foreground">
                <ShieldCheck className="w-8 h-8" />
                <span className="uppercase tracking-widest text-sm font-bold">Safety First</span>
              </div>
            <h2 className="max-w-80 text-left text-balance text-3xl font-display tracking-[-0.015em] text-foreground">
              Non-Toxic & Safe
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-secondary-foreground/90 font-body">
              Tested to the highest safety standards. No nasty chemicals, just pure natural goodness for your little ones to chew, throw, and love.
            </p>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default ValueProps;
