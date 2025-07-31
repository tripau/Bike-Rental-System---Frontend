import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Zap, Fuel, Users } from "lucide-react";

interface BikeCardProps {
  name: string;
  image: string;
  price: string;
  rating: number;
  reviews: number;
  specs: {
    engine: string;
    mileage: string;
    type: string;
  };
  description: string;
}

const BikeCard = ({ name, image, price, rating, reviews, specs, description }: BikeCardProps) => {
  return (
    <Card className="group bg-card border-border/50 hover:border-copper/50 transition-all duration-500 hover:shadow-bike overflow-hidden">
      {/* Image Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted p-8">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <div className="bg-copper/90 backdrop-blur-sm text-copper-foreground px-3 py-1 rounded-full text-sm font-medium">
            {price}/day
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-copper transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-4 h-4 ${i < rating ? 'fill-copper text-copper' : 'text-muted-foreground'}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-border/50">
          <div className="text-center">
            <Zap className="w-5 h-5 text-copper mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Engine</div>
            <div className="text-sm font-medium">{specs.engine}</div>
          </div>
          <div className="text-center">
            <Fuel className="w-5 h-5 text-copper mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Mileage</div>
            <div className="text-sm font-medium">{specs.mileage}</div>
          </div>
          <div className="text-center">
            <Users className="w-5 h-5 text-copper mx-auto mb-1" />
            <div className="text-xs text-muted-foreground">Type</div>
            <div className="text-sm font-medium">{specs.type}</div>
          </div>
        </div>

        <Button variant="copper" className="w-full group/btn">
          Rent Now
          <div className="group-hover/btn:animate-engine-pulse">🏍️</div>
        </Button>
      </div>
    </Card>
  );
};

export default BikeCard;