import { Link, useParams } from 'react-router-dom'
import { CommentsSection } from '../../components/comments/CommentsSection'
import { useArticleById } from '../../hooks/useArticleById'
import './ArtigoDetalhePage.css'

export function ArtigoDetalhePage() {
  const { id } = useParams<{ id: string }>()
  const { article, loading, erro } = useArticleById(id ? parseInt(id) : undefined)

  if (loading) {
    return (
      <div className="state-panel">
        <strong>Carregando artigo</strong>
        <p>Estamos buscando o conteúdo completo.</p>
      </div>
    )
  }

  if (erro) {
    return (
      <div className="state-panel state-panel-error">
        <strong>Não foi possível carregar o artigo</strong>
        <p>{erro}</p>
      </div>
    )
  }

  if (!article) {
    return (
      <div className="state-panel">
        <strong>Artigo não encontrado</strong>
        <p>O conteúdo pode ter sido removido ou o endereço está incorreto.</p>
      </div>
    )
  }

  return (
    <section className="article-detail-page">
      <nav className="article-detail-nav">
        <Link to="/artigos">
          Voltar para artigos
        </Link>
      </nav>

      <article className="article-detail">
        <h1>{article.titulo}</h1>

        {article.resumo && (
          <p className="article-detail-summary">
            {article.resumo}
          </p>
        )}

        <div className="article-detail-meta">
          <span>Por {article.autor}</span>
          <time dateTime={article.dataPublicacao}>
            Publicado em {new Date(article.dataPublicacao).toLocaleDateString('pt-BR')}
          </time>
        </div>

        <div className="article-detail-content">
          <p>{article.conteudo}</p>
        </div>
      </article>

      <CommentsSection articleId={article.id} />
    </section>
  )
}
