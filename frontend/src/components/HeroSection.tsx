import { ArrowRight, Star, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleShopNow = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-banner.dim_1440x600.png')" }}
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30" />

      {/* Stripe accent */}
      <div className="absolute inset-0 stripe-pattern opacity-30" />

      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-racing-red" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-racing-red/20 border border-racing-red/40 rounded-none px-4 py-1.5 mb-6">
            <Zap className="w-3.5 h-3.5 text-racing-red" />
            <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-racing-red">
              Premium Die-Cast Collection
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading font-black text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none text-foreground mb-4">
            REV UP
            <br />
            <span className="text-racing-red">YOUR</span>
            <br />
            COLLECTION
          </h1>

          {/* Tagline */}
          <p className="font-body text-lg sm:text-xl text-silver max-w-xl mb-8 leading-relaxed">
            SpeedCast Toys — premium die-cast car models for collectors &amp; enthusiasts. From legendary supercars to iconic muscle cars, find your next prized piece.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { icon: Trophy, value: '500+', label: 'Models' },
              { icon: Star, value: '4.9★', label: 'Rating' },
              { icon: Zap, value: '1:18', label: 'Scale' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-racing-red" />
                <div>
                  <div className="font-heading font-black text-xl text-foreground leading-none">{value}</div>
                  <div className="font-body text-xs text-silver uppercase tracking-widest">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={handleShopNow}
              className="bg-racing-red hover:bg-racing-red-light text-white font-heading font-bold text-base tracking-widest uppercase px-8 py-6 rounded-none border-0 transition-all duration-200 hover:shadow-red-glow group"
            >
              Shop Now
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleLearnMore}
              variant="outline"
              className="border-silver/40 text-silver hover:text-foreground hover:border-silver font-heading font-bold text-base tracking-widest uppercase px-8 py-6 rounded-none bg-transparent transition-all duration-200"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-racing-red" />
        <div className="w-1.5 h-1.5 rounded-full bg-racing-red" />
      </div>
    </section>
  );
}
