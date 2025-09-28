"use client";

import { useMemo, useState } from "react";

const typeOptions = [
  { value: "problema", label: "Problema" },
  { value: "negocios", label: "Negocios" },
  { value: "general", label: "General" },
];

export const ContactForm = () => {
  const [type, setType] = useState("problema");
  const [submitted, setSubmitted] = useState(false);

  const fields = useMemo(() => {
    if (type === "negocios") {
      return [
        { name: "empresa", label: "Nombre de la empresa", type: "text", required: true },
        { name: "email", label: "Correo de contacto", type: "email", required: true },
        { name: "propuesta", label: "Propuesta o colaboración", type: "textarea", required: true },
      ];
    }
    if (type === "general") {
      return [
        { name: "asunto", label: "Asunto", type: "text", required: true },
        { name: "mensaje", label: "Mensaje", type: "textarea", required: true },
      ];
    }
    // problema
    return [
      { name: "juegoUrl", label: "URL del juego (si aplica)", type: "url", required: false },
      { name: "so", label: "Sistema Operativo", type: "text", required: true },
      { name: "descripcion", label: "Describe el problema", type: "textarea", required: true },
    ];
  }, [type]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = Object.fromEntries(data.entries());
    console.log({ type, payload });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border bg-card p-6 text-center">
        <h3 className="text-xl font-semibold">¡Gracias por contactarnos!</h3>
        <p className="mt-1 text-sm text-muted-foreground">Tu mensaje fue enviado correctamente. Te responderemos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="md:col-span-1">
          <label className="badge-text mb-2 block text-muted-foreground">Tipo</label>
          <select name="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full rounded-md border bg-secondary px-3 py-2">
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {fields.map((f) => (
        <div key={f.name}>
          <label className="badge-text mb-2 block text-muted-foreground">{f.label}</label>
          {f.type === "textarea" ? (
            <textarea name={f.name} required={f.required} rows={5} className="w-full rounded-md border bg-secondary px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
          ) : (
            <input name={f.name} type={f.type as any} required={f.required} className="w-full rounded-md border bg-secondary px-3 py-2 outline-none focus:ring-2 focus:ring-primary" />
          )}
        </div>
      ))}

      <div className="pt-2">
        <button type="submit" className="w-full rounded-md bg-primary px-4 py-3 font-semibold text-white hover:bg-primary/90">Enviar</button>
      </div>
    </form>
  );
};