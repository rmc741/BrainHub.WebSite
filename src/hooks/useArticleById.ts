import { useEffect, useState } from 'react'
import type { Article } from '../types/Article'
import { articleService } from '../services/articleService'

export const useArticleById = (id: number | undefined) => {
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    articleService
      .getById(id)
      .then(setArticle)
      .catch(err => setErro(err.message))
      .finally(() => setLoading(false))
  }, [id])

  return { article, loading, erro }
}
