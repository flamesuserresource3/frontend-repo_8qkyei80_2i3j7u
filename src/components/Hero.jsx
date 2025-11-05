import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-300/80 px-3 py-1 text-xs font-bold text-neutral-900 shadow-sm">
            ✨ Festival Diskon Minggu Ini
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
            Belanja seru, visual playful, navigasi super mudah.
          </h1>
          <p className="mt-3 text-neutral-700 sm:text-lg" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
            Selamat datang di Playful Bazaar — marketplace dengan nuansa energik dan ramah. Temukan produk favoritmu dengan tampilan yang bersih dan menyenangkan.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 transition-colors">
              Jelajahi Produk
            </a>
            <a href="#categories" className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">
              Lihat Kategori
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
