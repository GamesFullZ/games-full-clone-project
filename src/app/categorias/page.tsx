import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { categories, games } from "@/app/lib/data";
import Link from "next/link";

export default function CategoriasPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="container space-y-6 py-8">
        <div>
          <h1 className="text-3xl font-bold">Categorías</h1>
          <p className="text-muted-foreground">Explora por géneros y descubre nuevos juegos.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((cat) => {
            const count = games.filter((g) => g.genres.includes(cat)).length;
            return (
              <Link key={cat} href={`/juegos?genre=${encodeURIComponent(cat)}`} className="group rounded-xl border bg-card p-5 transition hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{cat}</h3>
                  <span className="badge-text rounded-md bg-primary/10 px-2 py-1 text-primary">{count} juegos</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Encuentra títulos de {cat} con un clic.</p>
                <span className="mt-3 inline-block text-sm font-semibold text-primary group-hover:underline">Ver juegos</span>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}