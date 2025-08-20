import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

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

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      setIsOpen(false);
      
      // Show success message (you can add a toast notification here)
      alert("Booking submitted successfully! We'll contact you soon.");
      
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking-cta" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Ready to <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Transform</span>?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 mb-6 sm:mb-8 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-0">
            Take the first step towards your dream look. Book your consultation today and discover how our expert permanent makeup artistry can enhance your natural beauty.
          </p>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
              >
                Book Your Appointment
              </Button>
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
                    onClick={() => setIsOpen(false)}
                    disabled={isSubmitting}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;