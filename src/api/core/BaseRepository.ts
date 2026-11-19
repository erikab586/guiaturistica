import { SupabaseClient } from "@supabase/supabase-js";

export abstract class BaseRepository<T> {
  constructor(
    protected readonly supabase: SupabaseClient,
    protected readonly table: string,
  ) {}

  async findAll(): Promise<T[]> {
    const { data, error } = await this.supabase
      .from(this.table)
      .select("*");

    if (error) throw error;
    return (data ?? []) as T[];
  }

  async findById(id: string): Promise<T | null> {
    const { data, error } = await this.supabase
      .from(this.table)
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;
    return data as T | null;
  }

  async create(payload: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase
      .from(this.table)
      .insert(payload)
      .select("*")
      .single();

    if (error) throw error;
    return data as T;
  }

  async update(id: string, payload: Partial<T>): Promise<T> {
    const { data, error } = await this.supabase
      .from(this.table)
      .update(payload)
      .eq("id", id)
      .select("*")
      .single();

    if (error) throw error;
    return data as T;
  }

  async delete(id: string): Promise<void> {
    const { error } = await this.supabase
      .from(this.table)
      .delete()
      .eq("id", id);

    if (error) throw error;
  }
}
