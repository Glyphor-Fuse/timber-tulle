
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-display">Timber & Tulle</h2>
            <p className="text-background/70 font-body text-sm leading-relaxed max-w-xs">
              Handcrafted wooden toys for the modern nursery. Built to last, designed to love.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-background/10 text-background rounded-full">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 text-background rounded-full">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-background/10 text-background rounded-full">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Shop</h3>
            <ul className="space-y-4 text-background/80 font-body text-sm">
              <li className="hover:text-background cursor-pointer transition-colors">New Arrivals</li>
              <li className="hover:text-background cursor-pointer transition-colors">Best Sellers</li>
              <li className="hover:text-background cursor-pointer transition-colors">Shop by Age</li>
              <li className="hover:text-background cursor-pointer transition-colors">Gift Cards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Help</h3>
            <ul className="space-y-4 text-background/80 font-body text-sm">
              <li className="hover:text-background cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-background cursor-pointer transition-colors">Care Instructions</li>
              <li className="hover:text-background cursor-pointer transition-colors">FAQ</li>
              <li className="hover:text-background cursor-pointer transition-colors">Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-primary">Stay in the Loop</h3>
            <p className="text-background/70 text-sm mb-4">Join our newsletter for magic in your inbox.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="bg-background/10 border-none rounded-lg px-4 py-2 text-sm text-background placeholder:text-background/40 focus:ring-1 focus:ring-primary w-full"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90 rounded-lg shrink-0 text-primary-foreground">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 text-center text-background/40 text-xs font-body">
          <p>&copy; {new Date().getFullYear()} Timber & Tulle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
