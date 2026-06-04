import { Link } from 'react-router-dom'
import type { ArticleListItem } from '../../types/Article'
import './ArticleCard.css'

interface ArticleCardProps {
  article: ArticleListItem
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card">
      <Link className="article-card-link" to={`/artigos/${article.id}`}>
        <div>
          <h2>{article.titulo}</h2>

          {article.resumo && (
            <p>{article.resumo}</p>
          )}
        </div>

        <div className="article-card-footer">
          <time dateTime={article.dataPublicacao}>
            Publicado em {new Date(article.dataPublicacao).toLocaleDateString('pt-BR')}
          </time>
          <span>Ler artigo</span>
        </div>
      </Link>
    </article>
  )
}
