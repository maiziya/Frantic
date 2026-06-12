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
    <section className="py-32 bg-cream text-cream-foreground">
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

        <div className="flex flex-wrap gap-y-12 border-t border-cream-foreground/15">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="group relative px-6 pt-8 border-l border-cream-foreground/15 w-full md:w-1/2 lg:w-1/4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-4 right-4 text-[120px] font-bold text-cream-foreground/5 leading-none pointer-events-none">
                {step.number}
              </span>
              <div className="relative z-10">
                <p className="text-xs text-primary tracking-widest mb-4">
                  {step.number}. {step.label}
                </p>
                <h3 className="text-2xl font-bold mb-6 text-cream-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-cream-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
