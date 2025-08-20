import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const detailedServices = [
  {
    id: 1,
    title: "Microblading",
    description: "Natural hair strokes for fuller, defined brows that last 1-2 years with proper care",
    detailedDescription: "Microblading is a semi-permanent makeup technique that creates natural-looking eyebrow hair strokes using a fine blade. This technique is perfect for those who want to enhance their natural brows or create brows from scratch.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg",
    price: "₹12,000",
    originalPrice: "₹15,000",
    duration: "2-3 hours",
    healingTime: "4-6 weeks",
    touchUp: "6-8 weeks",
    reviews: 127,
    category: "Eyebrows",
    features: [
      "Natural hair-like strokes",
      "Customized to your face shape",
      "Lasts 1-2 years with proper care",
      "Perfect for sparse or missing brows",
      "Low maintenance after healing"
    ],
    procedure: [
      "Consultation and design",
      "Numbing cream application",
      "Hair stroke creation",
      "Color matching",
      "Aftercare instructions"
    ],
    aftercare: [
      "Keep area dry for 7-10 days",
      "Avoid swimming and saunas",
      "No makeup on treated area",
      "Apply healing ointment as directed",
      "Avoid sun exposure"
    ]
  },
  {
    id: 2,
    title: "Combination Brows",
    description: "Best of both worlds - hair strokes + shading for natural yet defined look",
    detailedDescription: "Combination brows combine microblading hair strokes with shading to create the most natural and defined eyebrow look. This technique is ideal for those who want both definition and fullness.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/combo-2-1.webp",
    price: "₹15,000",
    originalPrice: "₹18,000",
    duration: "2.5-3.5 hours",
    healingTime: "4-6 weeks",
    touchUp: "6-8 weeks",
    reviews: 94,
    category: "Eyebrows",
    features: [
      "Hair strokes + shading technique",
      "Most natural-looking results",
      "Perfect for all skin types",
      "Long-lasting results",
      "Customized design"
    ],
    procedure: [
      "Detailed consultation",
      "Brow mapping and design",
      "Hair stroke creation",
      "Shading application",
      "Final color adjustment"
    ],
    aftercare: [
      "Keep area clean and dry",
      "Avoid touching or scratching",
      "No makeup for 10-14 days",
      "Apply healing ointment",
      "Protect from sun exposure"
    ]
  },
  {
    id: 3,
    title: "Lip Blush",
    description: "Perfect tint that lasts for years, enhances natural lip color",
    detailedDescription: "Lip blush is a semi-permanent makeup technique that adds natural color and definition to your lips. It enhances your natural lip color and can correct asymmetry while providing a long-lasting tint.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/Lip-tint.webp",
    price: "₹10,000",
    originalPrice: "₹12,500",
    duration: "2-2.5 hours",
    healingTime: "5-7 days",
    touchUp: "6-8 weeks",
    reviews: 156,
    category: "Lips",
    features: [
      "Natural lip color enhancement",
      "Corrects lip asymmetry",
      "Defines lip shape",
      "Long-lasting results",
      "Low maintenance"
    ],
    procedure: [
      "Lip consultation and design",
      "Numbing cream application",
      "Color selection",
      "Pigment application",
      "Aftercare demonstration"
    ],
    aftercare: [
      "Keep lips moisturized",
      "Avoid spicy foods",
      "No lip products for 7 days",
      "Apply healing ointment",
      "Avoid kissing for 7 days"
    ]
  },
  {
    id: 4,
    title: "Microshading",
    description: "Soft powder effect for fuller brows, ideal for oily skin",
    detailedDescription: "Microshading creates a soft, powdered eyebrow effect that mimics the look of filled-in brows. This technique is perfect for those with oily skin or who prefer a more filled-in appearance.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/microshading.jpeg",
    price: "₹14,000",
    originalPrice: "₹17,000",
    duration: "2-3 hours",
    healingTime: "4-6 weeks",
    touchUp: "6-8 weeks",
    reviews: 83,
    category: "Eyebrows",
    features: [
      "Soft powder effect",
      "Ideal for oily skin",
      "Creates fullness",
      "Natural-looking results",
      "Long-lasting color"
    ],
    procedure: [
      "Skin type assessment",
      "Brow design consultation",
      "Shading technique application",
      "Color layering",
      "Final touch-up"
    ],
    aftercare: [
      "Keep area dry for 7-10 days",
      "Avoid excessive sweating",
      "No makeup on treated area",
      "Apply healing ointment",
      "Avoid sun exposure"
    ]
  },
  {
    id: 5,
    title: "Lash Curl",
    description: "Perfect curled lashes without daily effort, lasts 6-8 weeks",
    detailedDescription: "Lash curling is a semi-permanent treatment that lifts and curls your natural lashes, giving you the appearance of longer, more defined lashes without the need for daily curling.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2024-03-16-1.webp",
    price: "₹3,500",
    originalPrice: "₹4,500",
    duration: "1-1.5 hours",
    healingTime: "24-48 hours",
    touchUp: "6-8 weeks",
    reviews: 201,
    category: "Eyelashes",
    features: [
      "Natural lash enhancement",
      "No daily curling needed",
      "Long-lasting results",
      "Safe for sensitive eyes",
      "Immediate results"
    ],
    procedure: [
      "Eye consultation",
      "Lash assessment",
      "Curling solution application",
      "Setting and lifting",
      "Aftercare instructions"
    ],
    aftercare: [
      "Keep lashes dry for 24 hours",
      "Avoid rubbing eyes",
      "No mascara for 24 hours",
      "Use oil-free products",
      "Gentle cleansing"
    ]
  },
  {
    id: 6,
    title: "BB Glow",
    description: "Korean glass skin with semi-permanent foundation, instant glow",
    detailedDescription: "BB Glow is a revolutionary treatment that combines skincare with semi-permanent makeup to create a flawless, glowing complexion. It provides coverage while improving skin texture and tone.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-14.webp",
    price: "₹8,000",
    originalPrice: "₹10,000",
    duration: "1.5-2 hours",
    healingTime: "3-5 days",
    touchUp: "4-6 weeks",
    reviews: 67,
    category: "Skin",
    features: [
      "Korean glass skin effect",
      "Semi-permanent foundation",
      "Improves skin texture",
      "Natural coverage",
      "Long-lasting glow"
    ],
    procedure: [
      "Skin analysis",
      "Cleansing and preparation",
      "BB cream application",
      "Glow enhancement",
      "Final setting"
    ],
    aftercare: [
      "Keep skin clean",
      "Avoid heavy makeup",
      "Use gentle cleansers",
      "Apply sunscreen daily",
      "Moisturize regularly"
    ]
  },
  {
    id: 7,
    title: "Permanent Eyeliner",
    description: "Wake up with perfect eyeliner every day, smudge-proof and waterproof",
    detailedDescription: "Permanent eyeliner creates a defined, smudge-proof line that enhances your eyes and saves time on daily makeup application. Perfect for those who want to wake up with perfect eyeliner.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-14.webp",
    price: "₹8,500",
    originalPrice: "₹11,000",
    duration: "2-2.5 hours",
    healingTime: "5-7 days",
    touchUp: "6-8 weeks",
    reviews: 89,
    category: "Eyes",
    features: [
      "Smudge-proof eyeliner",
      "Waterproof results",
      "Saves daily makeup time",
      "Perfect for active lifestyles",
      "Long-lasting definition"
    ],
    procedure: [
      "Eye shape consultation",
      "Eyeliner design",
      "Numbing cream application",
      "Pigment application",
      "Final touch-up"
    ],
    aftercare: [
      "Keep area clean and dry",
      "Avoid eye makeup for 7 days",
      "No swimming for 10 days",
      "Apply healing ointment",
      "Protect from sun exposure"
    ]
  }
];

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted");
    setIsBookingOpen(false);
  };

  const openBooking = (service: any) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const categories = ["All", "Eyebrows", "Eyes", "Lips", "Eyelashes", "Skin"];
  
  const filteredServices = selectedCategory === "All" 
    ? detailedServices 
    : detailedServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of permanent makeup and beauty enhancement services. 
              Each treatment is customized to enhance your natural beauty and boost your confidence.
            </p>
            
            {/* Category Filter Buttons - Capsule Layout */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
                      : "bg-white text-neutral-600 hover:bg-pink-50 border border-neutral-200 hover:border-pink-300"
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
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-pink-500 text-white">
                      {service.duration}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-neutral-900">{service.title}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-pink-600">{service.price}</span>
                      <span className="text-sm text-neutral-500 line-through ml-2">{service.originalPrice}</span>
                    </div>
                  </div>
                  
                  <p className="text-neutral-600 mb-4">{service.detailedDescription}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-pink-50 rounded-lg">
                      <p className="text-sm text-neutral-500">Duration</p>
                      <p className="font-semibold text-neutral-900">{service.duration}</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <p className="text-sm text-neutral-500">Healing Time</p>
                      <p className="font-semibold text-neutral-900">{service.healingTime}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-neutral-600">
                          <svg className="w-4 h-4 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      onClick={() => openBooking(service)}
                      className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700"
                    >
                      Book Now
                    </Button>
                    <a 
                      href={`https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry.`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-200"
                    >
                      Contact Us
                    </a>
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
              Book {selectedService?.title}
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
                Service Selected *
              </label>
              <input
                type="text"
                id="service"
                value={selectedService?.title || ''}
                readOnly
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-neutral-50"
              />
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
