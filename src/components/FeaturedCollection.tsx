
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "The Forest Stacker",
    price: "$34.00",
    image: "/images/prod-stacker.png",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Timber Express Train",
    price: "$58.00",
    image: "/images/prod-train.png",
    tag: "New"
  },
  {
    id: 3,
    name: "Pastel Rainbow Ark",
    price: "$42.00",
    image: "/images/prod-ark.png",
    tag: null
  },
  {
    id: 4,
    name: "Heirloom Dollhouse",
    price: "$120.00",
    image: "/images/prod-house.png",
    tag: "Limited"
  }
];

export function FeaturedCollection() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-display text-foreground mb-2">Curated Favorites</h2>
            <p className="text-muted-foreground font-body">Loved by little ones, trusted by parents.</p>
          </div>
          <Button variant="ghost" className="hidden md:flex text-primary hover:text-primary/80">
            View All Toys →
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-card rounded-[2rem] p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
              {product.tag && (
                <Badge className="absolute top-6 left-6 z-10 bg-accent text-accent-foreground border-0 hover:bg-accent/90">
                  {product.tag}
                </Badge>
              )}
              
              <div className="relative aspect-square rounded-[1.5rem] overflow-hidden bg-background mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-background/80 text-muted-foreground hover:text-destructive hover:bg-background transition-colors opacity-0 group-hover:opacity-100 cursor-pointer">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="px-2 pb-2">
                <h3 className="font-display text-lg text-foreground mb-1">{product.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-4">Solid Beechwood</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg text-foreground">{product.price}</span>
                  <Button size="icon" className="rounded-full bg-foreground hover:bg-primary transition-colors h-10 w-10 text-primary-foreground">
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="ghost" className="text-primary">View All Toys →</Button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
