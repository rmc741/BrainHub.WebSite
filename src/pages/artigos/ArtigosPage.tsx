import { useArticles } from '../../hooks/useArticles'
import { ArticleCard } from '../../components/articles/ArticleCard'

export function ArtigosPage() {
  const { artigos, loading, erro } = useArticles()

  if (loading) return <p>Carregando artigos...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <div>
      <h1>Artigos</h1>
      <p>Explore nossos artigos informativos e inspiradores sobre diversos tópicos.</p>

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
