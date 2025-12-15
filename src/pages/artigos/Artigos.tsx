import { useEffect, useState } from 'react'

interface Artigo {
  id: number
  titulo: string
  resumo?: string
  dataPublicacao?: string
}

export function Artigos() {
  const [artigos, setArtigos] = useState<Artigo[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://localhost:7072/api/artigo')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar artigos')
        }
        return response.json()
      })
      .then(data => setArtigos(data))
      .catch(err => setErro(err.message))
      .finally(() => setLoading(false))
  }, [])

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
