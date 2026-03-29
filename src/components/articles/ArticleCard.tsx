import { useNavigate } from 'react-router-dom'
import type { Article } from '../../types/Article'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/artigos/${article.id}`)
  }

  return (
    <div
      className="article-card"
      onClick={handleClick}
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '8px 0',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>
        {article.titulo}
      </h3>

      {article.resumo && (
        <p style={{
          margin: '0 0 12px 0',
          color: '#666',
          lineHeight: '1.5'
        }}>
          {article.resumo}
        </p>
      )}

      {article.dataPublicacao && (
        <small style={{
          color: '#999',
          fontSize: '0.9em'
        }}>
          Publicado em {new Date(article.dataPublicacao).toLocaleDateString()}
        </small>
      )}
    </div>
  )
}
