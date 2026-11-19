import type { Lugar } from "@/shared/types/lugar";

export async function getLugares(): Promise<Lugar[]> {
  const response = await fetch("/api/lugares", { cache: "no-store" });
  if (!response.ok) throw new Error("No se pudieron cargar los lugares");
  return response.json();
}
