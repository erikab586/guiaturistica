import { BaseService } from "../../core/BaseService";
import type { IdiomaLugar } from "@/shared/types/idioma-lugar";
import { IdiomaLugarRepository } from "./IdiomaLugar.repository";

export class IdiomaLugarService extends BaseService<IdiomaLugar> {
  constructor(repository: IdiomaLugarRepository) {
    super(repository);
  }
}
