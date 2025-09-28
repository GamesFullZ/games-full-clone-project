import NavigationHeader from "@/components/sections/navigation-header";
import Footer from "@/components/sections/footer";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />

      <main className="container space-y-8 py-10">
        <header className="rounded-xl border bg-gradient-to-br from-secondary to-background p-8">
          <span className="badge-text rounded-md bg-primary/10 px-2 py-1 text-primary">Centro de ayuda</span>
          <h1 className="mt-3 text-3xl font-bold">Contacto</h1>
          <p className="mt-1 text-muted-foreground">Una experiencia única: elige el tipo de consulta (problema, negocios o general) y adaptamos las preguntas automáticamente.</p>
        </header>

        <section className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-xl border bg-card p-6">
              <h2 className="text-lg font-semibold">Cuéntanos más</h2>
              <p className="mt-1 text-sm text-muted-foreground">Completa el formulario y nos pondremos en contacto.</p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
          <aside className="space-y-4">
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold">Sugerencias</h3>
              <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
                <li>Incluye enlaces o capturas si reportas un problema.</li>
                <li>Para negocios, agrega tu sitio y redes.</li>
                <li>En general, sé claro y directo.</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold">Soporte rápido</h3>
              <p className="mt-1 text-sm text-muted-foreground">Resolvemos la mayoría de consultas en 24-48h.</p>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}