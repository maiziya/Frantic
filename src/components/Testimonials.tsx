import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    quote: "It was a great experience choosing Frantic. Not only was their creative thinking brilliant, they were also a pleasure to work with. Nothing was ever too much of a problem.",
    author: "RHR INTERNATIONAL",
    role: "Chief Marketing Officer"
  },
  {
    quote: "From the moment I reached out with an urgent request, through to delivery, Frantic were brilliant. Responsive, creative and receptive. Highly, highly recommended.",
    author: "MURA TECHNOLOGY",
    role: "Marketing Manager"
  },
  {
    quote: "Thank you so much to you and the team. A great suite of animations and everyone is so pleased with them. Dedication to getting everything just perfect.",
    author: "MOLTON BROWN",
    role: "Senior Creative"
  },
  {
    quote: "The finished film was amazing interpretation on brief. Finished on budget, on time. We were really pleased with the result.",
    author: "SYMPHONY ENVIRONMENTAL",
    role: "Marketing Manager"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-background" id="testimonials">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">
            From our clients
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            What they <span className="text-primary">said.</span>
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:flex gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group p-8 border border-border hover:border-primary/50 transition-all duration-500 hover-lift w-[calc(25%_-_1.5rem)]"
            >
              <Quote className="text-primary mb-6 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="border-t border-border pt-6">
                <p className="text-xs text-primary font-semibold tracking-wider mb-1">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8 border border-border"
                >
                  <Quote className="text-primary mb-6" size={32} />
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-border pt-6">
                    <p className="text-sm text-primary font-semibold tracking-wider mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-border hover:border-primary hover:text-primary"
            >
              <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-border hover:border-primary hover:text-primary"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}