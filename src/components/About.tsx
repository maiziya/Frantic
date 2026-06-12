export default function About() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="text-xl md:text-2xl text-primary font-medium mb-6">
              You've got a brief worth obsessing over.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
              A launch, a campaign, a film that has to be extraordinary.
            </h2>
          </div>

          <div className="space-y-8 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <p>
              That's exactly the kind of brief Frantic was made for.
            </p>
            <p className="text-foreground font-medium">
              A CGI studio that thinks like a creative agency and delivers like a production machine.
            </p>
            <p>
              Twenty-plus years of CGI animation and production work for brands who needed it to be brilliant.
              <span className="text-foreground"> Sony. Disney. Coca-Cola. Samsung. BBC. McLaren.</span>
            </p>
            <p className="text-foreground font-medium">
              The brief arrives. <span className="text-primary">The obsession begins.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Full Width Image */}
      <div className="mt-24 relative">
        <img
          src="https://aidp.juejin.cn/agentic/api/v1/tool/text2image?prompt=abstract%20cinematic%20art%20with%20vibrant%20pink%20and%20blue%20neon%20lights%2C%20futuristic%20digital%20art%2C%20dark%20background%2C%20motion%20blur%20effect&size=1024x1024"
          alt="Creative Banner"
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
    </section>
  );
}