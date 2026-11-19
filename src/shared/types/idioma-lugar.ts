export interface IdiomaLugar {
  lugares_idiomas: string;
  idioma: string;
  nome: string;
  resumo?: string | null;
  descricao?: string | null;
  dicas?: string | null;
  horario_aberto?: string | null;
  estado_pmg?: string | null;
  criado_em?: string;
  atualizado_em?: string;
}
