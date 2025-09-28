"use client";

import Link from "next/link";
import { Search, User, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const NavigationHeader = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Juegos", href: "/juegos" },
    { name: "Colecciones", href: "/colecciones" },
    { name: "Categorías", href: "/categorias" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-40 flex w-full items-center bg-[#15202b] px-2 py-2 font-sans shadow-lg shadow-primary/30 lg:px-8 lg:py-4">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">

        {/* Logo Section - First in DOM flow */}
        <div className="relative">
          <Link href="/" className="flex items-end">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/081064f9-beac-4964-b47f-84d3c3b01e8c-gamesfull-app/assets/svgs/logo-1.svg?" 
              alt="GamesFull Logo Icon" 
              className="h-10 w-10"
            />
            <div className="hidden lg:block">
              <span className="ml-2 flex text-3xl font-semibold leading-none text-foreground">
                <span className="font-inter">Games</span>
                <span className="font-inter font-bold text-primary">Full</span>
                <span className="ml-1 mt-auto text-xs font-semibold leading-normal text-primary">v4.0</span>
              </span>
            </div>
          </Link>
          <div className="absolute -top-1 left-0 -z-10 h-10 w-10 bg-primary blur-lg" />
        </div>

        {/* Navigation Section - Second in DOM, but visually first on mobile via 'order-first' */}
        <nav className="order-first lg:order-none">
          {/* Desktop Navigation Links */}
          <ul className="hidden gap-4 lg:flex">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`flex rounded-lg px-2 py-1 font-semibold transition duration-300 hover:bg-primary/20 hover:text-primary ${
                      isActive ? "text-primary bg-primary/10" : "text-foreground"
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Mobile Navigation Button */}
          <div className="flex lg:hidden">
            <button className="flex rounded-md p-2 text-foreground transition duration-300 hover:bg-primary/20 hover:text-primary">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
        
        {/* Right Icons Section - Third in DOM */}
        <nav className="flex items-center space-x-1 sm:space-x-3">
          <button className="flex h-10 w-10 shrink-0 rounded-lg p-2 text-foreground transition duration-300 hover:bg-primary/20 hover:text-primary">
            <Search className="h-full w-full" />
          </button>
          <div className="hidden lg:block">
            <button className="flex h-10 w-10 shrink-0 rounded-lg p-2 text-foreground transition duration-300 hover:bg-primary/20 hover:text-primary">
              <User className="h-full w-full" />
            </button>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default NavigationHeader;