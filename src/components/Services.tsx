const services = [
  {
    number: '01',
    title: 'Product launches',
    description: 'Concept to launch, pre-production of purest extraordinary. Real, we make your product look imagined. We make it the hero.'
  },
  {
    number: '02',
    title: 'Brand campaigns',
    description: 'We develop the idea and build it. Films, stills, motion, whatever it takes to make your brand the one nobody forgets.'
  },
  {
    number: '03',
    title: 'Social & digital content',
    description: 'CGI animation and motion design that earns attention. Every format. Every platform. Unmistakably Frantic.'
  },
  {
    number: '04',
    title: 'Retail & experiential',
    description: 'POH and CGI brand moments that make people question what\'s real. We did it for Harrods. We can do it for you.'
  },
  {
    number: '05',
    title: 'Science, medical & technology',
    description: 'We find the story inside the science and make it visible. Mechanisms, molecules and invisible processes transformed into something genuinely beautiful.'
  },
  {
    number: '06',
    title: 'Broadcast & OOH',
    description: 'CGI built to be seen at scale. The kind of work that makes people stop what they\'re doing and watch.'
  }
];

export default function Services() {
  return (
    <section className="py-32 bg-background" id="expertise">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">
            What we do
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            End to end.{' '}
            <span className="text-primary">Any brief. Any scale.</span>
          </h2>
        </div>

        <div className="flex flex-wrap">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative p-12 border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer w-full md:w-1/2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-8 left-8 text-[120px] font-bold text-muted/10 group-hover:text-primary/10 transition-colors duration-500 leading-none">
                {service.number}
              </span>
              <div className="relative z-10 pt-16">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-700" />
              <div className="absolute top-0 right-0 w-px h-0 bg-primary group-hover:h-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}