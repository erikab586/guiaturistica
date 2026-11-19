import type { Lugar } from "@/shared/types/lugar";
import { LugarCard } from "../components/LugarCard";

export function LugaresView({ lugares }: { lugares: Lugar[] }) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {lugares.map((lugar) => <LugarCard key={lugar.id} lugar={lugar} />)}
    </section>
  );
}
