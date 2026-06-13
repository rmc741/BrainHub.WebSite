export interface ArticleComment {
  id: number
  conteudo: string
  autor: string
  dataCriacao: string
}

export interface CreateCommentRequest {
  conteudo: string
}
