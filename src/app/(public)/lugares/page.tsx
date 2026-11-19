import type { Lugar } from "@/shared/types/lugar";

import { getSupabaseServerClient } from "@/api/lib/supabase";
import { LugarRepository } from "@/api/modules/lugares/Lugar.repository";
import { LugarService } from "@/api/modules/lugares/Lugar.service";
import { LugarController } from "@/api/modules/lugares/Lugar.controller";
import { LugaresView } from "@/frontend/modules/lugares/views/LugaresView";

export const dynamic = "force-dynamic";

export default async function LugaresPage() {
  const repository = new LugarRepository(getSupabaseServerClient());
  const controller = new LugarController(new LugarService(repository));

  let lugares: Lugar[];

  try {
    lugares = await controller.index();
  } catch {
    lugares = [];
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-sky-700">Guía local</p>
        <h1 className="mt-2 text-4xl font-bold text-slate-950">Lugares</h1>
      </header>

      {lugares.length > 0 ? (
        <LugaresView lugares={lugares} />
      ) : (
        <p className="rounded-xl border border-dashed border-slate-300 p-8 text-slate-600">
          Configura Supabase y crea datos en la tabla <code>lugares</code> para comenzar.
        </p>
      )}
    </main>
  );
}
