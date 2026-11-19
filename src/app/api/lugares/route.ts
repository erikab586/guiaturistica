import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/api/lib/supabase";
import { LugarRepository } from "@/api/modules/lugares/Lugar.repository";
import { LugarService } from "@/api/modules/lugares/Lugar.service";
import { LugarController } from "@/api/modules/lugares/Lugar.controller";

function controller() {
  const repository = new LugarRepository(getSupabaseServerClient());
  return new LugarController(new LugarService(repository));
}

export async function GET() {
  try {
    return NextResponse.json(await controller().index());
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    return NextResponse.json(await controller().create(payload), { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
