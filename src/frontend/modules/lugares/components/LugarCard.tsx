import type { Lugar } from "@/shared/types/lugar";

export function LugarCard({ lugar }: { lugar: Lugar }) {
  const translation = lugar.idiomas_lugares?.find((item) => item.idioma === "pt")
    ?? lugar.idiomas_lugares?.[0];

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        {translation?.nome ?? lugar.slug}
      </h2>
      {translation?.resumo && <p className="mt-2 text-slate-600">{translation.resumo}</p>}
      {lugar.endereco && <p className="mt-3 text-sm text-slate-500">{lugar.endereco}</p>}
    </article>
  );
}
