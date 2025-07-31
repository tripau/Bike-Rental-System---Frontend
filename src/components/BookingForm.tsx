import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, MapPin, Clock, User } from "lucide-react";

const BookingForm = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Book Your <span className="font-script text-copper">Ride</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to hit the road? Fill in your details and we'll get you riding in no time.
            </p>
          </div>

          <Card className="p-8 shadow-bike border-copper/20">
            <form className="grid md:grid-cols-2 gap-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-copper" />
                  Personal Details
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+91 98765 43210" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="license">Driving License Number</Label>
                  <Input id="license" placeholder="DL License Number" />
                </div>
              </div>

              {/* Booking Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-copper" />
                  Booking Details
                </h3>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="chennai">Chennai</SelectItem>
                      <SelectItem value="kolkata">Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bike">Preferred Bike</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose your bike" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hunter350">Royal Enfield Hunter 350</SelectItem>
                      <SelectItem value="meteor350">Royal Enfield Meteor 350</SelectItem>
                      <SelectItem value="scram350">Royal Enfield Scram 350</SelectItem>
                      <SelectItem value="cb350">Honda H'ness CB350</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input id="startDate" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endDate">End Date</Label>
                    <Input id="endDate" type="date" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickupTime">Pickup Time</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pickup time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="12pm">12:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="6pm">6:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-6">
                <Button variant="copper" size="lg" className="w-full group">
                  <MapPin className="group-hover:animate-engine-pulse" />
                  Confirm Booking
                  <div className="group-hover:animate-engine-pulse">🏍️</div>
                </Button>
                
                <p className="text-sm text-muted-foreground text-center mt-4">
                  By booking, you agree to our terms and conditions. We'll contact you within 30 minutes to confirm your booking.
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;