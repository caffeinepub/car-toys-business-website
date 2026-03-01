import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-charcoal-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <img
                src="/assets/generated/toy-car-logo.dim_128x128.png"
                alt="SpeedCast Toys Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl font-black text-foreground tracking-widest uppercase">
                SpeedCast
              </span>
              <span className="font-heading text-xs font-bold text-racing-red tracking-[0.3em] uppercase">
                Toys
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 font-heading font-bold text-sm tracking-widest uppercase text-silver hover:text-racing-red transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-racing-red group-hover:w-4/5 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              className="relative p-2 text-silver hover:text-racing-red transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-racing-red rounded-full text-[10px] font-bold text-white flex items-center justify-center">
                0
              </span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-silver hover:text-racing-red transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-charcoal-border bg-charcoal/98 backdrop-blur-md">
            <div className="py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 font-heading font-bold text-base tracking-widest uppercase text-silver hover:text-racing-red hover:bg-charcoal-mid transition-all duration-200 flex items-center gap-3"
                >
                  <Zap className="w-3 h-3 text-racing-red" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
