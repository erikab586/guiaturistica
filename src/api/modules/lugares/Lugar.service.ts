import { BaseService } from "../../core/BaseService";
import type { Lugar } from "@/shared/types/lugar";
import { LugarRepository } from "./Lugar.repository";

export class LugarService extends BaseService<Lugar> {
  constructor(repository: LugarRepository) {
    super(repository);
  }
}
