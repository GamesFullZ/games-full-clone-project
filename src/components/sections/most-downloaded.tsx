"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';

const games = [
  {
    title: 'Grand Theft Auto V',
    downloads: '356.0k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/grand-theft-auto-v-1006-poster-193x288-8.jpg?',
    href: '/juegos/grand-theft-auto-v-elamigos',
  },
  {
    title: 'God of War',
    downloads: '308.4k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/God-of-War-193x288-9.jpg?',
    href: '/juegos/god-of-war-elamigos',
  },
  {
    title: 'Red Dead Redemption 2',
    downloads: '253.3k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Red-Dead-Redemption-2-193x288-10.jpg?',
    href: '/juegos/red-dead-redemption-2-elamigos',
  },
  {
    title: 'Days Gone Remastered',
    downloads: '239.5k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Days-Gone-193x288-11.jpg?',
    href: '/juegos/days-gone-elamigos',
  },
  {
    title: 'eFootball PES 2021',
    downloads: '185.5k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/grand-theft-auto-v-1006-poster-193x288-8.jpg?', // Placeholder image
    href: '/juegos/efootball-pes-2021-cpy',
  },
  {
    title: 'The Last of Us Part I Deluxe Edition',
    downloads: '182.7k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/God-of-War-193x288-9.jpg?', // Placeholder image
    href: '/juegos/the-last-of-us-part-i-deluxe-edition',
  },
    {
    title: 'Forza Horizon 5 Premium Edition',
    downloads: '179.7k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Red-Dead-Redemption-2-193x288-10.jpg?', // Placeholder image
    href: '/juegos/forza-horizon-5-elamigos',
  },
  {
    title: 'Cyberpunk 2077',
    downloads: '176.6k',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/Days-Gone-193x288-11.jpg?', // Placeholder image
    href: '/juegos/cyberpunk-2077-elamigos',
  },
];

const MostDownloaded = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const newScrollLeft = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto w-full my-10 px-6 lg:px-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-base tablet:text-2xl font-semibold tracking-tight">
          Más descargados
        </h2>
        <Link 
          href="/juegos" 
          className="text-base tablet:text-2xl text-white hover:text-primary transition-colors duration-300">
          Ver mas
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth scrollbar-hide py-3 px-1 -mx-1 gap-x-0.5"
        >
          {games.map((game, index) => (
            <div key={index} className="flex-none justify-center px-1 snap-start basis-1/3 laptop:basis-1/4 desktop:basis-1/5">
                <Link href={game.href} className="block relative group w-36 h-56 tablet:w-48 tablet:h-72 rounded-2xl border-2 border-transparent shadow-md shadow-black/30 hover:shadow-primary/20 hover:border-primary active:border-green-100 active:shadow-green-100 transition-all duration-300 overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      className="object-cover origin-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 z-10 flex">
                        <span className="flex items-center gap-1.5 rounded-md bg-black/60 backdrop-blur-sm px-2 py-1 text-xs font-semibold text-white">
                            <Download className="w-3 h-3" />
                            {game.downloads}
                        </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <p className="absolute bottom-4 left-0 w-full z-10 font-bold text-xs laptop:text-sm line-clamp-2 px-4 text-white">
                        {game.title}
                    </p>
                </Link>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-card/80 backdrop-blur-sm rounded-full p-1 text-foreground hover:bg-primary hover:text-primary-foreground transition-all hidden md:flex items-center justify-center w-8 h-8"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-card/80 backdrop-blur-sm rounded-full p-1 text-foreground hover:bg-primary hover:text-primary-foreground transition-all hidden md:flex items-center justify-center w-8 h-8"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default MostDownloaded;