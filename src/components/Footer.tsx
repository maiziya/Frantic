import { Mail, Phone, MapPin } from 'lucide-react';
import { FacebookIcon, LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/SocialIcons';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Work', href: '#work' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Product Launches', href: '#' },
    { name: 'Brand Campaigns', href: '#' },
    { name: 'Social & Digital', href: '#' },
    { name: 'Retail & Experiential', href: '#' },
    { name: 'Science & Medical', href: '#' },
    { name: 'Broadcast & OOH', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ]
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border" id="contact">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap gap-12">
          {/* Brand */}
          <div className="w-full md:w-[calc(50%_-_1.5rem)] lg:w-[calc(40%_-_1.8rem)]">
            <a href="#" className="text-3xl font-bold text-primary tracking-tight mb-6 block">
              Frantic.
            </a>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              The CGI studio for brands with ambitions worth obsessing over.
              London & Oxford, working worldwide.
            </p>
            <div className="space-y-4">
              <a href="tel:+4402071646431" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+44(0)20 7164 6431</span>
              </a>
              <a href="mailto:hello@frantic.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
                <span>hello@frantic.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <div>
                  <p>London Studio</p>
                  <p className="text-sm">123 Animation Street, EC1A 1BB</p>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-[calc(50%_-_1.5rem)] lg:w-[calc(20%_-_2.4rem)]">
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="w-full md:w-[calc(50%_-_1.5rem)] lg:w-[calc(20%_-_2.4rem)]">
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="w-full md:w-[calc(50%_-_1.5rem)] lg:w-[calc(20%_-_2.4rem)]">
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Connect
            </h4>
            <div className="flex items-center gap-4 mb-8">
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
                <LinkedinIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all">
                <YoutubeIcon size={18} />
              </a>
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Frantic Animation Studio. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Crafted with <span className="text-primary">obsession</span> in London.
          </p>
        </div>
      </div>
    </footer>
  );
}