import type { Lugar } from "@/shared/types/lugar";
import { LugarService } from "./Lugar.service";

export class LugarController {
  constructor(private readonly service: LugarService) {}

  index(): Promise<Lugar[]> {
    return this.service.findAll();
  }

  show(id: string): Promise<Lugar | null> {
    return this.service.findById(id);
  }

  create(payload: Partial<Lugar>): Promise<Lugar> {
    return this.service.create(payload);
  }

  update(id: string, payload: Partial<Lugar>): Promise<Lugar> {
    return this.service.update(id, payload);
  }

  delete(id: string): Promise<void> {
    return this.service.delete(id);
  }
}
