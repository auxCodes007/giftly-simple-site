import { Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-gradient">LuxeGift</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("hampers")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hampers
            </button>
            <button 
              onClick={() => scrollToSection("categories")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Categories
            </button>
            <button 
              onClick={() => scrollToSection("plans")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Plans
            </button>
          </nav>

          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
