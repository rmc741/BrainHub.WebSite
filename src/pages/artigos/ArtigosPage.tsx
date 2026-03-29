import { useArticles } from '../../hooks/useArticles'

export function ArtigosPage() {
  const { artigos, loading, erro } = useArticles()

  if (loading) return <p>Carregando artigos...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <div>
      <h1>Artigos</h1>
      <p>Explore nossos artigos informativos e inspiradores sobre diversos tópicos.</p>

      <ul>
        {artigos.map(artigo => (
          <li key={artigo.id}>
            <h3>{artigo.titulo}</h3>
            {artigo.resumo && <p>{artigo.resumo}</p>}
            {artigo.dataPublicacao && (
              <small>
                Publicado em{' '}
                {new Date(artigo.dataPublicacao).toLocaleDateString()}
              </small>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
