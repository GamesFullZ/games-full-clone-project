"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Collection {
  title: string;
  views: string;
  imageUrl: string;
  href: string;
}

const collectionsData: Collection[] = [
  {
    title: 'Resident Evil',
    views: '67.4k',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/resident-evil-1747665389414-thumbnail-13.jpg?',
    href: '/colecciones/resident-evil',
  },
  {
    title: 'Assassins Creed',
    views: '60.3k',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/assassin-creed-1747615863366-thumbnail-14.jpg?',
    href: '/colecciones/assassins-creed',
  },
  {
    title: 'Batman',
    views: '30.7k',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/batman-1747667518471-thumbnail-15.jpg?',
    href: '/colecciones/batman',
  },
  {
    title: 'Dark Souls',
    views: '19.0k',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/assassin-creed-1747615863366-thumbnail-14.jpg?', // Placeholder as only 3 unique images are provided
    href: '/colecciones/dark-souls',
  },
];

export default function CollectionsSection() {
  return (
    <section className="my-10 w-full max-w-[1280px] mx-auto px-6 lg:px-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-base md:text-2xl font-semibold tracking-tight">Colecciones</h2>
        <Link href="/colecciones" className="text-white text-base md:text-2xl hover:text-primary transition-colors duration-300">
          Ver mas
        </Link>
      </div>

      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {collectionsData.map((collection, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Link href={collection.href} className="block group">
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                      <Image
                        src={collection.imageUrl}
                        alt={`Collection image for ${collection.title}`}
                        fill
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ boxShadow: 'inset 0px -80px 40px -20px #0F172A' }}
                      />
                      
                      <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-slate-100">
                        <Eye className="w-3.5 h-3.5" />
                        <span>{collection.views}</span>
                      </div>

                      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                        <h3 className="text-xl font-bold text-white">{collection.title}</h3>
                        <div className="bg-primary text-primary-foreground py-2 px-3 rounded-lg text-sm font-semibold transition-colors group-hover:bg-green-500 whitespace-nowrap">
                          Ver Colección
                        </div>
                      </div>
                    </div>
                  </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={cn(
            "absolute left-0 top-1/2 -translate-y-1/2 z-10",
            "bg-secondary/80 hover:bg-secondary text-foreground",
            "h-8 w-8",
            "hidden lg:flex"
          )} />
          <CarouselNext className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 z-10",
            "bg-secondary/80 hover:bg-secondary text-foreground",
            "h-8 w-8",
            "hidden lg:flex"
          )} />
        </Carousel>
      </div>
    </section>
  );
}