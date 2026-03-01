import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { useGetAllToys } from './hooks/useQueries';
import { useAddToy } from './hooks/useQueries';
import type { Toy } from './backend';

const SAMPLE_TOYS: Toy[] = [
  {
    id: 'toy-001',
    name: 'Ferrari 488 GTB Die-Cast',
    description: 'Precision-crafted 1:18 scale die-cast replica of the iconic Ferrari 488 GTB. Features opening doors, detailed engine bay, and authentic racing livery.',
    price: 49.99,
    category: 'Die-Cast',
  },
  {
    id: 'toy-002',
    name: 'Lamborghini Huracán Racer',
    description: 'Stunning 1:24 scale Lamborghini Huracán with pull-back motor action. Detailed interior and authentic Lamborghini branding.',
    price: 29.99,
    category: 'Pull-Back',
  },
  {
    id: 'toy-003',
    name: 'Ford GT40 Le Mans Edition',
    description: 'Legendary 1:18 scale Ford GT40 in classic Gulf Oil livery. A must-have for motorsport history enthusiasts and serious collectors.',
    price: 64.99,
    category: 'Die-Cast',
  },
  {
    id: 'toy-004',
    name: 'Porsche 911 GT3 RS Collector',
    description: 'Highly detailed 1:43 scale Porsche 911 GT3 RS with authentic racing decals. Perfect for display cases and collector shelves.',
    price: 34.99,
    category: 'Collector',
  },
  {
    id: 'toy-005',
    name: 'McLaren P1 Hypercar Set',
    description: 'Exclusive 1:24 scale McLaren P1 with display stand and certificate of authenticity. Limited edition metallic finish.',
    price: 54.99,
    category: 'Die-Cast',
  },
  {
    id: 'toy-006',
    name: 'Bugatti Chiron Speed King',
    description: 'Breathtaking 1:18 scale Bugatti Chiron with opening hood and trunk. Detailed W16 engine replica and premium packaging.',
    price: 79.99,
    category: 'Collector',
  },
  {
    id: 'toy-007',
    name: 'Dodge Challenger SRT Hellcat',
    description: 'Muscle car legend in 1:24 scale with authentic Hellcat badging. Pull-back motor with realistic engine sound effects.',
    price: 24.99,
    category: 'Pull-Back',
  },
  {
    id: 'toy-008',
    name: 'Aston Martin DB5 Classic',
    description: 'Timeless 1:18 scale Aston Martin DB5 in silver birch finish. Iconic British motoring heritage in stunning detail.',
    price: 59.99,
    category: 'Die-Cast',
  },
];

function AppContent() {
  const { data: toys, isLoading } = useGetAllToys();
  const { mutateAsync: addToy } = useAddToy();
  const seededRef = useRef(false);

  useEffect(() => {
    if (seededRef.current) return;
    if (isLoading) return;
    if (!toys) return;

    if (toys.length === 0) {
      seededRef.current = true;
      const seedToys = async () => {
        for (const toy of SAMPLE_TOYS) {
          try {
            await addToy(toy);
          } catch {
            // ignore individual seed errors
          }
        }
      };
      seedToys();
    } else {
      seededRef.current = true;
    }
  }, [toys, isLoading, addToy]);

  return (
    <div className="min-h-screen bg-charcoal font-body">
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
