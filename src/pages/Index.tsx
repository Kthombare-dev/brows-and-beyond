import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import BookingForm from "@/components/BookingForm";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Reviews />
      <BookingForm />
      <Instagram />
      <Footer />
    </div>
  );
};

export default Index;
