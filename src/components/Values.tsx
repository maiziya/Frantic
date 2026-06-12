const values = [
  {
    number: '01',
    title: 'Relentless',
    highlight: 'creativity.',
    description: "We don't wait for inspiration. We make it happen. Every day, for every client, on every frame."
  },
  {
    number: '02',
    title: 'Obsessive',
    highlight: 'craft.',
    description: 'The frantic pursuit of the perfect frame, the right light, the ideal timing. That obsession is what separates good from unforgettable.'
  },
  {
    number: '03',
    title: 'Frantic',
    highlight: 'speed.',
    description: 'Frantic means urgent. We thrive on the brief that demands both brilliance and pace. That\'s when we\'re at our best.'
  },
  {
    number: '04',
    title: 'Fearless',
    highlight: 'ambition.',
    description: "You won't find us asking whether something is possible. That question doesn't fit in a Frantic studio."
  }
];

export default function Values() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap gap-8 lg:gap-12">
          {values.map((value, index) => (
            <div
              key={value.number}
              className="group relative p-8 border border-border hover:border-primary/50 transition-all duration-500 hover-lift w-full md:w-[calc(50%_-_1rem)] lg:w-[calc(25%_-_2.25rem)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="absolute top-6 right-6 text-6xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors duration-500">
                {value.number}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {value.title}
                </h3>
                <h3 className="text-2xl font-bold mb-6 text-primary">
                  {value.highlight}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Image Banner */}
      <div className="mt-32 relative">
        <img
          src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=three%20premium%20sony%20headphones%20in%20white%20black%20and%20grey%20colors%2C%20product%20photography%2C%20clean%20minimal%20background%2C%20professional%20lighting&size=1024x1024"
          alt="Product Showcase"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
    </section>
  );
}