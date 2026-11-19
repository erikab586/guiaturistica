import { BaseRepository } from "../../core/BaseRepository";
import type { Lugar } from "@/shared/types/lugar";
import type { SupabaseClient } from "@supabase/supabase-js";

export class LugarRepository extends BaseRepository<Lugar> {
  constructor(supabase: SupabaseClient) {
    super(supabase, "lugares");
  }

  async findAll(): Promise<Lugar[]> {
    const { data, error } = await this.supabase
      .from("lugares")
      .select("*, categorias_lugares(*), idiomas_lugares(*)")
      .eq("ativo", true);

    if (error) throw error;
    return (data ?? []) as Lugar[];
  }

  async findById(id: string): Promise<Lugar | null> {
    const { data, error } = await this.supabase
      .from("lugares")
      .select("*, categorias_lugares(*), idiomas_lugares(*)")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    return data as Lugar | null;
  }
}
