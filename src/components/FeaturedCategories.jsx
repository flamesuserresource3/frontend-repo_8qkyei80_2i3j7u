import { Gamepad2, Headphones, Monitor, Camera } from 'lucide-react';

const categories = [
  {
    name: 'Gaming & Console',
    icon: Gamepad2,
    color: 'from-teal-300 to-teal-500',
    bg: 'bg-teal-50',
  },
  {
    name: 'Audio Seru',
    icon: Headphones,
    color: 'from-pink-300 to-pink-500',
    bg: 'bg-pink-50',
  },
  {
    name: 'Monitor & Aksesoris',
    icon: Monitor,
    color: 'from-yellow-300 to-orange-400',
    bg: 'bg-yellow-50',
  },
  {
    name: 'Kamera & Kreatif',
    icon: Camera,
    color: 'from-blue-300 to-blue-500',
    bg: 'bg-blue-50',
  },
];

export default function FeaturedCategories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
          Kategori Unggulan
        </h2>
        <a href="#" className="text-sm font-semibold text-teal-700 hover:text-teal-800">Lihat semua</a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <a
              key={cat.name}
              href="#"
              className={`group rounded-2xl ${cat.bg} p-4 shadow-sm ring-1 ring-inset ring-neutral-200 transition hover:-translate-y-0.5 hover:shadow-md`}
            >
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${cat.color} text-white shadow`}> 
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-neutral-900" style={{ fontFamily: 'Figtree, var(--font-sans, ui-sans-serif)' }}>
                  {cat.name}
                </p>
                <p className="text-xs text-neutral-600">Jelajahi sekarang →</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
