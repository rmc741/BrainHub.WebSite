import { API_URL } from '../constants/api'
import type { ArticleDetails, ArticleListItem } from '../types/Article'

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
}
