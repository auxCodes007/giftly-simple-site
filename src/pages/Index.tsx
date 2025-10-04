import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HamperCard from "@/components/HamperCard";
import CategoryCard from "@/components/CategoryCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Briefcase, Calendar, Check } from "lucide-react";

import hamperGourmet from "@/assets/hamper-gourmet.jpg";
import hamperCelebration from "@/assets/hamper-celebration.jpg";
import hamperWellness from "@/assets/hamper-wellness.jpg";
import hamperCorporate from "@/assets/hamper-corporate.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Hampers Section */}
      <section id="hampers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Gift Hampers</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked collections designed to delight and surprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HamperCard
              title="Gourmet Delights"
              description="Artisan chocolates, premium nuts, and gourmet treats"
              price="$89"
              image={hamperGourmet}
            />
            <HamperCard
              title="Celebration Box"
              description="Champagne, flowers, and celebration essentials"
              price="$129"
              image={hamperCelebration}
            />
            <HamperCard
              title="Wellness Retreat"
              description="Spa essentials, candles, and relaxation items"
              price="$99"
              image={hamperWellness}
            />
            <HamperCard
              title="Corporate Excellence"
              description="Fine wine, gourmet snacks, and elegant presentation"
              price="$149"
              image={hamperCorporate}
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gift by Occasion</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect gift for every celebration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CategoryCard
              title="Special Occasions"
              description="Birthdays, anniversaries, and milestone celebrations"
              icon={Sparkles}
            />
            <CategoryCard
              title="Romantic Gifts"
              description="Express your love with thoughtful presents"
              icon={Heart}
            />
            <CategoryCard
              title="Corporate Gifting"
              description="Professional gifts for business relationships"
              icon={Briefcase}
            />
            <CategoryCard
              title="Seasonal Gifts"
              description="Holiday hampers and seasonal specialties"
              icon={Calendar}
            />
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="plans" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gift Plans</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Never miss an occasion with our convenient gift plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 border-border hover:shadow-elegant transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Monthly</h3>
              <p className="text-muted-foreground mb-6">Perfect for regular gifting</p>
              <div className="text-4xl font-bold text-primary mb-6">$79<span className="text-lg text-muted-foreground">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>1 curated hamper per month</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Personalized message card</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Choose Plan</Button>
            </Card>

            <Card className="p-8 border-primary shadow-elegant relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Quarterly</h3>
              <p className="text-muted-foreground mb-6">Best value for celebrations</p>
              <div className="text-4xl font-bold text-primary mb-6">$219<span className="text-lg text-muted-foreground">/3mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>3 premium hampers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Free delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Premium packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Save 10%</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Choose Plan</Button>
            </Card>

            <Card className="p-8 border-border hover:shadow-elegant transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Annual</h3>
              <p className="text-muted-foreground mb-6">Ultimate gifting solution</p>
              <div className="text-4xl font-bold text-primary mb-6">$799<span className="text-lg text-muted-foreground">/year</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>12 luxury hampers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Free express delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Luxury packaging</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Save 20%</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90">Choose Plan</Button>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
