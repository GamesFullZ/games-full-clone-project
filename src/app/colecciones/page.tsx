import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { collections } from "@/app/lib/data";
import Link from "next/link";

export default function ColeccionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <main className="container space-y-6 py-8">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-bold">Colecciones</h1>
            <p className="text-muted-foreground">Sagas y packs curados con una presentación moderna.</p>
          </div>
        </div>

        {/* Carrusel Destacado */}
        <section aria-label="Colecciones destacadas" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Destacadas</h2>
            <span className="text-sm text-muted-foreground">Explora nuestras mejores selecciones</span>
          </div>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {collections.slice(0, 8).map((c) => (
                <Link
                  key={c.slug}
                  href={`/colecciones/${c.slug}`}
                  className="snap-start group shrink-0 w-[320px] md:w-[420px] overflow-hidden rounded-xl border bg-card transition hover:shadow-xl"
                >
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <img src={c.banner} alt={c.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="badge-text absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-white">{c.games.length} juegos</span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{c.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
                    <div className="mt-3">
                      <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white">Ver colección</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {collections.map((c) => (
            <Link key={c.slug} href={`/colecciones/${c.slug}`} className="group overflow-hidden rounded-xl border bg-card transition hover:shadow-xl">
              <div className="relative aspect-[16/7] w-full overflow-hidden">
                <img src={c.banner} alt={c.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="badge-text absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-white">{c.games.length} juegos</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{c.description}</p>
                <div className="mt-3">
                  <span className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white">Ver colección</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}