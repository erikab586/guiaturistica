import type { IdiomaLugar } from "@/shared/types/idioma-lugar";
import { IdiomaLugarService } from "./IdiomaLugar.service";

export class IdiomaLugarController {
  constructor(private readonly service: IdiomaLugarService) {}

  index(): Promise<IdiomaLugar[]> {
    return this.service.findAll();
  }

  show(id: string): Promise<IdiomaLugar | null> {
    return this.service.findById(id);
  }

  create(payload: Partial<IdiomaLugar>): Promise<IdiomaLugar> {
    return this.service.create(payload);
  }

  update(id: string, payload: Partial<IdiomaLugar>): Promise<IdiomaLugar> {
    return this.service.update(id, payload);
  }

  delete(id: string): Promise<void> {
    return this.service.delete(id);
  }
}
