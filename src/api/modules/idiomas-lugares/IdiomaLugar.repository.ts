import type { SupabaseClient } from "@supabase/supabase-js";
import { BaseRepository } from "../../core/BaseRepository";
import type { IdiomaLugar } from "@/shared/types/idioma-lugar";

export class IdiomaLugarRepository extends BaseRepository<IdiomaLugar> {
  constructor(supabase: SupabaseClient) {
    super(supabase, "idiomas_lugares");
  }
}
