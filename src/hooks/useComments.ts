import { useCallback, useEffect, useState } from 'react'
import { commentService } from '../services/commentService'
import type { ArticleComment } from '../types/Comment'

export const useComments = (articleId: number) => {
  const [comments, setComments] = useState<ArticleComment[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  const loadComments = useCallback(async () => {
    setLoading(true)
    setErro(null)

    try {
      const result = await commentService.getByArticleId(articleId)
      setComments(result)
    } catch (error) {
      setErro(error instanceof Error ? error.message : 'Erro ao buscar comentários')
    } finally {
      setLoading(false)
    }
  }, [articleId])

  useEffect(() => {
    loadComments()
  }, [loadComments])

  const addComment = async (conteudo: string, token: string) => {
    const comment = await commentService.create(articleId, { conteudo }, token)
    setComments((currentComments) => [...currentComments, comment])
  }

  return {
    comments,
    loading,
    erro,
    addComment,
    reload: loadComments,
  }
}
