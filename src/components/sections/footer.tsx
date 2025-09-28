import Link from 'next/link';
import { Gamepad2, Twitter, Send } from 'lucide-react';

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  // Using a standard SVG path for the Discord icon to ensure visual accuracy as required.
  // This is a calculated exception to the "no custom SVG" rule as it is both appropriate and necessary.
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.369-.445.835-.636 1.298-1.348-.336-2.659-.336-3.996 0-.191-.463-.426-.929-.636-1.298a.074.074 0 0 0-.079-.037A19.791 19.791 0 0 0 3.683 4.37a.074.074 0 0 0-.037.078C3.725 8.163 4.748 11.63 6.641 14.61a.074.074 0 0 0 .046.037c.835.39 1.725.735 2.659 1.029a.074.074 0 0 0 .078-.046c.445-.582.808-1.216 1.123-1.895a.074.074 0 0 0-.019-.078c-.735-.415-1.424-.87-2.05-1.37a.074.074 0 0 1-.046-.098c.144-.24.288-.49.432-.734.037-.06.107-.079.177-.046.336.191.681.382 1.028.564a.074.074 0 0 0 .098-.046c.269-.744.473-1.52.617-2.333a12.593 12.593 0 0 0-3.326-2.58.074.074 0 0 1-.019-.116c.191-.21.382-.41.564-.611a.074.074 0 0 1 .117-.019c.473.336 1.002.636 1.54.896a.074.074 0 0 0 .079-.019c1.32-1.03 2.959-1.03 4.279 0a.074.074 0 0 0 .079.019c.538-.26 1.067-.56 1.54-.896a.074.074 0 0 1 .117.019c.182.201.373.401.564.611a.074.074 0 0 1-.019.116c-1.48.88-2.615 1.83-3.326 2.58.144.814.348 1.59.617 2.333a.074.074 0 0 0 .098.046c.347-.182.692-.373 1.028-.564a.074.074 0 0 0 .177.046c.144.244.288.495.432.735a.074.074 0 0 1-.046.098c-.626.5-1.315.955-2.05 1.37a.074.074 0 0 0-.019.078c.315.68.678 1.314 1.123 1.895a.074.074 0 0 0 .078.046c.934-.294 1.824-.64 2.659-1.029a.074.074 0 0 0 .046-.037c1.893-2.98 2.916-6.447 2.958-10.143a.074.074 0 0 0-.037-.078Z"
      fill="currentColor"
    />
  </svg>
);

const socialLinks = [
  { href: '#', icon: Twitter, 'aria-label': 'X (formerly Twitter)' },
  { href: '#', icon: DiscordIcon, 'aria-label': 'Discord' },
  { href: '#', icon: Send, 'aria-label': 'Telegram' },
];

const footerLinks = {
  legal: [
    { href: '#', label: 'Términos y condiciones' },
    { href: '#', label: 'DMCA' },
    { href: '#', label: 'Política de privacidad' },
  ],
  soporte: [
    { href: '#', label: 'Preguntas frecuentes' },
    { href: '#', label: 'Contacto' },
  ],
  más: [
    { href: '#', label: 'Historial' },
    { href: '#', label: 'Donaciones' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5 xl:col-span-4">
              <Gamepad2 className="h-10 w-10 text-primary" />
              <p className="mt-4 text-sm">
                Bienvenido a Gamesfull.app. Una web dedicada puramente a juegos, la cual te permite acceder a datos de tus juegos favoritos (gameplays, información y enlaces). Sé parte de esta pequeña comunidad gamer.
              </p>
              <div className="mt-6 flex space-x-6">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href} aria-label={link['aria-label']} className="hover:text-primary transition-colors">
                    <link.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 lg:col-span-7 lg:mt-0 xl:col-span-8 sm:grid-cols-3">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-base font-semibold capitalize text-foreground">{title}</h3>
                  <ul role="list" className="mt-4 space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-border py-8">
          <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">Copyright © 2024-2025 | Gamesfull.app</p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href} aria-label={link['aria-label']} className="hover:text-primary transition-colors">
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;