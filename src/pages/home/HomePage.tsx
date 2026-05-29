import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArticleCard } from '../../components/articles/ArticleCard'
import { useAuth } from '../../hooks/useAuth'
import { useArticles } from '../../hooks/useArticles'
import './HomePage.css'

const HOME_ARTICLE_LIMIT = 4

export function HomePage() {
  const { artigos, loading, erro } = useArticles()
  const { isAuthenticated } = useAuth()

  const recentArticles = useMemo(() => {
    return [...artigos]
      .sort((current, next) => (
        new Date(next.dataPublicacao).getTime() - new Date(current.dataPublicacao).getTime()
      ))
      .slice(0, HOME_ARTICLE_LIMIT)
  }, [artigos])

  return (
    <div className="home-page">
      <section className="page-shell home-hero">
        <div>
          <h1>Conhecimento para criar, aprender e compartilhar.</h1>
          <p>Leia artigos da comunidade, publique suas ideias e acompanhe novas discussões em um só lugar.</p>
        </div>

        <div className="home-hero-actions">
          <Link className="button button-primary" to="/artigos">
            Ver artigos
          </Link>

          {isAuthenticated && (
            <Link className="button button-secondary" to="/artigos/novo">
              Criar artigo
            </Link>
          )}
        </div>
      </section>

      <section className="home-preview">
        <div className="home-preview-header">
          <div>
            <h2>Artigos recentes</h2>
            <p>Uma prévia dos últimos conteúdos publicados no BrainHub.</p>
          </div>

          <Link to="/artigos">Ver todos</Link>
        </div>

        {loading && (
          <div className="home-preview-state">
            <strong>Carregando artigos</strong>
            <p>Estamos buscando as publicações mais recentes.</p>
          </div>
        )}

        {erro && (
          <div className="home-preview-state home-preview-state-error">
            <strong>Não foi possível carregar os artigos</strong>
            <p>Você ainda pode tentar acessar a listagem completa.</p>
            <Link className="button button-secondary" to="/artigos">
              Ir para artigos
            </Link>
          </div>
        )}

        {!loading && !erro && recentArticles.length === 0 && (
          <div className="home-preview-state">
            <strong>Nenhum artigo publicado ainda</strong>
            <p>Quando a comunidade publicar novos conteúdos, eles aparecerão por aqui.</p>
          </div>
        )}

        {!loading && !erro && recentArticles.length > 0 && (
          <div className="home-articles-list" aria-label="Artigos recentes">
            {recentArticles.map(artigo => (
              <ArticleCard
                key={artigo.id}
                article={artigo}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
