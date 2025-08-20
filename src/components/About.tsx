import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    experience: 0,
    reviews: 0,
    services: 0
  });
  
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounts();
          } else if (!entry.isIntersecting && hasAnimated) {
            // Reset animation when section is out of view
            setHasAnimated(false);
            setCounts({
              clients: 0,
              experience: 0,
              reviews: 0,
              services: 0
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const targets = {
      clients: 800,
      experience: 5,
      reviews: 100,
      services: 7
    };

    const duration = 800; // Reduced to 0.8 seconds
    const steps = 30; // Reduced steps for faster animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      // Use linear easing for faster, more predictable animation
      const easeProgress = progress;

      setCounts({
        clients: Math.floor(targets.clients * easeProgress),
        experience: Math.floor(targets.experience * easeProgress),
        reviews: Math.floor(targets.reviews * easeProgress),
        services: Math.floor(targets.services * easeProgress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targets); // Ensure final values are exact
      }
    }, stepDuration);
  };
  return (
    <section id="about-sonali" className="py-16 sm:py-20 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            Meet <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Sonali</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Your trusted permanent makeup artist in Gurgaon, dedicated to enhancing your natural beauty with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative overflow-visible">
            <div className="relative z-10">
              <img
                src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/About-Sonali-Bhasin.jpg"
                alt="Sonali Bhasin - Permanent Makeup Artist"
                className="w-full h-96 sm:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-pink-100 z-20">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600 mb-1">5+</div>
                <div className="text-xs sm:text-sm text-neutral-600">Years Experience</div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-xl p-3 sm:p-4 z-20">
              <div className="text-white text-center">
                <div className="text-xl sm:text-2xl font-bold mb-1">800+</div>
                <div className="text-xs">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Your Beauty Transformation Specialist
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Hi, I'm Sonali Bhasin, a certified permanent makeup artist with over 5 years of experience in the beauty industry. 
                I specialize in creating natural-looking, long-lasting beauty enhancements that boost your confidence and save you time every day.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                At Brows & Beyond, I believe that every client deserves personalized attention and exceptional results. 
                My passion lies in understanding your unique features and creating customized solutions that enhance your natural beauty.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Certified Expert</h4>
                      <p className="text-xs text-neutral-600">Professional training</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Natural Results</h4>
                      <p className="text-xs text-neutral-600">Enhance your beauty</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Time Saving</h4>
                      <p className="text-xs text-neutral-600">Wake up flawless</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">Personalized Care</h4>
                      <p className="text-xs text-neutral-600">Individual attention</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-pink-100">
              <h4 className="text-xl font-bold text-neutral-900 mb-4">Why Choose Brows & Beyond?</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-600">
                    <strong>Expert Technique:</strong> Advanced microblading and permanent makeup techniques for natural-looking results
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-600">
                    <strong>Premium Products:</strong> Only the highest quality pigments and tools for lasting beauty
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-600">
                    <strong>Hygienic Environment:</strong> Sterile, professional studio ensuring your safety and comfort
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-neutral-600">
                    <strong>Ongoing Support:</strong> Comprehensive aftercare guidance and touch-up services included
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                onClick={() => document.getElementById('booking-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Book Your Consultation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 sm:mt-20" ref={statsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
                             <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">
                 <span className="inline-block">
                   {counts.clients}
                 </span>
                 <span className="text-pink-600 group-hover:scale-110 transition-transform duration-200">+</span>
               </div>
              <div className="text-sm text-neutral-600">Happy Clients</div>
            </div>
                         <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
               <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">
                 <span className="inline-block">
                   {counts.experience}
                 </span>
                 <span className="text-purple-600 group-hover:scale-110 transition-transform duration-200">+</span>
               </div>
               <div className="text-sm text-neutral-600">Years Experience</div>
             </div>
             <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
               <div className="text-3xl sm:text-4xl font-bold text-rose-600 mb-2">
                 <span className="inline-block">
                   {counts.reviews}
                 </span>
                 <span className="text-rose-600 group-hover:scale-110 transition-transform duration-200">+</span>
               </div>
               <div className="text-sm text-neutral-600">5-Star Reviews</div>
             </div>
             <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
               <div className="text-3xl sm:text-4xl font-bold text-pink-600 mb-2">
                 <span className="inline-block">
                   {counts.services}
                 </span>
               </div>
               <div className="text-sm text-neutral-600">Services Offered</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
