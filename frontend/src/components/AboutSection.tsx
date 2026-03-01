import { Shield, Award, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Authentic Quality',
    description: 'Every model is officially licensed and crafted to exacting standards. We only stock genuine die-cast from the world\'s top manufacturers.',
  },
  {
    icon: Award,
    title: 'Collector Grade',
    description: 'From 1:18 to 1:64 scale, our collection spans decades of automotive history. Perfect for display or play.',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Secure packaging and fast shipping ensures your prized models arrive in perfect condition, every time.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by enthusiasts, for enthusiasts. Join thousands of collectors who trust SpeedCast Toys for their collection.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-charcoal-light relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 stripe-pattern opacity-10" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-racing-red/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-racing-red" />
              <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-racing-red">
                Our Story
              </span>
            </div>
            <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-foreground leading-none mb-6">
              Passion
              <br />
              <span className="text-racing-red">Driven</span>
            </h2>
            <div className="space-y-4 font-body text-silver leading-relaxed">
              <p className="text-lg">
                SpeedCast Toys was born from a lifelong obsession with automotive excellence. We believe that every great car deserves to be immortalized in die-cast metal.
              </p>
              <p>
                From the roar of a Ferrari V12 to the raw power of an American muscle car, we curate only the finest scale models that capture the soul of these legendary machines.
              </p>
              <p>
                Whether you're a seasoned collector building a world-class display or a parent looking for the perfect gift, our collection has something to ignite that spark.
              </p>
            </div>

            {/* Stats bar */}
            <div className="mt-8 grid grid-cols-3 gap-4 pt-8 border-t border-charcoal-border">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '500+', label: 'Models Available' },
                { value: '10K+', label: 'Happy Collectors' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="font-heading font-black text-3xl text-racing-red">{value}</div>
                  <div className="font-body text-xs text-silver/70 uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-charcoal border border-charcoal-border hover:border-racing-red/40 p-6 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-racing-red/10 border border-racing-red/20 flex items-center justify-center mb-4 group-hover:bg-racing-red/20 transition-colors">
                  <Icon className="w-5 h-5 text-racing-red" />
                </div>
                <h3 className="font-heading font-black text-base uppercase tracking-wide text-foreground mb-2">
                  {title}
                </h3>
                <p className="font-body text-sm text-silver/70 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
