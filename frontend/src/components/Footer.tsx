import { Heart } from 'lucide-react';
import { SiInstagram, SiFacebook, SiX, SiYoutube } from 'react-icons/si';

const footerLinks = {
  Shop: ['Die-Cast Models', 'Pull-Back Cars', 'Collector Editions', 'New Arrivals', 'Sale'],
  Support: ['FAQ', 'Shipping Info', 'Returns', 'Track Order', 'Contact Us'],
  Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Blog'],
};

const socialLinks = [
  { icon: SiInstagram, label: 'Instagram', href: '#' },
  { icon: SiFacebook, label: 'Facebook', href: '#' },
  { icon: SiX, label: 'X (Twitter)', href: '#' },
  { icon: SiYoutube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'speedcast-toys');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-light border-t border-charcoal-border">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 mb-4"
            >
              <img
                src="/assets/generated/toy-car-logo.dim_128x128.png"
                alt="SpeedCast Toys"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl font-black text-foreground tracking-widest uppercase">
                  SpeedCast
                </span>
                <span className="font-heading text-xs font-bold text-racing-red tracking-[0.3em] uppercase">
                  Toys
                </span>
              </div>
            </button>
            <p className="font-body text-sm text-silver/70 leading-relaxed max-w-xs mb-6">
              Premium die-cast car toys for collectors and enthusiasts. Fueling passion for automotive excellence since 2014.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-charcoal border border-charcoal-border flex items-center justify-center text-silver/60 hover:text-racing-red hover:border-racing-red/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-heading font-black text-sm uppercase tracking-widest text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-silver/60 hover:text-racing-red transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-charcoal-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-silver/40">
              © {year} SpeedCast Toys. All rights reserved.
            </p>
            <p className="font-body text-xs text-silver/40 flex items-center gap-1.5">
              Built with{' '}
              <Heart className="w-3 h-3 text-racing-red fill-racing-red" />{' '}
              using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-racing-red hover:text-racing-red-light transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
