import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allServices = [
  {
    id: 1,
    title: "Microblading",
    description: "Natural hair strokes for fuller, defined brows that last 1-2 years with proper care",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg",
    price: "₹12,000",
    originalPrice: "₹15,000",
    reviews: 127,
    duration: "2-3 hours",
    category: "Eyebrows",
    features: [
      "Natural hair-like strokes",
      "Lasts 1-2 years",
      "Perfect for sparse brows",
      "Customized to your face shape",
      "Touch-up included after 6-8 weeks"
    ]
  },
  {
    id: 2,
    title: "Combination Brows",
    description: "Best of both worlds - hair strokes + shading for natural yet defined look",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/combo-2-1.webp",
    price: "₹15,000",
    originalPrice: "₹18,000",
    reviews: 94,
    duration: "2.5-3.5 hours",
    category: "Eyebrows",
    features: [
      "Hair strokes + powder shading",
      "Most natural looking result",
      "Suitable for all skin types",
      "Lasts 1-2 years",
      "Perfect for any brow shape"
    ]
  },
  {
    id: 3,
    title: "Lip Blush",
    description: "Perfect tint that lasts for years, enhances natural lip color",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/Lip-tint.webp",
    price: "₹10,000",
    originalPrice: "₹12,500",
    reviews: 156,
    duration: "2-2.5 hours",
    category: "Lips",
    features: [
      "Natural lip enhancement",
      "Lasts 2-3 years",
      "Custom color matching",
      "Defines lip shape",
      "No more daily lipstick needed"
    ]
  },
  {
    id: 4,
    title: "Microshading",
    description: "Soft powder effect for fuller brows, ideal for oily skin",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/microshading.jpeg",
    price: "₹14,000",
    originalPrice: "₹17,000",
    reviews: 83,
    duration: "2-3 hours",
    category: "Eyebrows",
    features: [
      "Soft powder effect",
      "Ideal for oily skin",
      "Creates fuller appearance",
      "Lasts 1-2 years",
      "Low maintenance"
    ]
  },
  {
    id: 5,
    title: "Lash Curl",
    description: "Perfect curled lashes without daily effort, lasts 6-8 weeks",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2024-03-16-1.webp",
    price: "₹3,500",
    originalPrice: "₹4,500",
    reviews: 201,
    duration: "1-1.5 hours",
    category: "Eyelashes",
    features: [
      "Natural curl effect",
      "Lasts 6-8 weeks",
      "No daily curling needed",
      "Safe and gentle",
      "Suitable for all lash types"
    ]
  },
  {
    id: 6,
    title: "BB Glow",
    description: "Korean glass skin with semi-permanent foundation, instant glow",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-14.webp",
    price: "₹8,000",
    originalPrice: "₹10,000",
    reviews: 67,
    duration: "1.5-2 hours",
    category: "Skin",
    features: [
      "Korean glass skin effect",
      "Semi-permanent foundation",
      "Even skin tone",
      "Natural glow",
      "Lasts 6-12 months"
    ]
  },
  {
    id: 7,
    title: "Permanent Eyeliner",
    description: "Wake up with perfect eyeliner every day, smudge-proof and waterproof",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2023-02-21-1-1-1.webp",
    price: "₹8,500",
    originalPrice: "₹11,000",
    reviews: 89,
    duration: "2-2.5 hours",
    category: "Eyes",
    features: [
      "Smudge-proof eyeliner",
      "Waterproof and long-lasting",
      "Customizable thickness",
      "Perfect for all eye shapes",
      "No daily application needed"
    ]
  },
  {
    id: 8,
    title: "Lip Liner",
    description: "Define and enhance your natural lip shape with permanent lip liner",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/About-Sonali-Bhasin.jpg",
    price: "₹6,500",
    originalPrice: "₹8,000",
    reviews: 45,
    duration: "1.5-2 hours",
    category: "Lips",
    features: [
      "Defines lip shape",
      "Prevents lipstick bleeding",
      "Natural looking",
      "Lasts 2-3 years",
      "Customizable color"
    ]
  },
  {
    id: 9,
    title: "Eyelash Extensions",
    description: "Full, voluminous lashes that look natural and last for weeks",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg",
    price: "₹4,500",
    originalPrice: "₹5,500",
    reviews: 112,
    duration: "2-3 hours",
    category: "Eyelashes",
    features: [
      "Natural looking extensions",
      "Lasts 3-4 weeks",
      "Customizable volume",
      "Safe and comfortable",
      "Professional application"
    ]
  }
];

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted");
    setIsBookingOpen(false);
  };

  const categories = ["All", "Eyebrows", "Eyes", "Lips", "Eyelashes", "Skin"];
  
  const filteredServices = selectedCategory === "All" 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Discover our complete range of permanent makeup and beauty enhancement services. 
              Each service is tailored to enhance your natural beauty with expert precision.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-neutral-600 hover:bg-pink-50 border border-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium text-neutral-700 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                      <span className="text-sm text-neutral-500 line-through ml-2">{service.originalPrice}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 text-sm mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-neutral-500">({service.reviews} reviews)</span>
                    </div>
                    <span className="text-xs text-neutral-500 bg-neutral-100 px-2 py-1 rounded">
                      {service.duration}
                    </span>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-neutral-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-xs text-neutral-600 flex items-center">
                          <svg className="w-3 h-3 text-pink-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setIsBookingOpen(true)}
                      className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                      Book Now
                    </button>
                    <button className="px-4 py-3 border border-neutral-300 text-neutral-600 font-semibold rounded-lg hover:bg-neutral-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-neutral-900">
              Schedule Your Transformation
            </DialogTitle>
            <p className="text-neutral-600 mt-2">
              Fill out the form below to book your consultation
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                Service Interested In *
              </label>
              <select
                id="service"
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
              >
                <option value="">Select a service</option>
                {allServices.map((service) => (
                  <option key={service.id} value={service.title.toLowerCase()}>
                    {service.title} - {service.price}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                Additional Notes
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all duration-300"
              >
                Confirm Appointment
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsBookingOpen(false)}
                className="px-6 py-3 rounded-lg"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Services;
