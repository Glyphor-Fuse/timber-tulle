
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Sarah J.",
    role: "Mom of 2",
    text: "The quality is unmatched. My daughter has played with the dollhouse every single day since Christmas.",
    stars: 5,
    video: "/images/video-thumb-1.png" // Placeholder for video
  },
  {
    id: 2,
    author: "Michael T.",
    role: "Gift Giver",
    text: "Presentation was stunning. The unboxing experience felt so special, like opening a treasure chest.",
    stars: 5,
    video: "/images/video-thumb-2.png"
  },
  {
    id: 3,
    author: "Emily R.",
    role: "Montessori Teacher",
    text: "Finally, toys that aren't plastic junk! These are beautiful tools for learning and open-ended play.",
    stars: 5,
    video: "/images/video-thumb-3.png"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-t from-background to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display text-foreground mb-4">Little Smiles, Big Moments</h2>
          <p className="text-muted-foreground font-body">Join thousands of happy families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-[2rem] p-6 shadow-sm border border-border/50 flex flex-col"
            >
              {/* "Video" Thumbnail */}
              <div className="relative aspect-video rounded-2xl bg-muted overflow-hidden mb-6 group cursor-pointer">
                <img src={review.video} alt="Review thumbnail" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-primary border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chart-4 text-chart-4" />
                ))}
              </div>
              
              <p className="text-foreground/80 font-body italic mb-6 flex-grow">"{review.text}"</p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{review.author}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
