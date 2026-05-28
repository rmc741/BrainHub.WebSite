import { API_URL } from '../constants/api'
import type { ArticleDetails, ArticleListItem, CreateArticleRequest } from '../types/Article'

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

export const articleService = {
  getAll: async (): Promise<ArticleListItem[]> => {
    const response = await fetch(`${API_URL}/api/artigo`)
    if (!response.ok) {
      throw new Error('Erro ao buscar artigos')
    }
    return response.json()
  },

  getById: async (id: number): Promise<ArticleDetails> => {
    const response = await fetch(`${API_URL}/api/artigo/${id}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar artigo')
    }
    return response.json()
  },

  create: async (article: CreateArticleRequest, token: string): Promise<ArticleDetails> => {
    const response = await fetch(`${API_URL}/api/artigo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })

    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new Error(getErrorMessage(data, 'Erro ao criar artigo'))
    }

    return data as ArticleDetails
  },
}
