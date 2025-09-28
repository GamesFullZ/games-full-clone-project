import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { collections, games } from "@/app/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = collections.find((c) => c.slug === params.slug);
  if (!collection) return notFound();
  const list = games.filter((g) => collection.games.includes(g.slug));

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <main className="container space-y-6 py-8">
        <div className="overflow-hidden rounded-xl border">
          <div className="relative aspect-[16/6] w-full">
            <img src={collection.banner} alt={collection.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <h1 className="text-3xl font-bold">Colección: {collection.title}</h1>
              <p className="text-sm text-muted-foreground">{collection.description}</p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Juegos incluidos</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {list.map((g) => (
              <Link key={g.slug} href={`/juegos/${g.slug}`} className="group block overflow-hidden rounded-xl border bg-card transition hover:shadow-xl">
                <div className="relative aspect-[2/3] w-full overflow-hidden">
                  <img src={g.cover} alt={g.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-3">
                  <h3 className="line-clamp-1 text-sm font-semibold text-foreground">{g.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}