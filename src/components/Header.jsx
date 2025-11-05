import { Search, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-400 via-yellow-300 to-pink-400" />
            <span className="text-xl font-extrabold tracking-wide" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
              Playful Bazaar
            </span>
          </div>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl items-center rounded-full border border-neutral-200 bg-neutral-50 focus-within:ring-2 focus-within:ring-teal-300">
            <Search className="ml-3 h-5 w-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Cari produk seru…"
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-neutral-400"
              style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-white hover:bg-teal-600 active:bg-teal-700 transition-colors">
              <Search className="h-4 w-4 md:hidden" />
              <span className="hidden md:inline text-sm font-medium" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>Cari</span>
            </button>
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-pink-500 px-1.5 text-xs font-bold text-white">3</span>
            </button>
            <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
