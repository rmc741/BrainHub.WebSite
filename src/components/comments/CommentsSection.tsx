import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useComments } from '../../hooks/useComments'
import './CommentsSection.css'

interface CommentsSectionProps {
  articleId: number
}

export function CommentsSection({ articleId }: CommentsSectionProps) {
  const { token, isAuthenticated } = useAuth()
  const { comments, loading, erro, addComment, reload } = useComments(articleId)
  const [conteudo, setConteudo] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const normalizedContent = conteudo.trim()

    if (!token || !normalizedContent) {
      return
    }

    setSubmitError(null)
    setSubmitting(true)

    try {
      await addComment(normalizedContent, token)
      setConteudo('')
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Erro ao publicar comentário')
    } finally {
      setSubmitting(false)
    }
  }

  const loginRedirect = `/login?redirect=${encodeURIComponent(`/artigos/${articleId}`)}`

  return (
    <section className="comments-section" aria-labelledby="comments-title">
      <header className="comments-header">
        <div>
          <span className="comments-kicker">Conversa</span>
          <h2 id="comments-title">
            Comentários {!loading && `(${comments.length})`}
          </h2>
        </div>
      </header>

      {isAuthenticated ? (
        <form className="comment-form" onSubmit={handleSubmit}>
          <label htmlFor="comment-content">Deixe seu comentário</label>
          <textarea
            id="comment-content"
            value={conteudo}
            onChange={(event) => setConteudo(event.target.value)}
            maxLength={2000}
            placeholder="Compartilhe sua opinião sobre o artigo"
            required
          />

          <div className="comment-form-footer">
            <span>{conteudo.length}/2000</span>
            <button
              className="button button-primary"
              type="submit"
              disabled={submitting || !conteudo.trim()}
            >
              {submitting ? 'Publicando...' : 'Publicar comentário'}
            </button>
          </div>

          {submitError && (
            <p className="comments-error" role="alert">
              {submitError}
            </p>
          )}
        </form>
      ) : (
        <div className="comments-login">
          <p>Entre na sua conta para participar da conversa.</p>
          <Link className="button button-secondary" to={loginRedirect}>
            Entrar para comentar
          </Link>
        </div>
      )}

      <div className="comments-list" aria-live="polite">
        {loading && <p className="comments-state">Carregando comentários...</p>}

        {!loading && erro && (
          <div className="comments-state comments-state-error">
            <p>{erro}</p>
            <button className="button button-secondary" type="button" onClick={reload}>
              Tentar novamente
            </button>
          </div>
        )}

        {!loading && !erro && comments.length === 0 && (
          <p className="comments-state">
            Ainda não há comentários. Seja a primeira pessoa a participar.
          </p>
        )}

        {!loading && !erro && comments.map((comment) => (
          <article className="comment-card" key={comment.id}>
            <div className="comment-meta">
              <strong>{comment.autor}</strong>
              <time dateTime={comment.dataCriacao}>
                {new Date(comment.dataCriacao).toLocaleString('pt-BR')}
              </time>
            </div>
            <p>{comment.conteudo}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
