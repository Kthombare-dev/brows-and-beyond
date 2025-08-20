import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import eyebrowsResult from "@/assets/eyebrows-result.jpg";
import lipBlush from "@/assets/lip-blush.jpg";
import microbladingHero from "@/assets/microblading-hero.jpg";
import happyClients from "@/assets/happy-clients.jpg";

const Gallery = () => {
  return (
    <section id="transformation-gallery" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="el-3vcimobq">
        <div className="text-center mb-16" id="el-wrafvem6">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4" id="el-0ls14ps9">Gallery</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto" id="el-prysrduk">Real transformations, real results</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8" id="el-5hj0w36n">
          <div className="group" id="el-b4ugsdtl">
            <div className="relative overflow-hidden rounded-2xl" id="el-v5p7dokl">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/images-2-1.jpeg" alt="Before & after microblading" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" id="el-rmm0i5wv" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-or93film">
                <div className="absolute bottom-4 left-4 text-white" id="el-5mdf3yb1">
                  <p className="font-semibold" id="el-wlmz4n6z">Microblading</p>
                  <p className="text-sm opacity-90" id="el-9f225oy9">Before & After</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group" id="el-dlfu7q76">
            <div className="relative overflow-hidden rounded-2xl" id="el-use1p6se">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-16.webp" alt="Before & after lip tint" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" id="el-amsd5r9x" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-43uuoxph">
                <div className="absolute bottom-4 left-4 text-white" id="el-w7f2gvxr">
                  <p className="font-semibold" id="el-m9fl0l69">Lip Tint</p>
                  <p className="text-sm opacity-90" id="el-ev6mw0s8">Before & After</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="group" id="el-lvwrm6f5">
            <div className="relative overflow-hidden rounded-2xl" id="el-608qwm2q">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/94b8fb5711.webp" alt="Before & after combination brows" className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" id="el-2eoxxn1c" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" id="el-z8sssyf7">
                <div className="absolute bottom-4 left-4 text-white" id="el-uc8tykxj">
                  <p className="font-semibold" id="el-jrwmkhqj">Combination Brows</p>
                  <p className="text-sm opacity-90" id="el-3ts2ihfn">Before & After</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8" id="el-s04h1y31">
          <div className="bg-white rounded-2xl p-8 shadow-lg" id="el-iw7o4vqw">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4" id="el-hoxoh8ns">Client Spotlight</h3>
            <div className="flex items-start space-x-4" id="el-pbqvs12y">
              <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-7-300x199.webp" alt="Client transformation" className="w-32 h-32 rounded-lg object-cover" id="el-gnk95ayo" />
              <div id="el-iakekskx">
                <p className="text-neutral-700 mb-2" id="el-ak2vqiss">"Sonali transformed my eyebrows completely. The natural-looking results exceeded all my expectations!"</p>
                <p className="text-sm text-neutral-500" id="el-7bys1622">- Priya S.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg" id="el-qofhn64u">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4" id="el-ldup1ybc">Expert Touch</h3>
            <img src="https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-17-300x199.webp" alt="Expert artistry showcase" className="w-full h-32 rounded-lg object-cover mb-4 active-edit-image" id="el-50z28bit" />
            <p className="text-neutral-700" id="el-2gy94mf8">Every treatment is customized to enhance your unique features naturally.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;