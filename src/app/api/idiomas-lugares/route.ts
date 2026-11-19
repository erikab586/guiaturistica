import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/api/lib/supabase";
import { IdiomaLugarRepository } from "@/api/modules/idiomas-lugares/IdiomaLugar.repository";
import { IdiomaLugarService } from "@/api/modules/idiomas-lugares/IdiomaLugar.service";
import { IdiomaLugarController } from "@/api/modules/idiomas-lugares/IdiomaLugar.controller";

export async function GET() {
  try {
    const repository = new IdiomaLugarRepository(getSupabaseServerClient());
    const controller = new IdiomaLugarController(new IdiomaLugarService(repository));
    return NextResponse.json(await controller.index());
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
