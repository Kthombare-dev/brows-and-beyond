import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import eyebrowsResult from "@/assets/eyebrows-result.jpg";
import lipBlush from "@/assets/lip-blush.jpg";
import microbladingHero from "@/assets/microblading-hero.jpg";

const services = [
  {
    id: 1,
    title: "Microblading",
    description: "Natural hair strokes for fuller, defined brows that last 1-2 years with proper care",
    image: microbladingHero,
    price: "₹12,000",
    originalPrice: "₹15,000",
    reviews: 127
  },
  {
    id: 2,
    title: "Combination Brows",
    description: "Best of both worlds - hair strokes + shading for natural yet defined look",
    image: eyebrowsResult,
    price: "₹15,000",
    originalPrice: "₹18,000",
    reviews: 94
  },
  {
    id: 3,
    title: "Lip Blush",
    description: "Perfect tint that lasts for years, enhances natural lip color",
    image: lipBlush,
    price: "₹10,000",
    originalPrice: "₹12,500",
    reviews: 156
  },
  {
    id: 4,
    title: "Microshading",
    description: "Soft powder effect for fuller brows, ideal for oily skin",
    image: eyebrowsResult,
    price: "₹14,000",
    originalPrice: "₹17,000",
    reviews: 83
  },
  {
    id: 5,
    title: "Lash Curl",
    description: "Perfect curled lashes without daily effort, lasts 6-8 weeks",
    image: microbladingHero,
    price: "₹3,500",
    originalPrice: "₹4,500",
    reviews: 201
  },
  {
    id: 6,
    title: "BB Glow",
    description: "Korean glass skin with semi-permanent foundation, instant glow",
    image: lipBlush,
    price: "₹8,000",
    originalPrice: "₹10,000",
    reviews: 67
  },
  {
    id: 7,
    title: "Permanent Eyeliner",
    description: "Wake up with perfect eyeliner every day, smudge-proof and waterproof",
    image: eyebrowsResult,
    price: "₹8,500",
    originalPrice: "₹11,000",
    reviews: 89
  }
];

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted");
    setIsBookingOpen(false);
  };

  return (
    <section id="services-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-vnx6jhbg">
        <div className="text-center mb-16" id="el-qmp8ldan">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4" id="el-el5n0560">Services</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto" id="el-tu0wlkwb">Transform your features with expert permanent makeup artistry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="el-di3wnegr">
          {/* Show only first 6 services */}
          {/* Microblading */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 to-rose-100 hover:shadow-2xl transition-all duration-300" id="el-z4ouiyrd">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-0towzxxc">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center" id="el-mobq4ysx">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-ngqxm7mv">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-jepdhusc"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-2cy17vqr">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg" alt="Microblading" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300 active-edit-image" id="el-rmijc7eo" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-tpgiqcwy"></div>
            </div>
            <div className="p-6" id="el-zs2itfrz">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-vrm2narp">Microblading</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-7ybzbmh2">Natural hair strokes for fuller, defined brows that last 1-2 years with proper care</p>
              <div className="flex items-center justify-between mb-4" id="el-srwce4ee">
                <span className="text-2xl font-bold text-pink-600" id="el-upk6f98c">₹12,000</span>
                <span className="text-sm text-neutral-500 line-through" id="el-w1u300th">₹15,000</span>
              </div>
              <div className="flex items-center mb-4" id="el-u4zy6dzv">
                <div className="flex text-yellow-400" id="el-ws9lohe8">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-47kx9elz"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-gt686xl3"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-rncjftcd"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-e35395yx"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-atby3hb4"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-nlrl70vj"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-bj4ft1jj"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-yd67xb8k"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-of3y6br1"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-9znotoh9"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-d8bxygrj">(127 reviews)</span>
              </div>
              <div className="flex gap-3">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" id="el-x76gwrqi">
                      Book Now
                    </button>
                  </DialogTrigger>
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
                          <option value="microblading">Microblading</option>
                          <option value="combination-brows">Combination Brows</option>
                          <option value="lip-blush">Lip Blush</option>
                          <option value="microshading">Microshading</option>
                          <option value="lash-curl">Lash Curl</option>
                          <option value="bb-glow">BB Glow</option>
                          <option value="permanent-eyeliner">Permanent Eyeliner</option>
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
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-pink-500 text-pink-600 font-semibold rounded-lg hover:bg-pink-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Combination Brows */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-2xl transition-all duration-300" id="el-sqvl9li2">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-prdvqi3d">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center" id="el-pi6tvimz">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-8btwnthg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-680t8r0p"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-kjoli9cc">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/combo-2-1.webp" alt="Combination Brows" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" id="el-zy7qoamq" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-lafawp5u"></div>
            </div>
            <div className="p-6" id="el-dj1ipek8">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-w6tnszvl">Combination Brows</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-fs2yr3bc">Best of both worlds - hair strokes + shading for natural yet defined look</p>
              <div className="flex items-center justify-between mb-4" id="el-rg9ye109">
                <span className="text-2xl font-bold text-purple-600" id="el-ft8jitrn">₹15,000</span>
                <span className="text-sm text-neutral-500 line-through" id="el-o6nv14sd">₹18,000</span>
              </div>
              <div className="flex items-center mb-4" id="el-zjhpd6ud">
                <div className="flex text-yellow-400" id="el-j2r3m9zw">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-zdnzljeh"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-m5a6cyxq"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-wz5voqv1"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-jsw5ykqi"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-rmvt80ec"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-qdow23d2"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-7gmtj8fn"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-r2vlmfye"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-7pnzugcx"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-y47jrcvz"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-l2yjyvf9">(94 reviews)</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
                  id="el-pllhj3r9"
                >
                  Book Now
                </button>
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Lip Blush */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-50 to-orange-100 hover:shadow-2xl transition-all duration-300" id="el-3xbj4lue">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-mdip5iwm">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center" id="el-hqtwe5ba">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-vjd0r4ih">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-ej7k6d32"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-e10kzbfs">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/Lip-tint.webp" alt="Lip Blush" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" id="el-uiebg1s4" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-6axnk69u"></div>
            </div>
            <div className="p-6" id="el-fzvmbdtk">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-74hg9ncq">Lip Blush</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-w9ufirx8">Perfect tint that lasts for years, enhances natural lip color</p>
              <div className="flex items-center justify-between mb-4" id="el-49ujjd7m">
                <span className="text-2xl font-bold text-rose-600" id="el-7rbfzz47">₹10,000</span>
                <span className="text-sm text-neutral-500 line-through" id="el-bjuy6q0j">₹12,500</span>
              </div>
              <div className="flex items-center mb-4" id="el-nplyqf74">
                <div className="flex text-yellow-400" id="el-rtjkiorl">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-5yz9tmcg"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-bb0km1xn"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-zvbbbmd5"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-c8jjtj4q"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-q0tgrxpz"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-gpidoobc"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-nck8f5qo"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-euxhum0n"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-ztu1oqns"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-xlkdali4"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-fiu3wc6y">(156 reviews)</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
                  id="el-zewlgg3y"
                >
                  Book Now
                </button>
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-rose-500 text-rose-600 font-semibold rounded-lg hover:bg-rose-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
              </div>
              
          {/* Microshading */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-100 hover:shadow-2xl transition-all duration-300" id="el-x3vs4irn">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-dulrb83n">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center" id="el-octreezb">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-upc96v45">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-itkwyfyn"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-oumtt9lk">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/microshading.jpeg" alt="Microshading" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" id="el-c0dkpppk" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-cx9hl4f8"></div>
            </div>
            <div className="p-6" id="el-60mrom59">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-edi3n5y3">Microshading</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-jvl5vxj4">Soft powder effect for fuller brows, ideal for oily skin</p>
              <div className="flex items-center justify-between mb-4" id="el-boosvjei">
                <span className="text-2xl font-bold text-indigo-600" id="el-ahvn6lok">₹14,000</span>
                <span className="text-sm text-neutral-500 line-through" id="el-ovx40ot7">₹17,000</span>
              </div>
              <div className="flex items-center mb-4" id="el-4ekjtydf">
                <div className="flex text-yellow-400" id="el-acy7ggwz">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-doyeh3t5"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-lyhue87e"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-r6nw3ajh"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-m4v5v379"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-4juy07gj"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-75vav8bn"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-rkghuky5"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-f3oqm2cy"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-dz2ntm5m"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-jq330jv9"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-qk2exn9s">(83 reviews)</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
                  id="el-515552vq"
                >
                  Book Now
                </button>
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-indigo-500 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* Lash Curl */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-100 hover:shadow-2xl transition-all duration-300" id="el-2e3d8f6p">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-4shoquch">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center" id="el-4j7c4iam">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-74lxoc5r">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-u1e7jcop"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-vpg8ulmw">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2024-03-16-1.webp" alt="Lash Curl" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" id="el-pucarkf5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-9gjzfft4"></div>
            </div>
            <div className="p-6" id="el-1q399s14">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-7f53rrrr">Lash Curl</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-s46ymd7y">Perfect curled lashes without daily effort, lasts 6-8 weeks</p>
              <div className="flex items-center justify-between mb-4" id="el-wnh6z6g3">
                <span className="text-2xl font-bold text-cyan-600" id="el-d5xs89vv">₹3,500</span>
                <span className="text-sm text-neutral-500 line-through" id="el-zzx3h6re">₹4,500</span>
              </div>
              <div className="flex items-center mb-4" id="el-cm32aqbl">
                <div className="flex text-yellow-400" id="el-fuc0ugmw">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-c8xe54io"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-j2f1yxt8"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-3yh6lo0g"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-nljd9lim"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-5ryk0q77"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-w01vy7au"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-iz2s28dd"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-pe9ahr6n"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-8wik27nm"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-2zmw1e48"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-1cybq5lu">(201 reviews)</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
                  id="el-44m3k5rt"
                >
                  Book Now
                </button>
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-cyan-500 text-cyan-600 font-semibold rounded-lg hover:bg-cyan-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* BB Glow */}
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100 hover:shadow-2xl transition-all duration-300" id="el-qf5x7fut">
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" id="el-ybqvj833">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center" id="el-15afklea">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-3nuqp8a7">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" id="el-wsbnn444"></path>
                </svg>
              </div>
            </div>
            <div className="relative" id="el-i4rk56gj">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-14.webp" alt="BB Glow" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" id="el-a1c7z6vl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-mjuyn4xr"></div>
            </div>
            <div className="p-6" id="el-zdnvcy34">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2" id="el-rgjrjsu5">BB Glow</h3>
              <p className="text-neutral-600 mb-3 text-sm leading-relaxed" id="el-38ae1frg">Korean glass skin with semi-permanent foundation, instant glow</p>
              <div className="flex items-center justify-between mb-4" id="el-qhzkm96v">
                <span className="text-2xl font-bold text-emerald-600" id="el-o8vhx80c">₹8,000</span>
                <span className="text-sm text-neutral-500 line-through" id="el-potdu21c">₹10,000</span>
              </div>
              <div className="flex items-center mb-4" id="el-34gra2ja">
                <div className="flex text-yellow-400" id="el-edc41v78">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-vfogm7y0"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-quevnqfj"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-uxc2v08m"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-8vzdrmjj"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-h8c4tr25"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-xlnz23w8"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-2j7arp6t"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-vislp8s0"></path></svg>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" id="el-19nmg2m8"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" id="el-ebx0j5bh"></path></svg>
                </div>
                <span className="text-sm text-neutral-500 ml-2" id="el-1cka508e">(67 reviews)</span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => setIsBookingOpen(true)}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" 
                  id="el-3q533n38"
                >
                  Book Now
                </button>
                <a 
                  href="https://wa.me/919654500004?text=Thank%20you%20for%20choosing%20Brows%20%26%20Beyond.%20We%20appreciate%20your%20interest%20in%20our%20services.%20We%20will%20get%20back%20to%20you%20soon%20once%20we%20receive%20your%20inquiry." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-all duration-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Explore More Services Button */}
        <div className="text-center mt-12 sm:mt-16">
          <Button
            onClick={() => window.location.href = '/services'}
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;