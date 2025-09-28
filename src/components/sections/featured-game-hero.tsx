"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturedGameHero = () => {
  return (
    <section className="my-10">
      <div className="container">
        <div className="relative">
          {/* Main slide container */}
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/images/hollow-knight-silksong-1757012805751-2.jpg?"
              alt="Hollow Knight Silksong promotional artwork"
              fill
              priority
              className="object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent lg:w-3/4" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="w-full text-center lg:w-7/12 lg:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-foreground pointer-events-none">
                  Hollow Knight Silksong
                </h2>
                <p className="mt-4 mb-10 text-sm text-muted-foreground line-clamp-3 pointer-events-none max-w-2xl mx-auto lg:mx-0">
                  Hollow Knight: Silksong es un juego metroidvania desarrollado por Team Cherry que sigue la historia de Hornet, una cazadora letal que se encuentra cautiva en un reino desconocido llamado Pharloom. Su objetivo es ascender hasta la superficie y descubrir por qué fue llevada allí.
                </p>
                <Link
                  href="https://gamesfull.app/juegos/hollow-knight-silksong"
                  className="inline-flex items-center justify-center whitespace-nowrap transition-colors py-3 px-5 text-sm md:text-base rounded-xl bg-primary text-primary-foreground hover:bg-[#059669] shadow-lg shadow-primary/20 hover:shadow-primary/40 mx-auto lg:mx-0"
                >
                  Ver juego
                </Link>
              </div>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-4 h-10 w-10 md:h-12 md:w-12 bg-card/30 hover:bg-card/60 rounded-full text-foreground backdrop-blur-sm"
            aria-label="Previous Game"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-4 h-10 w-10 md:h-12 md:w-12 bg-card/30 hover:bg-card/60 rounded-full text-foreground backdrop-blur-sm"
            aria-label="Next Game"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGameHero;