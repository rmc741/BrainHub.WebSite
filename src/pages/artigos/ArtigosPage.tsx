import { Link } from 'react-router-dom'
import { ArticleCard } from '../../components/articles/ArticleCard'
import { useAuth } from '../../hooks/useAuth'
import { useArticles } from '../../hooks/useArticles'

export function ArtigosPage() {
  const { artigos, loading, erro } = useArticles()
  const { isAuthenticated } = useAuth()

  if (loading) return <p>Carregando artigos...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <div>
      <div>
        <h1>Artigos</h1>
        {isAuthenticated && (
          <Link to="/artigos/novo">
            Criar artigo
          </Link>
        )}
      </div>

      <p>Explore nossos artigos informativos e inspiradores sobre diversos topicos.</p>

      <div>
        {artigos.map(artigo => (
          <ArticleCard
            key={artigo.id}
            article={artigo}
          />
        ))}
      </div>
    </div>
  )
}
