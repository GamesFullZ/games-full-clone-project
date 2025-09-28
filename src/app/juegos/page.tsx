import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { games as allGames } from "@/app/lib/data";
import Link from "next/link";

function GameCard({ game }: { game: (typeof allGames)[number] }) {
  return (
    <Link href={`/juegos/${game.slug}`} className="group block overflow-hidden rounded-xl card-gamer transition">
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <img src={game.cover} alt={game.title} className="game-card__img" />
        {game.rating && (
          <span className="game-card__badge absolute left-2 top-2">⭐ {game.rating.toFixed(1)}</span>
        )}
        <h3 className="game-card__title text-sm sm:text-base">{game.title}</h3>
        <div className="game-card__overlay" />
      </div>
      <div className="p-3">
        {/* etiquetas de género debajo para ayudar al filtrado visual */}
        <div className="mt-1 flex flex-wrap gap-1">
          {game.genres.slice(0, 2).map((g) => (
            <span key={g} className="rounded-md bg-[rgba(12,142,235,0.12)] px-2 py-0.5 text-xs text-[var(--color-science-blue-200)] border border-[rgba(12,142,235,0.25)]">{g}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function sortGames(list: typeof allGames, sort: string) {
  const arr = [...list];
  switch (sort) {
    case "rating":
      return arr.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "az":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr; // relevancia (orden original)
  }
}

export default function JuegosPage({ searchParams }: { searchParams?: { genre?: string; sort?: string } }) {
  const genre = searchParams?.genre || "";
  const sort = searchParams?.sort || "relevancia";

  const filtered = allGames.filter((g) => (genre ? g.genres.includes(genre) : true));
  const sorted = sortGames(filtered, sort);

  return (
    <div className="min-h-screen gamer-gradient-bg">
      <NavigationHeader />

      <main className="container space-y-6 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="section-title text-3xl font-bold text-white">Juegos</h1>
            <p className="body-copy">Explora títulos con un estilo moderno: filtra por género y ordena por valoración.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <form className="flex items-center gap-2">
              <select name="genre" defaultValue={genre} className="rounded-md border border-white/10 bg-[rgba(6,75,134,0.35)] px-3 py-2 text-sm text-white">
                <option value="">Todos los géneros</option>
                {Array.from(new Set(allGames.flatMap((g) => g.genres))).map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <select name="sort" defaultValue={sort} className="rounded-md border border-white/10 bg-[rgba(6,75,134,0.35)] px-3 py-2 text-sm text-white">
                <option value="relevancia">Relevancia</option>
                <option value="rating">Más valorados</option>
                <option value="az">A-Z</option>
              </select>
              <button className="btn-gamer-primary text-sm">Aplicar</button>
            </form>
          </div>
        </div>

        <section aria-label="Juegos destacados" className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="section-title text-xl font-semibold text-white">Destacados</h2>
            <Link href="/juegos?sort=rating" className="link-glow text-sm font-semibold">Ver más</Link>
          </div>
          <div className="relative mask-fade-x">
            <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {sortGames(allGames, "rating").slice(0, 12).map((g) => (
                <div key={g.slug} className="snap-start shrink-0 w-40 sm:w-48">
                  <GameCard game={g} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {sorted.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}