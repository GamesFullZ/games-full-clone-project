import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { games } from "@/app/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function GameDetailPage({ params }: { params: { slug: string } }) {
  const game = games.find((g) => g.slug === params.slug);
  if (!game) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-[320px,1fr]">
          <div className="overflow-hidden rounded-xl border bg-card">
            <img src={game.cover} alt={game.title} className="w-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Descargar {game.title}</h1>
            {game.rating && (<p className="mt-1 text-sm text-muted-foreground">Valoración: ⭐ {game.rating.toFixed(1)}</p>)}
            <p className="mt-4 text-foreground">{game.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {game.genres.map((g) => (
                <span key={g} className="badge-text rounded-md bg-primary/10 px-2 py-1 text-primary">{g}</span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#descargar" className="rounded-md bg-primary px-5 py-2 font-semibold text-white hover:bg-primary/90">Descargar</a>
              <Link href="/juegos" className="rounded-md border border-primary px-5 py-2 font-semibold text-primary hover:bg-primary/10">Ver más juegos</Link>
            </div>

            {game.requirements && (
              <section className="mt-8">
                <h2 className="text-xl font-semibold">Requisitos mínimos</h2>
                <div className="mt-3 grid gap-2 rounded-lg border bg-secondary p-4 text-sm">
                  <div className="flex justify-between"><span>SO</span><span className="text-muted-foreground">{game.requirements.os}</span></div>
                  <div className="flex justify-between"><span>Procesador</span><span className="text-muted-foreground">{game.requirements.processor}</span></div>
                  <div className="flex justify-between"><span>Memoria</span><span className="text-muted-foreground">{game.requirements.memory}</span></div>
                  <div className="flex justify-between"><span>Gráficos</span><span className="text-muted-foreground">{game.requirements.graphics}</span></div>
                  <div className="flex justify-between"><span>Almacenamiento</span><span className="text-muted-foreground">{game.requirements.storage}</span></div>
                </div>
              </section>
            )}

            {game.screenshots && game.screenshots.length > 0 && (
              <section className="mt-8">
                <h2 className="text-xl font-semibold">Capturas</h2>
                <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {game.screenshots.map((src, i) => (
                    <div key={i} className="overflow-hidden rounded-lg border">
                      <img src={src} alt={`${game.title} screenshot ${i+1}`} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="descargar" className="mt-10 rounded-xl border bg-card p-6">
              <h2 className="text-xl font-semibold">Enlaces de descarga</h2>
              <p className="mt-2 text-sm text-muted-foreground">Proporcionamos un proceso seguro y directo.</p>
              <div className="mt-4">
                <button className="w-full rounded-md bg-primary px-5 py-3 font-semibold text-white hover:bg-primary/90">Descargar ahora</button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}