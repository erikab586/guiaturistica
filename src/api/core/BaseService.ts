import { BaseRepository } from "./BaseRepository";

export abstract class BaseService<T> {
  constructor(protected readonly repository: BaseRepository<T>) {}

  findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  findById(id: string): Promise<T | null> {
    return this.repository.findById(id);
  }

  create(payload: Partial<T>): Promise<T> {
    return this.repository.create(payload);
  }

  update(id: string, payload: Partial<T>): Promise<T> {
    return this.repository.update(id, payload);
  }

  delete(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}
