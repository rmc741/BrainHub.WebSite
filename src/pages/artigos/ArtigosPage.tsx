import { Link } from 'react-router-dom'
import { ArticleCard } from '../../components/articles/ArticleCard'
import { useAuth } from '../../hooks/useAuth'
import { useArticles } from '../../hooks/useArticles'
import './ArtigosPage.css'

export function ArtigosPage() {
  const { artigos, loading, erro } = useArticles()
  const { isAuthenticated } = useAuth()

  if (loading) {
    return (
      <div className="state-panel">
        <strong>Carregando artigos</strong>
        <p>Estamos buscando as publicações mais recentes.</p>
      </div>
    )
  }

  if (erro) {
    return (
      <div className="state-panel state-panel-error">
        <strong>Não foi possível carregar os artigos</strong>
        <p>{erro}</p>
      </div>
    )
  }

  return (
    <section className="articles-page">
      <div className="articles-hero">
        <div>
          <h1>Artigos</h1>
          <p>Explore conteúdos sobre tecnologia, criatividade e aprendizado.</p>
        </div>

        {isAuthenticated && (
          <Link className="button button-primary" to="/artigos/novo">
            Criar artigo
          </Link>
        )}
      </div>

      {artigos.length === 0 ? (
        <div className="articles-empty">
          <strong>Nenhum artigo publicado ainda</strong>
          <p>Quando novos conteúdos forem publicados, eles aparecerão por aqui.</p>
          {isAuthenticated && (
            <Link className="button button-primary" to="/artigos/novo">
              Publicar primeiro artigo
            </Link>
          )}
        </div>
      ) : (
        <div className="articles-list" aria-label="Lista de artigos">
          {artigos.map(artigo => (
            <ArticleCard
              key={artigo.id}
              article={artigo}
            />
          ))}
        </div>
      )}
    </section>
  )
}
