import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    service: "Microblading",
    review: "Absolutely amazing experience! Sonali is incredibly skilled and made me feel so comfortable throughout the entire process. My brows look so natural and perfect. Highly recommend!",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/About-Sonali-Bhasin.jpg",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Anjali Patel",
    rating: 5,
    service: "Lip Blush",
    review: "I'm so happy with my lip blush results! The color is perfect and looks so natural. Sonali's attention to detail is incredible. The healing process was smooth and the final result exceeded my expectations.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/Microblading-Services.jpg",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Riya Gupta",
    rating: 5,
    service: "Combination Brows",
    review: "Best decision I ever made! My combination brows look absolutely stunning. Sonali took the time to understand exactly what I wanted and delivered beyond my expectations. The studio is clean and professional.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/Lip-tint.webp",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Meera Singh",
    rating: 5,
    service: "BB Glow",
    review: "The BB Glow treatment gave me that perfect Korean glass skin look! My skin looks so radiant and even. Sonali is a true expert in her field. I've received so many compliments!",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/combo-2-1.webp",
    date: "2 months ago"
  },
  {
    id: 5,
    name: "Kavya Reddy",
    rating: 5,
    service: "Lash Curl",
    review: "My lash curl looks so natural and beautiful! No more daily curling needed. Sonali made sure I was comfortable throughout the process. The results are exactly what I wanted.",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/06/2024-03-16-1.webp",
    date: "1 week ago"
  },
  {
    id: 6,
    name: "Zara Khan",
    rating: 5,
    service: "Permanent Eyeliner",
    review: "I wake up every day with perfect eyeliner! The permanent eyeliner is smudge-proof and looks so natural. Sonali's precision and skill are unmatched. Highly recommend!",
    image: "https://browsandbeyondbysonali.com/wp-content/uploads/2024/07/download-14.webp",
    date: "3 weeks ago"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
};

const Reviews = () => {

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 sm:mb-6">
            What Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto">
            Real experiences from our satisfied clients who have transformed their beauty with our expert permanent makeup services.
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-4">
            <div className="flex items-center">
              <StarRating rating={5} />
              <span className="ml-2 text-lg sm:text-xl font-semibold text-neutral-900">5.0</span>
            </div>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600 font-medium">{reviews.length}+ Reviews</span>
          </div>
        </div>

        {/* Reviews Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee-fast">
            {/* First set of reviews */}
            {reviews.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-pink-200"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">{review.name}</h4>
                          <p className="text-xs sm:text-sm text-pink-600 font-medium">{review.service}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500">{review.date}</span>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                      "{review.review}"
                    </blockquote>

                    {/* Service Badge */}
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-xs font-medium rounded-full">
                        {review.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {reviews.map((review) => (
              <div key={`${review.id}-duplicate`} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm h-full">
                  <CardContent className="p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={review.image}
                            alt={review.name}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-pink-200"
                          />
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 text-sm sm:text-base">{review.name}</h4>
                          <p className="text-xs sm:text-sm text-pink-600 font-medium">{review.service}</p>
                        </div>
                      </div>
                      <span className="text-xs text-neutral-500">{review.date}</span>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={review.rating} />
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                      "{review.review}"
                    </blockquote>

                    {/* Service Badge */}
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 text-xs font-medium rounded-full">
                        {review.service}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
