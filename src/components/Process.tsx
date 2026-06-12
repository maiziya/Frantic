const processSteps = [
  {
    number: '01',
    label: 'UNDERSTAND',
    title: 'We get inside the brief.',
    description: 'Before a single frame fires up, we dig into your brand, your audience, and what success actually looks like. Not just what you asked for. What you need.'
  },
  {
    number: '02',
    label: 'CONCEPT',
    title: 'We make the idea bigger.',
    description: 'Scripts, storyboards, style frames. We find the version of your brief that earns attention it. Creative direction that builds it. Plan ready how to pull it off with commercial outcomes.'
  },
  {
    number: '03',
    label: 'BUILD',
    title: 'We make it extraordinary.',
    description: '3D modelling, animation, texturing, lighting crafted with precision. Complex simulations, fluid dynamics, product reveals. Nothing is off the table.'
  },
  {
    number: '04',
    label: 'DELIVER',
    title: 'Delivered. Brilliantly.',
    description: 'Broadcast to social, multiple languages. Everything formatted, assets versioned, to single hero language. Everything ready, everything exactly as it should be.'
  }
];

export default function Process() {
  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-4xl">
          <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            A process built for{' '}
            <span className="text-primary">ambition under pressure.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-8">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative p-8 bg-background border border-border hover:border-primary/50 transition-all duration-500 hover-lift w-full md:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_1.5rem)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-4 left-6 text-[120px] font-bold text-muted/20 group-hover:text-primary/10 transition-colors duration-500 leading-none">
                {step.number}
              </span>
              <div className="relative z-10 pt-16">
                <p className="text-xs text-primary tracking-widest mb-4">
                  {step.number}. {step.label}
                </p>
                <h3 className="text-2xl font-bold mb-6 text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}