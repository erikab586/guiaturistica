import type { Lugar } from "@/shared/types/lugar";

export class LugarModel {
  constructor(public readonly data: Lugar) {}

  get id(): string {
    return this.data.id;
  }

  get nome(): string {
    const translation = this.data.idiomas_lugares?.find((item) => item.idioma === "pt")
      ?? this.data.idiomas_lugares?.[0];

    return translation?.nome ?? this.data.slug;
  }
}
