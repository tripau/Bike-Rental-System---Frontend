import BikeCard from "./BikeCard";
import hunterImage from "@/assets/hunter-350.jpg";
import meteorImage from "@/assets/meteor-350.jpg";
import scramImage from "@/assets/scram-350.jpg";
import hondaImage from "@/assets/honda-cb350.jpg";

const BikeShowcase = () => {
  const bikes = [
    {
      name: "Royal Enfield Hunter 350",
      image: hunterImage,
      price: "₹1,200",
      rating: 5,
      reviews: 127,
      specs: {
        engine: "350cc",
        mileage: "36 kmpl",
        type: "Retro"
      },
      description: "A perfect blend of vintage charm and modern engineering. The Hunter 350 delivers an authentic riding experience with its classic design and reliable performance."
    },
    {
      name: "Royal Enfield Meteor 350",
      image: meteorImage,
      price: "₹1,350",
      rating: 5,
      reviews: 89,
      specs: {
        engine: "350cc",
        mileage: "35 kmpl",
        type: "Cruiser"
      },
      description: "Built for long rides and highway cruising. The Meteor 350 offers supreme comfort with its relaxed riding position and smooth power delivery."
    },
    {
      name: "Royal Enfield Scram 350",
      image: scramImage,
      price: "₹1,400",
      rating: 4,
      reviews: 156,
      specs: {
        engine: "350cc",
        mileage: "35 kmpl",
        type: "Adventure"
      },
      description: "Adventure-ready scrambler with upright riding position. Perfect for city streets and weekend getaways with its rugged styling and versatile capabilities."
    },
    {
      name: "Honda H'ness CB350",
      image: hondaImage,
      price: "₹1,250",
      rating: 5,
      reviews: 94,
      specs: {
        engine: "348cc",
        mileage: "45 kmpl",
        type: "Modern Classic"
      },
      description: "Honda's modern take on classic motorcycling. Features advanced technology with traditional aesthetics, delivering exceptional fuel efficiency and reliability."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="font-script text-copper">Premium</span> Fleet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked motorcycles that embody the spirit of Indian roads. Each bike is meticulously maintained and ready for your next adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {bikes.map((bike, index) => (
            <div 
              key={bike.name}
              className="animate-ride-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <BikeCard {...bike} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BikeShowcase;