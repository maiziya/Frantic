import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import About from '@/components/About';
import Values from '@/components/Values';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Brands />
        <About />
        <Values />
        <Testimonials />
        <Process />
        <Services />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;