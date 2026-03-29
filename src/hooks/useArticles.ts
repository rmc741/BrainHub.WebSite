import { useEffect, useState } from 'react'
import type { Article } from '../types/Article'
import { articleService } from '../services/articleService'

export const useArticles = () => {
  const [artigos, setArtigos] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    articleService
      .getAll()
      .then(setArtigos)
      .catch(err => setErro(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { artigos, loading, erro }
}
