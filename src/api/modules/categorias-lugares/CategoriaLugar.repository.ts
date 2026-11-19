import type { SupabaseClient } from "@supabase/supabase-js";
import { BaseRepository } from "../../core/BaseRepository";
import type { CategoriaLugar } from "@/shared/types/categoria-lugar";

export class CategoriaLugarRepository extends BaseRepository<CategoriaLugar> {
  constructor(supabase: SupabaseClient) {
    super(supabase, "categorias_lugares");
  }
}
