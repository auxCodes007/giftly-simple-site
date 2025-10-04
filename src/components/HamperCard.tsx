import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HamperCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

const HamperCard = ({ title, description, price, image }: HamperCardProps) => {
  return (
    <Card className="overflow-hidden card-hover bg-gradient-card border-border group">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">{price}</span>
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HamperCard;
