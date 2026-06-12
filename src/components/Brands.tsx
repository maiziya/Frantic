export default function Brands() {
  const brands = [
    'Sony', 'Disney', 'Coca-Cola', 'Samsung', 'BBC', 'McLaren',
    'Nike', 'Adidas', 'Apple', 'Google', 'Microsoft', 'Amazon'
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Over <span className="text-primary">150 brands</span> have been Frantic.
          </h2>
        </div>

        <div className="flex flex-wrap gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className="flex items-center justify-center p-6 opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-110 w-[calc(50%_-_1rem)] md:w-[calc(33.33%_-_1.33rem)] lg:w-[calc(16.67%_-_1.67rem)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}