import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-gift.jpg";

const Hero = () => {
  const scrollToHampers = () => {
    const element = document.getElementById("hampers");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Gifts That Create
            <span className="block text-accent">Lasting Memories</span>
          </h1>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Discover our curated collection of premium gift hampers and celebration packages, 
            perfectly crafted for every special occasion.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={scrollToHampers}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
            >
              Explore Hampers
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary"
            >
              Gift Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
