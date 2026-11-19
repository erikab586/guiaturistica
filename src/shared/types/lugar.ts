export interface Lugar {
  id: string;
  categoria_id: string;
  slug: string;
  latitude?: string | null;
  longitude?: string | null;
  endereco?: string | null;
  bairro?: string | null;
  tempo_medio_visita?: number | null;
  nivel_preco?: number | null;
  preco_min?: number | null;
  preco_max?: number | null;
  ambiente_familiar?: boolean;
  informacao?: string | null;
  imagem?: string | null;
  ativo: boolean;
  criado_em: string;
  atualizado_em: string;
  categorias_lugares?: {
    id: string;
    slug: string;
    icono?: string | null;
  } | null;
  idiomas_lugares?: Array<{
    lugares_idiomas: string;
    idioma: string;
    nome: string;
    resumo?: string | null;
    descricao?: string | null;
  }>;
}
