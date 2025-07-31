import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const CitySelector = () => {
  const cities = [
    {
      name: "Delhi",
      subtitle: "Capital Adventures",
      available: true,
      description: "Explore the historic streets and modern highways of India's capital",
      hours: "24/7 Available",
      contact: "+91 98765 43210"
    },
    {
      name: "Bangalore",
      subtitle: "Tech City Rides",
      available: true,
      description: "Navigate the Silicon Valley of India with style and comfort",
      hours: "6 AM - 11 PM",
      contact: "+91 98765 43211"
    },
    {
      name: "Chennai",
      subtitle: "Coastal Cruising",
      available: true,
      description: "Ride along the beautiful coastline and vibrant city streets",
      hours: "6 AM - 10 PM",
      contact: "+91 98765 43212"
    },
    {
      name: "Kolkata",
      subtitle: "Cultural Journey",
      available: true,
      description: "Experience the cultural capital with its rich heritage and bustling lanes",
      hours: "7 AM - 9 PM",
      contact: "+91 98765 43213"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="font-script text-copper">City</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're present in India's most exciting cities. Select your location to start your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <Card 
              key={city.name}
              className="group p-6 text-center hover:shadow-bike transition-all duration-500 hover:border-copper/50 bg-card animate-ride-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="space-y-4">
                <div className="relative">
                  <MapPin className="w-12 h-12 text-copper mx-auto group-hover:animate-engine-pulse" />
                  {city.available && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-glow" />
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-copper font-script">
                    {city.subtitle}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground">
                  {city.description}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="w-3 h-3" />
                    {city.hours}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-3 h-3" />
                    {city.contact}
                  </div>
                </div>

                <Button 
                  variant={city.available ? "copper" : "secondary"} 
                  className="w-full"
                  disabled={!city.available}
                >
                  {city.available ? "Book Now" : "Coming Soon"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitySelector;