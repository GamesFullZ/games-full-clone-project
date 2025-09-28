"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

const games = [
  {
    title: "God of War",
    views: "748.4k",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/God-of-War-193x288-9.jpg?",
    href: "/juegos/god-of-war-elamigos",
  },
  {
    title: "Grand Theft Auto V",
    views: "719.3k",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/grand-theft-auto-v-1006-poster-193x288-8.jpg?",
    href: "/juegos/grand-theft-auto-v-elamigos",
  },
  {
    title: "Days Gone Remastered",
    views: "710.2k",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Days-Gone-193x288-11.jpg?",
    href: "/juegos/days-gone-elamigos",
  },
  {
    title: "Cyberpunk 2077",
    views: "640.9k",
    imgSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Cyberpunk-2077-193x288-12.jpg?",
    href: "/juegos/cyberpunk-2077-elamigos",
  },
  {
    title: "The Last of Us Part I Deluxe Edition",
    views: "621.4k",
    imgSrc: "", 
    href: "/juegos/the-last-of-us-part-i-deluxe-edition",
  },
  {
    title: "Red Dead Redemption 2",
    views: "619.3k",
    imgSrc: "", 
    href: "/juegos/red-dead-redemption-2-elamigos",
  },
  {
    title: "Elden Ring Deluxe Edition v1.13.0",
    views: "592.3k",
    imgSrc: "", 
    href: "/juegos/elden-ring-deluxe-edition-elamigos",
  },
  {
    title: "Resident Evil Village Deluxe Edition",
    views: "549.2k",
    imgSrc: "", 
    href: "/juegos/resident-evil-village-elamigos",
  },
];

const GameCardPlaceholder = () => (
    <div className="absolute w-full h-full bg-card" />
);

export default function MostVisitedSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { offsetWidth } = scrollContainerRef.current;
      const scrollAmount = offsetWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="smartv:max-w-3xl mx-auto w-full my-10 relative p-6 lg:p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="block text-white items-center text-base lg:text-2xl font-semibold tracking-tight">
          Más visitados
        </h2>
        <Link 
          href="/juegos" 
          className="text-base lg:text-2xl text-white hover:text-primary transition-colors duration-300"
        >
          Ver mas
        </Link>
      </div>

      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-1"
        >
          {games.map((game, index) => (
            <div key={index} className="flex-none py-3 px-1 justify-center snap-start basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6">
              <Link 
                href={game.href} 
                className="block relative group w-36 h-56 lg:w-48 lg:h-72 rounded-2xl border-2 border-transparent shadow-[0_0_1rem_rgba(0,0,0,0.3)] hover:shadow-[0_0_1rem_rgba(16,185,129,0.5)] hover:border-primary transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10 text-white text-xs lg:text-sm font-bold bg-slate-900/70 backdrop-blur-sm px-2 py-1 rounded-md">
                  <Eye className="w-4 h-4" />
                  <span>{game.views}</span>
                </div>
                
                {game.imgSrc ? (
                  <Image
                    src={game.imgSrc}
                    alt={game.title}
                    width={192}
                    height={288}
                    className="absolute left-0 top-0 w-full h-full object-cover origin-center transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <GameCardPlaceholder />
                )}

                <div className="absolute top-0 left-0 w-full h-full" style={{ boxShadow: 'inset 0 -5rem 2rem -1rem rgba(0,0,0,0.7)' }}></div>

                <p className="absolute bottom-0 left-0 w-full z-10 font-bold text-xs lg:text-sm text-white line-clamp-3 px-4 mb-4">
                  {game.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute top-1/2 -translate-y-1/2 -left-3 p-2 rounded-full bg-card/60 hover:bg-card/90 text-white backdrop-blur-sm transition-all duration-300 z-20 hidden lg:flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute top-1/2 -translate-y-1/2 -right-3 p-2 rounded-full bg-card/60 hover:bg-card/90 text-white backdrop-blur-sm transition-all duration-300 z-20 hidden lg:flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}