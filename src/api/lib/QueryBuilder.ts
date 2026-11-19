export class QueryBuilder {
  static searchTerm(value: FormDataEntryValue | null): string | null {
    if (typeof value !== "string") return null;
    const normalized = value.trim();
    return normalized.length > 0 ? normalized : null;
  }
}
