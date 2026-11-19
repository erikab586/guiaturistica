import type { CategoriaLugar } from "@/shared/types/categoria-lugar";
import { CategoriaLugarService } from "./CategoriaLugar.service";

export class CategoriaLugarController {
  constructor(private readonly service: CategoriaLugarService) {}

  index(): Promise<CategoriaLugar[]> {
    return this.service.findAll();
  }

  show(id: string): Promise<CategoriaLugar | null> {
    return this.service.findById(id);
  }

  create(payload: Partial<CategoriaLugar>): Promise<CategoriaLugar> {
    return this.service.create(payload);
  }

  update(id: string, payload: Partial<CategoriaLugar>): Promise<CategoriaLugar> {
    return this.service.update(id, payload);
  }

  delete(id: string): Promise<void> {
    return this.service.delete(id);
  }
}
