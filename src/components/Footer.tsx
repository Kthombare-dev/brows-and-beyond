const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" id="el-mdclleqt">
            {/* Brand Section */}
            <div className="lg:col-span-1" id="el-flzfagw2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/05/cropped-brows-and-beyond-by-sonali-Logo-1-1-60x60.png" 
                  alt="Brows & Beyond Logo" 
                  className="w-12 h-12 mr-3"
                />
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent" id="el-plno85p4">
                  Brows & Beyond
                </h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed mb-6" id="el-55bwyqxw">
                Premier permanent makeup in Gurgaon. Enhancing natural beauty with expert artistry and personalized care.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/browsandbeyond_by_sonali" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-pink-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"></path>
                  </svg>
                </a>
                <a href="https://wa.me/919654500004" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-green-400 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
              </div>
            </div>
          
            {/* Services Section */}
            <div id="el-i2ik52sr">
              <h4 className="text-white font-semibold mb-6 text-lg" id="el-25e3a3m0">Services</h4>
              <div className="space-y-3">
                <a href="#services-showcase" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-4ai4rg4j">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  Services
                </a>
                <a href="#transformation-gallery" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-11h5snid">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  Gallery
                </a>
                <a href="#booking-cta" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-8lfhbl5g">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  Book Appointment
                </a>
                <a href="#about-sonali" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-5vf4ihst">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  About
                </a>
                <a href="#privacy" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-0kkdku9t">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  Privacy Policy
                </a>
                <a href="#terms" className="block text-neutral-300 hover:text-pink-400 py-2 text-sm transition-all duration-300 hover:translate-x-1 flex items-center" id="el-h6t418ke">
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-3"></span>
                  Terms
                </a>
              </div>
            </div>
            
            {/* Contact Section */}
            <div id="el-1ffu6jwx">
              <h4 className="text-white font-semibold mb-6 text-lg" id="el-30i0kgtw">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed" id="el-znohulo9">
                    5713, Mulberry Avenue<br id="el-4o8plpd2" />DLF Phase IV, Gurugram, Haryana, 122009
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <a href="mailto:browsandbeyondsonali@gmail.com" className="text-neutral-300 hover:text-pink-400 text-sm transition-colors" id="el-m7332bv2">
                    browsandbeyondsonali@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Business Hours Section */}
            <div id="el-wp1j80et">
              <h4 className="text-white font-semibold mb-6 text-lg" id="el-vx0iab4j">Business Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 text-sm">Monday - Saturday</span>
                  <span className="text-pink-400 text-sm font-medium">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 text-sm">Sunday</span>
                  <span className="text-neutral-500 text-sm">Closed</span>
                </div>
                <div className="mt-4 p-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
                  <p className="text-pink-400 text-xs font-medium text-center">By Appointment Only</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-neutral-700/50 mt-12 pt-8" id="el-3t7gmx2n">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0" id="el-8s9u3dly">
              <div className="text-neutral-300 text-sm" id="el-8jwvbixj">
                © 2024 Brows and Beyond by Sonali. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-neutral-300 text-sm" id="el-18lbf9u3">
                <a href="#services-showcase" className="hover:text-pink-400 transition-colors duration-300" id="el-gy2t5hra">Services</a>
                <span className="text-neutral-600">•</span>
                <a href="#transformation-gallery" className="hover:text-pink-400 transition-colors duration-300" id="el-5b9pvfx2">Gallery</a>
                <span className="text-neutral-600">•</span>
                <a href="#booking-cta" className="hover:text-pink-400 transition-colors duration-300" id="el-vluke1is">Book Appointment</a>
                <span className="text-neutral-600">•</span>
                <a href="#about-sonali" className="hover:text-pink-400 transition-colors duration-300" id="el-0vofopnq">About</a>
                <span className="text-neutral-600">•</span>
                <a href="#privacy" className="hover:text-pink-400 transition-colors duration-300" id="el-a7fj1r27">Privacy</a>
                <span className="text-neutral-600">•</span>
                <a href="#terms" className="hover:text-pink-400 transition-colors duration-300" id="el-nx0d8orx">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
