import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';

const navLinks = [
  {
    name: 'EXPERTISE',
    href: '#expertise',
    children: [
      { name: 'Product Launches', href: '#' },
      { name: 'Brand Campaigns', href: '#' },
      { name: 'Social & Digital', href: '#' },
      { name: 'Retail & Experiential', href: '#' },
      { name: 'Science & Medical', href: '#' },
      { name: 'Broadcast & OOH', href: '#' },
    ],
  },
  {
    name: 'WORK',
    href: '#work',
    children: [
      { name: 'Case Studies', href: '#' },
      { name: 'Showreel', href: '#' },
      { name: 'Awards', href: '#' },
    ],
  },
  {
    name: 'ABOUT',
    href: '#about',
    children: [
      { name: 'About Us', href: '#' },
      { name: 'Studio', href: '#' },
      { name: 'Capabilities', href: '#' },
    ],
  },
  {
    name: 'CAREERS',
    href: '#careers',
    children: [
      { name: 'Open Roles', href: '#' },
      { name: 'Studio Culture', href: '#' },
    ],
  },
  {
    name: 'BLOG',
    href: '#blog',
    children: [
      { name: 'Latest News', href: '#' },
      { name: 'Archive', href: '#' },
    ],
  },
  {
    name: 'CONTACT',
    href: '#contact',
    children: [
      { name: 'New Business', href: '#' },
      { name: 'General Enquiries', href: '#' },
    ],
  },
];

function NavItem({ link }: { link: typeof navLinks[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={link.href}
        className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 tracking-wider py-2"
      >
        {link.name}
        <ChevronDown
          size={10}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </a>
      {isOpen && (
        <div className="absolute top-full left-0 bg-background border border-border py-2 min-w-[200px] z-50 shadow-lg">
          {link.children.map((child) => (
            <a
              key={child.name}
              href={child.href}
              className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-muted/30 transition-colors tracking-wide"
            >
              {child.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-background'
      }`}
    >
      {/* Top Bar: phone + social icons */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="hidden lg:flex items-center justify-end gap-6 py-2">
            <a
              href="tel:+4402071646431"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              +44(0)20 7164 6431
            </a>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon size={14} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon size={14} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <YoutubeIcon size={14} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav: logo + nav links */}
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-5">
          <a href="#" className="text-3xl font-bold text-primary tracking-tight">
            Frantic.
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-6 py-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="mt-6">
              <a href="tel:+4402071646431" className="text-sm text-primary">
                +44(0)20 7164 6431
              </a>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <YoutubeIcon size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
