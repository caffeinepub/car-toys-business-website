import { useGetAllToys } from '../hooks/useQueries';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, Zap } from 'lucide-react';

function ProductSkeleton() {
  return (
    <div className="bg-charcoal-light border border-charcoal-border rounded-none overflow-hidden">
      <Skeleton className="h-48 w-full bg-charcoal-mid" />
      <div className="p-5 space-y-3">
        <Skeleton className="h-5 w-3/4 bg-charcoal-mid" />
        <Skeleton className="h-4 w-full bg-charcoal-mid" />
        <Skeleton className="h-4 w-5/6 bg-charcoal-mid" />
        <div className="flex justify-between items-center pt-3">
          <Skeleton className="h-7 w-20 bg-charcoal-mid" />
          <Skeleton className="h-8 w-20 bg-charcoal-mid" />
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  const { data: toys, isLoading, isError } = useGetAllToys();

  return (
    <section id="products" className="py-20 lg:py-28 bg-charcoal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-racing-red" />
            <span className="font-heading font-bold text-xs tracking-[0.3em] uppercase text-racing-red">
              Our Collection
            </span>
          </div>
          <h2 className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase text-foreground leading-none mb-4">
            Featured
            <br />
            <span className="text-racing-red">Models</span>
          </h2>
          <p className="font-body text-silver max-w-xl text-lg">
            Hand-picked die-cast masterpieces for the discerning collector. Each model crafted with obsessive attention to detail.
          </p>
        </div>

        {/* Error state */}
        {isError && (
          <div className="flex items-center gap-3 p-6 bg-racing-red/10 border border-racing-red/30 text-racing-red mb-8">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="font-body text-sm">Failed to load products. Please try again later.</p>
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Products grid */}
        {!isLoading && toys && toys.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {toys.map((toy) => (
              <ProductCard key={toy.id} toy={toy} />
            ))}
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && toys && toys.length === 0 && (
          <div className="text-center py-20">
            <Zap className="w-12 h-12 text-racing-red mx-auto mb-4" />
            <p className="font-heading font-bold text-xl uppercase text-silver tracking-widest">
              Loading collection...
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
