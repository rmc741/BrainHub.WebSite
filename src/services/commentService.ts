import { API_URL } from '../constants/api'
import type { ArticleComment, CreateCommentRequest } from '../types/Comment'

const getErrorMessage = (data: unknown, fallback: string) => {
  if (!data || typeof data !== 'object') {
    return fallback
  }

  if ('message' in data && typeof data.message === 'string') {
    return data.message
  }

  if ('title' in data && typeof data.title === 'string') {
    return data.title
  }

  if ('errors' in data && data.errors && typeof data.errors === 'object') {
    const errors = Object.values(data.errors as Record<string, unknown>)
    const firstError = errors.find(Array.isArray)

    if (firstError && typeof firstError[0] === 'string') {
      return firstError[0]
    }
  }

  return fallback
}

export const commentService = {
  getByArticleId: async (articleId: number): Promise<ArticleComment[]> => {
    const response = await fetch(`${API_URL}/api/artigo/${articleId}/comentarios`)

    if (!response.ok) {
      throw new Error('Erro ao buscar comentários')
    }

    return response.json()
  },

  create: async (
    articleId: number,
    comment: CreateCommentRequest,
    token: string
  ): Promise<ArticleComment> => {
    const response = await fetch(`${API_URL}/api/artigo/${articleId}/comentarios`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(getErrorMessage(data, 'Erro ao publicar comentário'))
    }

    return data as ArticleComment
  },
}
