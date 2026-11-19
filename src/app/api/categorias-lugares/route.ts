import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/api/lib/supabase";
import { CategoriaLugarRepository } from "@/api/modules/categorias-lugares/CategoriaLugar.repository";
import { CategoriaLugarService } from "@/api/modules/categorias-lugares/CategoriaLugar.service";
import { CategoriaLugarController } from "@/api/modules/categorias-lugares/CategoriaLugar.controller";

export async function GET() {
  try {
    const repository = new CategoriaLugarRepository(getSupabaseServerClient());
    const controller = new CategoriaLugarController(new CategoriaLugarService(repository));
    return NextResponse.json(await controller.index());
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
