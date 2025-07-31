import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BikeShowcase from "@/components/BikeShowcase";
import CitySelector from "@/components/CitySelector";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <section id="bikes">
          <BikeShowcase />
        </section>
        <section id="cities">
          <CitySelector />
        </section>
        <section id="booking">
          <BookingForm />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
