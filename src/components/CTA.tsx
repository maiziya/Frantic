import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=cinematic%20watch%20mechanism%20close%20up%2C%20intricate%20gears%20and%20springs%2C%20dramatic%20lighting%2C%20dark%20moody%20atmosphere%2C%20macro%20photography&size=1024x1024"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-[calc(50%_-_2rem)]">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
              Your most{' '}
              <span className="text-primary block mt-2">ambitious brief.</span>
              <span className="block mt-2">Our most obsessive</span>
              <span className="text-primary block mt-2">work.</span>
            </h2>
          </div>

          <div className="lg:pl-16 w-full lg:w-[calc(50%_-_2rem)]">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">
                Frantic energy. Flawless result.
              </p>
              <p className="text-sm text-muted-foreground">
                London & Oxford. Working worldwide.
              </p>

              <div className="pt-8">
                <a href="#">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-sm font-semibold tracking-wider group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                  >
                    START A PROJECT
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <a
                  href="tel:+4402071646431"
                  className="flex items-center gap-3 mt-6 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={16} />
                  +44(0)20 7164 6431
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}