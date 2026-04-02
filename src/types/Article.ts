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
