import { Star, ShoppingCart, SlidersHorizontal } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headset Aurora',
    price: 799000,
    rating: 4.7,
    reviews: 318,
    sold: 1200,
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1200&auto=format&fit=crop',
    badge: 'Promo 20%'
  },
  {
    id: 2,
    name: 'Console NeoPlay X',
    price: 5499000,
    rating: 4.9,
    reviews: 987,
    sold: 4200,
    image: 'https://images.unsplash.com/photo-1619590530232-da98a822baa5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb25zb2xlJTIwTmVvUGxheSUyMFh8ZW58MHwwfHx8MTc2MjM0MjgxMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Baru'
  },
  {
    id: 3,
    name: '4K Mini Projector',
    price: 1899000,
    rating: 4.5,
    reviews: 214,
    sold: 800,
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Mirrorless Camera Lite',
    price: 4599000,
    rating: 4.6,
    reviews: 641,
    sold: 3200,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
  },
];

function formatIDR(num) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);
}

function ProductCard({ product }) {
  const fullStars = Math.floor(product.rating);
  const hasHalf = product.rating - fullStars >= 0.5;

  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-orange-500/90 px-3 py-1 text-xs font-bold text-white shadow">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="line-clamp-2 text-sm font-semibold text-neutral-900" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < fullStars ? 'fill-current' : hasHalf && i === fullStars ? 'fill-current opacity-60' : 'opacity-30'}`} />
          ))}
          <span className="ml-2 text-xs text-neutral-600">{product.rating} • {product.reviews} ulasan • {product.sold} terjual</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-extrabold text-neutral-900" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
            {formatIDR(product.price)}
          </p>
          <button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600">
            <ShoppingCart className="h-4 w-4" />
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
            Produk Terpopuler
          </h2>
          <p className="text-sm text-neutral-600">Kuratif, menarik, dan siap diklik.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
          <SlidersHorizontal className="h-4 w-4" />
          Filter & Urutkan
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
