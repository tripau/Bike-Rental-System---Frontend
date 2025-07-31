import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              Soul<span className="font-script text-copper">Ride</span>
            </div>
            <div className="text-2xl animate-engine-pulse">🏍️</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#bikes" className="text-foreground hover:text-copper transition-colors">
              Bikes
            </a>
            <a href="#cities" className="text-foreground hover:text-copper transition-colors">
              Cities
            </a>
            <a href="#booking" className="text-foreground hover:text-copper transition-colors">
              Book Now
            </a>
            <a href="#testimonials" className="text-foreground hover:text-copper transition-colors">
              Reviews
            </a>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <Button variant="copper" size="sm">
              <MapPin className="w-4 h-4" />
              Rent Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <a href="#bikes" className="text-foreground hover:text-copper transition-colors">
                Bikes
              </a>
              <a href="#cities" className="text-foreground hover:text-copper transition-colors">
                Cities
              </a>
              <a href="#booking" className="text-foreground hover:text-copper transition-colors">
                Book Now
              </a>
              <a href="#testimonials" className="text-foreground hover:text-copper transition-colors">
                Reviews
              </a>
              <div className="pt-4 border-t border-border/50">
                <Button variant="copper" className="w-full">
                  <MapPin className="w-4 h-4" />
                  Rent Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;