import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=cinematic%20close%20up%20of%20a%20vintage%20film%20camera%20lens%20with%20dramatic%20lighting%20and%20shadows%2C%20dark%20moody%20atmosphere%2C%20professional%20cinematography&size=1024x1024"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-24">
        <div className="max-w-4xl">
          <p className="text-xs text-primary tracking-[0.2em] uppercase mb-6 animate-fade-in">
            // Animation Studio in London, UK
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 animate-slide-up whitespace-nowrap">
            Obsession made <span className="text-primary">real.</span>
          </h1>

          <div className="space-y-2 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-3xl text-foreground/90">
              Frantic about <span className="text-primary font-semibold">the idea.</span>
            </p>
            <p className="text-2xl md:text-3xl text-foreground/90">
              Frantic about <span className="text-primary font-semibold">every single frame.</span>
            </p>
            <p className="text-2xl md:text-3xl text-foreground/90">
              Frantic about <span className="text-primary font-semibold">the reaction in the room.</span>
            </p>
          </div>

          <div className="flex items-start gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="w-px h-16 bg-primary mt-2" />
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              The CGI studio for brands with ambitions worth obsessing over.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a href="#">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm font-semibold tracking-wider group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                WATCH SHOWREEL
                <Play size={16} className="ml-2 group-hover:scale-110 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
