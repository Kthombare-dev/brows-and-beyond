import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import microbladingHero from "@/assets/microblading-hero.jpg";
import eyebrowsResult from "@/assets/eyebrows-result.jpg";
import lipBlush from "@/assets/lip-blush.jpg";
import happyClients from "@/assets/happy-clients.jpg";

const Hero = () => {
  const openBookingModal = () => {
    // Function to handle booking modal
    console.log("Opening booking modal");
  };

  return (
    <main>
      <section 
        id="hero" 
        className="min-h-screen bg-background relative overflow-hidden pt-8"
        role="banner"
        aria-labelledby="hero-heading"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="el-sgxjjpny">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="el-e9yr8kz5">
            <div className="space-y-8" id="el-za0gurww">
              <header className="space-y-4" id="el-vqncavx4">
                <h1 
                  id="hero-heading"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight" 
                >
                  Transform Your
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent" id="el-4prrmyx2"> Beauty</span>
                  Forever
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed" id="el-tvce9agm">
                  Premier permanent makeup in Gurgaon. Wake up flawless every day with expert microblading and cosmetic tattooing.
                </p>
              </header>

            <div className="flex flex-col sm:flex-row gap-4" id="el-2zmjeann">
              <button 
                onClick={openBookingModal} 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200" 
                id="el-6038becf"
              >
                Book Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-q3twutnb">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" id="el-ttsecwkv"></path>
                </svg>
              </button>
              <a 
                href="#booking-cta" 
                className="inline-flex items-center justify-center px-8 py-4 border border-neutral-300 text-neutral-700 font-semibold rounded-full hover:bg-neutral-50 transition-colors duration-200" 
                id="el-6m6qzlta"
              >
                Explore Services
              </a>
            </div>

            <div className="flex items-center space-x-8 pt-8" id="el-8iko7f6l">
              <div className="flex -space-x-2" id="el-xxp2fu6k">
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2025/07/pexels-photo-15327096-15327096-200x300.webp" 
                  alt="Happy client" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover active-edit-image" 
                  id="el-bu1gwona"
                />
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/About-Sonali-Bhasin.jpg" 
                  alt="Happy client" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  id="el-4t38h78m"
                />
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg" 
                  alt="Happy client" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  id="el-jg9mo16u"
                />
              </div>
              <div id="el-046odtip">
                <p className="text-sm font-semibold text-neutral-900" id="el-4x3o98p9">800+ Happy Clients</p>
                <p className="text-xs text-neutral-600" id="el-lidjgxtu">100+ 5-star Reviews</p>
              </div>
            </div>
          </div>

          <div className="relative" id="el-m2568ze5">
            <div className="relative grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500" id="el-gual4ouu">
              <div className="space-y-4" id="el-z9ruxx9f">
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg" 
                  alt="Perfect brows" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 active-edit-image" 
                  id="el-3afvm5h3"
                />
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/Lip-tint.webp" 
                  alt="Lip blush" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 active-edit-image" 
                  id="el-hhoqsyou"
                />
              </div>
              <div className="space-y-4 mt-8" id="el-xm0rasf3">
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/combo-2-1.webp" 
                  alt="Combination brows" 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 active-edit-image" 
                  id="el-lgekxxjc"
                />
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2024-03-16-1.webp" 
                  alt="Lash curl" 
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 active-edit-image" 
                  id="el-ktgdgy1p"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce" id="el-gxm6viwg">
              <div className="flex items-center space-x-2" id="el-1g8xvans">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" id="el-gvjctf3s"></div>
                <span className="text-sm font-semibold text-neutral-900" id="el-w7wbbn7l">Now Open</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-1 sm:space-y-2">
            <span className="text-xs sm:text-sm text-neutral-600 font-medium">Scroll Down</span>
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-neutral-600 animate-pulse" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Hero;