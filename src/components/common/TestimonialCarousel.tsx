'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import PageContainer from '../layout/PageContainer';
import { StaticImageData } from 'next/image';

// Import placeholder images for testimonials
import testimonial1Image from '../../../public/images/common/testimonial-avater/SAS4.png';
import testimonial2Image from '../../../public/images/common/testimonial-avater/SCI.png';
import testimonial3Image from '../../../public/images/common/testimonial-avater/avis avocat 2.png';
import testimonial4Image from '../../../public/images/common/testimonial-avater/Social 1.png';
import testimonial5Image from '../../../public/images/common/testimonial-avater/eurl4.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: StaticImageData;
  rating: number;
  title: string;
  text: string;
}

export function TestimonialCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Melanie the Troquer",
      role: "Co-founder",
      company: "@Sweet brows Beauty Institute",
      image: testimonial1Image,
      rating: 5,
      title: "The speed of the process",
      text: "The speed, the very complete and simple explanations, the fact that you can reach someone if you need help. But I emphasize the speed in carrying out the procedures!"
    },
    {
      id: 2,
      name: "Sarah Guermi",
      role: "Founder",
      company: "@Prestige Consulting company",
      image: testimonial2Image,
      rating: 5,
      title: "Availability",
      text: "Perfect support. They were available and answered all my questions step by step. Thanks to all the teams!"
    },
    {
      id: 3,
      name: "Catarina Batista Cleto",
      role: "Co-founder of",
      company: "O P'tits soins Personal services",
      image: testimonial3Image,
      rating: 5,
      title: "Attentive and good advice",
      text: "Captain Contract was attentive and provided good advice, with a top-notch lawyer and a responsive and highly professional formalist. It's important to be surrounded by people like this. Congratulations to the team!"
    },
    {
      id: 4,
      name: "Catarina Batista Cleto",
      role: "Co-founder of",
      company: "O P'tits soins Personal services",
      image: testimonial4Image,
      rating: 5,
      title: "Attentive and good advice",
      text: "Captain Contract was attentive and provided good advice, with a top-notch lawyer and a responsive and highly professional formalist. It's important to be surrounded by people like this. Congratulations to the team!"
    },
    {
      id: 5,
      name: "Catarina Batista Cleto",
      role: "Co-founder of",
      company: "O P'tits soins Personal services",
      image: testimonial5Image,
      rating: 5,
      title: "Attentive and good advice",
      text: "Captain Contract was attentive and provided good advice, with a top-notch lawyer and a responsive and highly professional formalist. It's important to be surrounded by people like this. Congratulations to the team!"
    }
  ];

  const scrollLeft = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const card = container.querySelector('.testimonial-card');
    
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const cardFullWidth = cardRect.width + 24; // Width + gap
      
      container.scrollBy({ 
        left: -cardFullWidth, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    } else {
      setIsScrolling(false);
    }
  };

  const scrollRight = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!scrollContainerRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const container = scrollContainerRef.current;
    const card = container.querySelector('.testimonial-card');
    
    if (card) {
      const cardRect = card.getBoundingClientRect();
      const cardFullWidth = cardRect.width + 24; // Width + gap
      
      container.scrollBy({ 
        left: cardFullWidth, 
        behavior: 'smooth' 
      });
      
      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    } else {
      setIsScrolling(false);
    }
  };

  return (
    <section className="lg:py-16 py-10 bg-lightPrimary relative overflow-hidden">
      <PageContainer>
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scroll-smooth snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx global>{`
              /* Hide scrollbar for Chrome, Safari and Opera */
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card flex-shrink-0 w-[90%] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
              >
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm h-full">
                  <div className="flex items-center mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                      <Image 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="object-cover"
                        width={64}
                        height={64}
                        unoptimized
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-lg lg:text-xl text-tertiary font-lato">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm font-lato">
                        {testimonial.role} {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {Array(5).fill(0).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-lg lg:text-xl font-semibold mb-3 text-tertiary">{testimonial.title}</p>
                  <p className="text-gray-600">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons - moved to bottom and centered */}
          <div className="flex justify-center lg:mt-8 mt-4 gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors disabled:opacity-50 z-10"
              disabled={isScrolling}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg-red-600 transition-colors disabled:opacity-50 z-10"
              disabled={isScrolling}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </PageContainer>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 h-32 rounded-full bg-blue-100 opacity-50 z-0" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-40 h-40 rounded-full bg-red-100 opacity-60 z-0" />
    </section>
  );
} 