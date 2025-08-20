import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

const BookingForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Booking form submitted");
    setIsOpen(false);
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
                      placeholder="Enter your full name"
                      className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="text-foreground font-semibold text-sm sm:text-base">
                      Email Address *
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email"
                      className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
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
                      placeholder="Enter your phone number"
                      className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="service" className="text-foreground font-semibold text-sm sm:text-base">
                      Service *
                    </Label>
                    <Select required>
                      <SelectTrigger className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base">
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
                      className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="preferredTime" className="text-foreground font-semibold text-sm sm:text-base">
                      Preferred Time *
                    </Label>
                    <Select required>
                      <SelectTrigger className="border-2 border-input focus:border-pink-500 rounded-lg h-10 sm:h-11 text-sm sm:text-base">
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
                  </div>
                </div>

                <div className="space-y-1 sm:space-y-2">
                  <Label htmlFor="notes" className="text-foreground font-semibold text-sm sm:text-base">
                    Additional Notes
                  </Label>
                  <Textarea 
                    id="notes" 
                    placeholder="Any specific requirements or questions?"
                    className="border-2 border-input focus:border-pink-500 rounded-lg min-h-[80px] sm:min-h-[100px] text-sm sm:text-base"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base"
                  >
                    Confirm Appointment
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsOpen(false)}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
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