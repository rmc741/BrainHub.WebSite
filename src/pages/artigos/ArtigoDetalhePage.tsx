import { useParams, Link } from 'react-router-dom'
import { useArticleById } from '../../hooks/useArticleById'

export function ArtigoDetalhePage() {
  const { id } = useParams<{ id: string }>()
  const { article, loading, erro } = useArticleById(id ? parseInt(id) : undefined)

  if (loading) return <p>Carregando artigo...</p>
  if (erro) return <p>Erro: {erro}</p>
  if (!article) return <p>Artigo não encontrado</p>

  return (
    <div>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/artigos" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Voltar para artigos
        </Link>
      </nav>

      <article>
        <h1>{article.titulo}</h1>

        {article.resumo && (
          <p style={{
            fontSize: '1.2em',
            color: '#666',
            margin: '16px 0',
            fontStyle: 'italic'
          }}>
            {article.resumo}
          </p>
        )}

        {article.dataPublicacao && (
          <small style={{
            color: '#999',
            display: 'block',
            marginBottom: '24px'
          }}>
            Publicado em {new Date(article.dataPublicacao).toLocaleDateString()}
          </small>
        )}

        <div style={{
          lineHeight: '1.6',
          fontSize: '1.1em',
          color: '#333'
        }}>
          {/* Aqui vai o conteúdo completo do artigo quando for implementado */}
          <p>Conteúdo do artigo em breve...</p>
        </div>
      </article>
    </div>
  )
}
