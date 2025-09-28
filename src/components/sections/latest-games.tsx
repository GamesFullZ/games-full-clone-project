"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Game {
  title: string;
  image: string;
  url: string;
  status: "nuevo" | "actualizado";
}

const games: Game[] = [
  {
    title: "PacMan World 2 RePac",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/pacman-world-2-repac-1759011422374-193x288-4.jpg?",
    url: "#",
    status: "nuevo",
  },
  {
    title: "Hades II",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/hades-ii-1758827848134-193x288-5.jpg?",
    url: "#",
    status: "nuevo",
  },
  {
    title: "Silent Hill f Deluxe Edition",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/silent-hill-f-deluxe-edition-1758647244596-193x288-6.jpg?",
    url: "#",
    status: "nuevo",
  },
  {
    title: "Stellaris Galaxy Edition",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/stellaris-galaxy-edition-1935-poster-193x288-7.jpg?",
    url: "#",
    status: "actualizado",
  },
];

const GameCard = ({ game }: { game: Game }) => (
  <div className="flex-none basis-1/2 sm:basis-1/3 lg:basis-1/4 py-3 px-1.5 flex justify-center snap-start">
    <Link
      href={game.url}
      className="block relative group w-36 h-56 md:w-48 md:h-72 rounded-2xl border-2 border-transparent shadow-md hover:shadow-lg hover:shadow-primary/30 hover:border-primary transition duration-300 overflow-hidden"
    >
      <Image
        src={game.image}
        alt={game.title}
        fill
        className="object-cover origin-center transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      <div className="absolute top-3.5 -right-9 flex z-10 rotate-45 pointer-events-none md:top-4">
        <span
          className={cn(
            "flex justify-center items-center capitalize w-32 h-5 text-xs font-semibold rounded-2xl shadow-md shadow-black/50 text-white",
            "md:h-6 md:text-sm",
            game.status === "nuevo" ? "bg-emerald-600" : "bg-yellow-500"
          )}
        >
          {game.status}
        </span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />

      <p className="absolute bottom-0 left-0 w-full z-10 font-bold text-xs lg:text-sm line-clamp-3 overflow-hidden px-4 mb-4 text-foreground">
        {game.title}
      </p>
    </Link>
  </div>
);

const LatestGames = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 1);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      handleScroll();
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      const resizeObserver = new ResizeObserver(handleScroll);
      resizeObserver.observe(scrollContainer);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        resizeObserver.disconnect();
      };
    }
  }, [handleScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="container my-10">
      <div className="flex justify-between items-baseline mb-4">
        <h2 className="text-foreground text-2xl md:text-3xl font-semibold tracking-tight">
          Últimos juegos
        </h2>
        <a
          href="#"
          className="text-sm md:text-base text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Ver mas
        </a>
      </div>
      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary disabled:opacity-0 transition-opacity"
            disabled={!showLeftArrow}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-2"
        >
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-background/50 backdrop-blur-sm rounded-full p-2 text-foreground hover:text-primary disabled:opacity-0 transition-opacity"
            disabled={!showRightArrow}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default LatestGames;