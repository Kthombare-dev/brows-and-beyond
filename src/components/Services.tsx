import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredDate?: string;
  preferredTime?: string;
}

const Services = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    notes: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateFullName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.length > 40) return "Full name must be 40 characters or less";
    if (!/^[a-zA-Z\s]+$/.test(name)) return "Full name can only contain letters and spaces";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    if (!email.includes("@")) return "Email must contain @ symbol";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return "Phone number is required";
    if (!/^\d{10}$/.test(phone.replace(/\s/g, ""))) return "Phone number must be exactly 10 digits";
    return undefined;
  };

  const validateService = (service: string): string | undefined => {
    if (!service) return "Please select a service";
    return undefined;
  };

  const validateDate = (date: string): string | undefined => {
    if (!date) return "Please select a preferred date";
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) return "Date cannot be in the past";
    return undefined;
  };

  const validateTime = (time: string): string | undefined => {
    if (!time) return "Please select a preferred time";
    return undefined;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handlePhoneChange = (value: string) => {
    // Only allow digits and limit to 10 characters
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    handleInputChange("phone", numericValue);
  };

  const handleFullNameChange = (value: string) => {
    // Only allow letters and spaces, limit to 40 characters
    const alphabeticValue = value.replace(/[^a-zA-Z\s]/g, "").slice(0, 40);
    handleInputChange("fullName", alphabeticValue);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    newErrors.fullName = validateFullName(formData.fullName);
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.service = validateService(formData.service);
    newErrors.preferredDate = validateDate(formData.preferredDate);
    newErrors.preferredTime = validateTime(formData.preferredTime);

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Booking form submitted:", formData);
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        preferredDate: "",
        preferredTime: "",
        notes: ""
      });
      setErrors({});
      setIsBookingOpen(false);
      
      // Show success message
      alert("Booking submitted successfully! We'll contact you soon.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                  <DialogContent className="w-[95vw] max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4">
                    <DialogHeader className="text-center">
                      <DialogTitle className="text-xl sm:text-2xl font-bold text-neutral-900">
                        Schedule Your Transformation
                      </DialogTitle>
                      <p className="text-sm sm:text-base text-neutral-600 mt-2">
                        Fill out the form below to book your consultation
                      </p>
                    </DialogHeader>
                    
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="fullName" className="text-foreground font-semibold text-sm sm:text-base">
                            Full Name *
                          </Label>
                          <Input 
                            id="fullName" 
                            value={formData.fullName}
                            onChange={(e) => handleFullNameChange(e.target.value)}
                            placeholder="Enter your full name"
                            className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.fullName 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="email" className="text-foreground font-semibold text-sm sm:text-base">
                            Email Address *
                          </Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                            className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.email 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="phone" className="text-foreground font-semibold text-sm sm:text-base">
                            Phone Number *
                          </Label>
                          <Input 
                            id="phone" 
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="Enter 10-digit phone number"
                            className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.phone 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
                          )}
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="service" className="text-foreground font-semibold text-sm sm:text-base">
                            Service *
                          </Label>
                          <Select 
                            value={formData.service} 
                            onValueChange={(value) => handleInputChange("service", value)}
                          >
                            <SelectTrigger className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.service 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="microblading">Microblading</SelectItem>
                              <SelectItem value="combination-brows">Combination Brows</SelectItem>
                              <SelectItem value="lip-blush">Lip Blush</SelectItem>
                              <SelectItem value="microshading">Microshading</SelectItem>
                              <SelectItem value="lash-curl">Lash Curl</SelectItem>
                              <SelectItem value="bb-glow">BB Glow</SelectItem>
                              <SelectItem value="permanent-eyeliner">Permanent Eyeliner</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.service && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.service}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="preferredDate" className="text-foreground font-semibold text-sm sm:text-base">
                            Preferred Date *
                          </Label>
                          <Input 
                            id="preferredDate" 
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                            className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.preferredDate 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}
                          />
                          {errors.preferredDate && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.preferredDate}</p>
                          )}
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                          <Label htmlFor="preferredTime" className="text-foreground font-semibold text-sm sm:text-base">
                            Preferred Time *
                          </Label>
                          <Select 
                            value={formData.preferredTime} 
                            onValueChange={(value) => handleInputChange("preferredTime", value)}
                          >
                            <SelectTrigger className={`border-2 rounded-lg h-10 sm:h-11 text-sm sm:text-base ${
                              errors.preferredTime 
                                ? "border-red-500 focus:border-red-500" 
                                : "border-input focus:border-pink-500"
                            }`}>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="9:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                              <SelectItem value="17:00">5:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.preferredTime && (
                            <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.preferredTime}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="notes" className="text-foreground font-semibold text-sm sm:text-base">
                          Additional Notes
                        </Label>
                        <Textarea 
                          id="notes" 
                          value={formData.notes}
                          onChange={(e) => handleInputChange("notes", e.target.value)}
                          placeholder="Any specific requirements or questions?"
                          className="border-2 border-input focus:border-pink-500 rounded-lg min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Submitting..." : "Confirm Appointment"}
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsBookingOpen(false)}
                          disabled={isSubmitting}
                          className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
                <a 
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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
                  href="https://wa.me/919654500004?text=Hi%20Sonali!%20I%20hope%20you're%20doing%20well.%20I%20came%20across%20your%20beautiful%20work%20and%20I'm%20interested%20in%20learning%20more%20about%20your%20services.%20Could%20you%20please%20share%20some%20details%20about%20pricing%20and%20availability?%20Thank%20you!" 
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