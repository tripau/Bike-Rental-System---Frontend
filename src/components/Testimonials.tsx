import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Mehta",
      location: "Delhi",
      rating: 5,
      text: "Soul Ride Rentals made my weekend trip to the hills absolutely incredible. The Royal Enfield Hunter was in perfect condition, and the service was top-notch. Will definitely book again!",
      bike: "Royal Enfield Hunter 350"
    },
    {
      name: "Priya Sharma",
      location: "Bangalore",
      rating: 5,
      text: "As a solo female traveler, I felt completely safe and supported. The team was professional, the bike was immaculate, and the entire experience was seamless. Highly recommended!",
      bike: "Honda H'ness CB350"
    },
    {
      name: "Rohan Kumar",
      location: "Chennai",
      rating: 5,
      text: "The Meteor 350 was perfect for my coastal ride. Smooth, comfortable, and reliable. Soul Ride's attention to detail and customer service sets them apart from other rental services.",
      bike: "Royal Enfield Meteor 350"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Rider <span className="font-script text-copper">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our riders have to say about their Soul Ride experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="p-6 relative group hover:shadow-bike transition-all duration-500 hover:border-copper/50 animate-ride-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-copper/20 group-hover:text-copper/40 transition-colors" />

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-copper text-copper' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Bike Info */}
                <div className="text-sm text-copper font-medium">
                  Rode: {testimonial.bike}
                </div>

                {/* User Info */}
                <div className="pt-4 border-t border-border/50">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to create your own story?
          </p>
          <div className="inline-block animate-glow">
            <div className="text-4xl">🏍️</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;