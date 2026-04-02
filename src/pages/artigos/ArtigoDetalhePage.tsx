import { Link, useParams } from 'react-router-dom'
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

        <p style={{ color: '#555', marginBottom: '8px' }}>
          Por {article.autor}
        </p>

        <small style={{
          color: '#999',
          display: 'block',
          marginBottom: '24px'
        }}>
          Publicado em {new Date(article.dataPublicacao).toLocaleDateString('pt-BR')}
        </small>

        <div style={{
          lineHeight: '1.8',
          fontSize: '1.1em',
          color: '#333',
          whiteSpace: 'pre-line'
        }}>
          <p>{article.conteudo}</p>
        </div>
      </article>
    </div>
  )
}
