import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">
                Soul<span className="font-script text-copper">Ride</span>
              </div>
              <div className="text-2xl">🏍️</div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Experience the freedom of the open road with premium motorcycles across India's most vibrant cities.
            </p>
            <div className="flex gap-4">
              <Instagram className="w-5 h-5 text-copper hover:text-copper/80 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-copper hover:text-copper/80 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-copper hover:text-copper/80 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-copper">Quick Links</h3>
            <div className="space-y-2">
              <a href="#bikes" className="block text-primary-foreground/80 hover:text-copper transition-colors">
                Our Bikes
              </a>
              <a href="#cities" className="block text-primary-foreground/80 hover:text-copper transition-colors">
                Cities
              </a>
              <a href="#booking" className="block text-primary-foreground/80 hover:text-copper transition-colors">
                Book Now
              </a>
              <a href="#testimonials" className="block text-primary-foreground/80 hover:text-copper transition-colors">
                Reviews
              </a>
            </div>
          </div>

          {/* Cities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-copper">Our Cities</h3>
            <div className="space-y-2">
              <div className="text-primary-foreground/80">Delhi</div>
              <div className="text-primary-foreground/80">Bangalore</div>
              <div className="text-primary-foreground/80">Chennai</div>
              <div className="text-primary-foreground/80">Kolkata</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-copper">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-copper" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-copper" />
                <span className="text-primary-foreground/80">hello@soulride.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-copper mt-1" />
                <span className="text-primary-foreground/80">
                  Available across Delhi, Bangalore, Chennai & Kolkata
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Soul Ride Rentals. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-copper transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-copper transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-copper transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;