import type { Toy } from '../backend';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  toy: Toy;
}

const categoryColors: Record<string, string> = {
  'Die-Cast': 'bg-racing-red/20 text-racing-red border-racing-red/30',
  'Pull-Back': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Collector': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

const carEmojis: Record<string, string> = {
  'Die-Cast': '🏎️',
  'Pull-Back': '🚗',
  'Collector': '🏆',
};

// Generate a deterministic gradient based on toy id
function getCardGradient(id: string): string {
  const gradients = [
    'from-racing-red/20 to-charcoal-mid',
    'from-blue-900/30 to-charcoal-mid',
    'from-yellow-900/20 to-charcoal-mid',
    'from-purple-900/20 to-charcoal-mid',
    'from-green-900/20 to-charcoal-mid',
    'from-orange-900/20 to-charcoal-mid',
  ];
  const index = id.charCodeAt(id.length - 1) % gradients.length;
  return gradients[index];
}

export default function ProductCard({ toy }: ProductCardProps) {
  const categoryClass = categoryColors[toy.category] ?? 'bg-silver/20 text-silver border-silver/30';
  const emoji = carEmojis[toy.category] ?? '🚘';
  const gradient = getCardGradient(toy.id);

  return (
    <article className="group relative bg-charcoal-light border border-charcoal-border hover:border-racing-red/50 rounded-none transition-all duration-300 hover:shadow-card-hover overflow-hidden flex flex-col">
      {/* Image area */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Decorative lines */}
        <div className="absolute inset-0 stripe-pattern opacity-20" />
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-racing-red to-transparent" />

        {/* Car emoji / placeholder visual */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="text-6xl filter drop-shadow-lg">{emoji}</span>
          <div className="font-heading font-black text-xs tracking-widest uppercase text-silver/50">
            {toy.category}
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-heading font-bold tracking-wider uppercase border rounded-none ${categoryClass}`}>
            <Tag className="w-2.5 h-2.5" />
            {toy.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading font-black text-lg uppercase tracking-wide text-foreground mb-2 group-hover:text-racing-red transition-colors duration-200 leading-tight">
          {toy.name}
        </h3>
        <p className="font-body text-sm text-silver/70 leading-relaxed flex-1 mb-4 line-clamp-3">
          {toy.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-charcoal-border">
          <div>
            <span className="font-heading font-black text-2xl text-racing-red">
              ${toy.price.toFixed(2)}
            </span>
          </div>
          <Button
            size="sm"
            className="bg-racing-red hover:bg-racing-red-light text-white font-heading font-bold text-xs tracking-widest uppercase rounded-none px-4 py-2 transition-all duration-200 hover:shadow-red-glow"
          >
            <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
