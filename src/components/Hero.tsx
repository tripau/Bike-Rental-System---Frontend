import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-rider.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Motorcycle rider at dawn" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto animate-ride-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Ride Your
            <span className="block font-script text-copper text-6xl md:text-8xl">
              Soul
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Experience the freedom of the open road with premium motorcycles across India's most vibrant cities
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="hero" className="group">
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="chrome" size="lg" className="group">
              <MapPin className="group-hover:animate-engine-pulse" />
              Choose Your City
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center">
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-3xl font-bold text-copper">4</div>
              <div className="text-sm opacity-80">Premium Bikes</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-copper">4</div>
              <div className="text-sm opacity-80">Cities</div>
            </div>
            <div className="animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-3xl font-bold text-copper">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-copper/50 rounded-full" />
      </div>
    </section>
  );
};

export default Hero;