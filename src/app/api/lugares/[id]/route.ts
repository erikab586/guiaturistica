import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/api/lib/supabase";
import { LugarRepository } from "@/api/modules/lugares/Lugar.repository";
import { LugarService } from "@/api/modules/lugares/Lugar.service";
import { LugarController } from "@/api/modules/lugares/Lugar.controller";

function controller() {
  return new LugarController(
    new LugarService(new LugarRepository(getSupabaseServerClient())),
  );
}

export async function GET(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    const lugar = await controller().show(id);
    return lugar
      ? NextResponse.json(lugar)
      : NextResponse.json({ error: "Lugar no encontrado" }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    return NextResponse.json(await controller().update(id, await request.json()));
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function DELETE(_request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  try {
    await controller().delete(id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
