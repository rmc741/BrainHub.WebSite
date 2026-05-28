export interface ArticleListItem {
  id: number
  titulo: string
  resumo: string | null
  dataPublicacao: string
}

export interface ArticleDetails {
  id: number
  titulo: string
  resumo: string | null
  conteudo: string
  autor: string
  dataPublicacao: string
}

export interface CreateArticleRequest {
  titulo: string
  resumo?: string
  conteudo: string
}
