import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedCategories from './components/FeaturedCategories';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductGrid />
      </main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
              © {new Date().getFullYear()} Playful Bazaar — marketplace penuh energi dan percaya diri.
            </p>
            <nav className="flex items-center gap-4">
              <a href="#" className="hover:text-neutral-900">Kebijakan Privasi</a>
              <a href="#" className="hover:text-neutral-900">Syarat & Ketentuan</a>
              <a href="#" className="hover:text-neutral-900">Bantuan</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
