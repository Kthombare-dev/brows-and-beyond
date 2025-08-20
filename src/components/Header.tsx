import { useState, useEffect } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "hero", offset: 0 },
        { id: "services-showcase", offset: 100 },
        { id: "transformation-gallery", offset: 100 },
        { id: "about-sonali", offset: 100 },
        { id: "booking-cta", offset: 100 }
      ];

      const scrollPosition = window.scrollY + 100; // Reduced offset for better detection
      const windowHeight = window.innerHeight;

      // Check if we're at the very top (hero section)
      if (scrollPosition < 200) {
        setActiveSection("hero");
        return;
      }

      // Check other sections
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // Check if the section is in view
          if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header role="banner">
      <nav 
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50" 
        id="el-ua5dfh78"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-wa29zciu">
          <div className="flex justify-between items-center h-16" id="el-78f07qtj">
            <div className="flex items-center" id="el-4aglnpfq">
              <a href="#hero" className="flex items-center" aria-label="Go to homepage">
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/05/cropped-brows-and-beyond-by-sonali-Logo-1-1-60x60.png" 
                  alt="Brows and Beyond by Sonali - Permanent Makeup Artist Logo" 
                  className="h-8 w-auto" 
                  id="el-7iympzs8"
                  width="60"
                  height="60"
                />
                <span className="ml-2 text-xl font-semibold text-neutral-900" id="el-hh8j8vnz">Brows & Beyond</span>
              </a>
            </div>
          
          <div className="hidden md:flex items-center space-x-8" id="el-14adcrc5" role="menubar">
            <a 
              href="#hero" 
              className={`transition-colors duration-200 ${
                activeSection === "hero" 
                  ? "text-pink-600 font-semibold" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-xscpa2a5"
              role="menuitem"
              aria-current={activeSection === "hero" ? "page" : undefined}
            >
              Home
            </a>
            <a 
              href="#services-showcase" 
              className={`transition-colors duration-200 ${
                activeSection === "services-showcase" 
                  ? "text-pink-600 font-semibold" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-gmtd3zgw"
            >
              Services
            </a>
            <a 
              href="#transformation-gallery" 
              className={`transition-colors duration-200 ${
                activeSection === "transformation-gallery" 
                  ? "text-pink-600 font-semibold" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-0fmkzdhq"
            >
              Gallery
            </a>
            <a 
              href="#about-sonali" 
              className={`transition-colors duration-200 ${
                activeSection === "about-sonali" 
                  ? "text-pink-600 font-semibold" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-l6yqtz2c"
            >
              About
            </a>
            <a 
              href="#booking-cta" 
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                activeSection === "booking-cta" 
                  ? "bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg" 
                  : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
              }`} 
              id="el-rt7iqitw"
            >
              Book Now
            </a>
          </div>

          <button 
            id="mobile-menu-btn" 
            className="md:hidden text-neutral-700 hover:text-pink-600 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" id="el-8jln0u4l">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" id="el-qlqmuofn"></path>
            </svg>
          </button>
        </div>

        <div id="mobile-menu" className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-b-lg`}>
          <div className="px-2 pt-2 pb-3 space-y-1" id="el-jbed2evw">
            <a 
              href="#hero" 
              className={`block px-3 py-2 transition-colors ${
                activeSection === "hero" 
                  ? "text-pink-600 font-semibold bg-pink-50" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-9d0i3nqc"
            >
              Home
            </a>
            <a 
              href="#services-showcase" 
              className={`block px-3 py-2 transition-colors ${
                activeSection === "services-showcase" 
                  ? "text-pink-600 font-semibold bg-pink-50" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-snj3mmku"
            >
              Services
            </a>
            <a 
              href="#transformation-gallery" 
              className={`block px-3 py-2 transition-colors ${
                activeSection === "transformation-gallery" 
                  ? "text-pink-600 font-semibold bg-pink-50" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-xc6glvm2"
            >
              Gallery
            </a>
            <a 
              href="#about-sonali" 
              className={`block px-3 py-2 transition-colors ${
                activeSection === "about-sonali" 
                  ? "text-pink-600 font-semibold bg-pink-50" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-31twg2ae"
            >
              About
            </a>
            <a 
              href="#booking-cta" 
              className={`block px-3 py-2 transition-colors ${
                activeSection === "booking-cta" 
                  ? "text-pink-600 font-semibold bg-pink-50" 
                  : "text-neutral-700 hover:text-pink-600"
              }`} 
              id="el-cnzhmyf1"
            >
              Reviews
            </a>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );
};

export default Header;