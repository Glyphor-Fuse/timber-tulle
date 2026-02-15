
import { motion } from "framer-motion";
import { Puzzle, Rocket, Star } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: "Tiny Hands",
    age: "0-2 Years",
    desc: "Sensory & Motor Skills",
    icon: <Star className="w-8 h-8" />,
    colorClass: "bg-chart-1/10", // Pink tint
    textClass: "text-chart-1",
    image: "/images/cat-baby.png"
  },
  {
    id: 2,
    title: "Curious Minds",
    age: "3-5 Years",
    desc: "Imaginative Play",
    icon: <Star className="w-8 h-8" />,
    colorClass: "bg-chart-5/10", // Blue tint
    textClass: "text-chart-5",
    image: "/images/cat-toddler.png"
  },
  {
    id: 3,
    title: "Little Builders",
    age: "6+ Years",
    desc: "Logic & Strategy",
    icon: <Puzzle className="w-8 h-8" />,
    colorClass: "bg-chart-3/10", // Lavender tint
    textClass: "text-chart-3",
    image: "/images/cat-builder.png"
  },
  {
    id: 4,
    title: "Dreamers",
    age: "All Ages",
    desc: "Decor & Keepsakes",
    icon: <Rocket className="w-8 h-8" />,
    colorClass: "bg-chart-2/10", // Mint tint
    textClass: "text-chart-2",
    image: "/images/cat-decor.png"
  }
];

export function AgeNavigator() {
  return (
    <section className="py-24 bg-background relative z-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">Find the Perfect Gift</h2>
          <p className="text-lg text-muted-foreground font-body">Shop by developmental milestone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 1 : -1 }}
              className={`relative overflow-hidden rounded-3xl cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 ${item.colorClass}`}
            >
              <div className="p-8 h-full flex flex-col justify-between relative z-10 min-h-[320px]">
                <div>
                  <div className={`p-3 rounded-2xl bg-background/60 w-fit backdrop-blur-sm mb-6 ${item.textClass}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-bold font-display mb-1 ${item.textClass}`}>{item.title}</h3>
                  <span className="text-sm font-bold uppercase tracking-wider opacity-70 block mb-2">{item.age}</span>
                  <p className="text-sm opacity-80 font-body leading-relaxed">{item.desc}</p>
                </div>
                
                <div className="mt-4 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
                  Explore Collection →
                </div>
              </div>

              {/* Decorative Image Overlap */}
              <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-80 group-hover:scale-110 transition-transform duration-500">
                 <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AgeNavigator;
