import { API_URL } from '../constants/api'
import type { Article } from '../types/Article'

export const articleService = {
  getAll: async (): Promise<Article[]> => {
    const response = await fetch(`${API_URL}/api/artigo`)
    if (!response.ok) {
      throw new Error('Erro ao buscar artigos')
    }
    return response.json()
  },

  getById: async (id: number): Promise<Article> => {
    const response = await fetch(`${API_URL}/api/artigo/${id}`)
    if (!response.ok) {
      throw new Error('Erro ao buscar artigo')
    }
    return response.json()
  },
}
