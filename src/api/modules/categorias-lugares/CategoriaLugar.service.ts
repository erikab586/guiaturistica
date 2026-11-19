import { BaseService } from "../../core/BaseService";
import type { CategoriaLugar } from "@/shared/types/categoria-lugar";
import { CategoriaLugarRepository } from "./CategoriaLugar.repository";

export class CategoriaLugarService extends BaseService<CategoriaLugar> {
  constructor(repository: CategoriaLugarRepository) {
    super(repository);
  }
}
