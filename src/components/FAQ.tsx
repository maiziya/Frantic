import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqColumns = [
  {
    title: '',
    questions: [
      {
        q: 'What styles of animation do you create?',
        a: 'We create a wide range of animation styles including 3D CGI, 2D animation, motion graphics, product visualization, and character animation. Our team is skilled in adapting to any visual style required for your project.'
      },
      {
        q: 'How long does an animation project take?',
        a: 'Project timelines vary depending on complexity, scope, and deliverables. A typical 30-second product animation might take 4-8 weeks, while a full brand campaign could take 8-16 weeks. We always provide detailed timelines during our initial consultation.'
      },
      {
        q: 'Do you provide scripting and storyboarding?',
        a: 'Yes! We offer full creative development services including scripting, storyboarding, concept art, and animatics. Our in-house creative team works closely with you to develop the perfect narrative for your project.'
      },
      {
        q: 'Do you work with agencies as well as brands?',
        a: 'Absolutely. We partner with creative agencies, media agencies, and directly with brands. We understand the different dynamics and requirements of each relationship and adapt our workflow accordingly.'
      },
      {
        q: 'What does an animation project cost?',
        a: 'Costs vary based on complexity, duration, style, and deliverables. We offer transparent pricing and can work within most budgets. Contact us for a detailed quote tailored to your specific project needs.'
      },
      {
        q: "What's the difference between 2D and 3D?",
        a: '2D animation is created in a two-dimensional space with width and height, often using hand-drawn or vector techniques. 3D animation adds depth, allowing for realistic lighting, textures, and camera movement. The choice depends on your project goals and aesthetic preferences.'
      },
      {
        q: 'Is CGI animation the same as 3D?',
        a: 'CGI (Computer Generated Imagery) is an umbrella term that includes both 2D and 3D computer-generated visuals. 3D is a specific type of CGI that creates three-dimensional environments and objects. All our 3D work is CGI, but not all CGI is 3D.'
      }
    ]
  },
  {
    title: '',
    questions: [
      {
        q: 'Do you only create 3D animation?',
        a: 'No, we offer a full range of animation services including 2D animation, motion graphics, stop-motion, and mixed media approaches. We recommend the best technique based on your project objectives, not just our capabilities.'
      },
      {
        q: "What if I don't have a script or concept yet?",
        a: "That's perfectly fine! Many of our clients come to us with just an idea or a problem to solve. Our creative team can help you develop concepts, scripts, and visual directions from scratch through our discovery and development process."
      },
      {
        q: 'Who do you typically work with?',
        a: 'We work with a diverse range of clients including global brands, creative agencies, startups, and broadcasters. Our clients span industries such as technology, FMCG, automotive, healthcare, entertainment, and retail.'
      },
      {
        q: 'Why animation instead of live action?',
        a: 'Animation offers unique advantages: complete creative control, ability to visualize the impossible, consistent quality across markets, easier updates and iterations, and often more cost-effective for complex visual requirements. It also stands out in crowded media landscapes.'
      },
      {
        q: 'Do you use AI in your animation process?',
        a: 'We leverage AI tools as part of our creative workflow to enhance efficiency and explore creative possibilities, but all final work is crafted and refined by our experienced artists. We believe in human creativity guided by the best available technology.'
      },
      {
        q: 'Can you repurpose content?',
        a: 'Yes! We design projects with repurposing in mind. We can create master assets that can be adapted for different platforms, aspect ratios, languages, and markets, maximizing the value of your investment.'
      },
      {
        q: 'Why choose Frantic over another studio?',
        a: 'We combine 20+ years of production experience with creative agency thinking. We\'re obsessively focused on quality, incredibly responsive, and built for speed without compromising on brilliance. Our track record with top brands speaks for itself.'
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className="w-full py-6 flex items-start justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm md:text-base text-foreground group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <span className="flex-shrink-0 mt-1 text-primary">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs text-primary tracking-[0.2em] uppercase mb-4">
            FAQs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Frequently asked <span className="text-primary">questions.</span>
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-16">
          {faqColumns.map((column, colIndex) => (
            <div key={colIndex} className="w-full lg:w-[calc(50%_-_2rem)]">
              {column.questions.map((item, index) => (
                <FAQItem
                  key={`${colIndex}-${index}`}
                  question={item.q}
                  answer={item.a}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
