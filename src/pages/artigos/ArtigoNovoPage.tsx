import { type FormEvent, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { articleService } from '../../services/articleService'
import './ArtigoNovoPage.css'

export function ArtigoNovoPage() {
  const navigate = useNavigate()
  const { token, isAuthenticated } = useAuth()
  const [titulo, setTitulo] = useState('')
  const [resumo, setResumo] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true })
    }
  }, [isAuthenticated, navigate])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!token) {
      navigate('/login', { replace: true })
      return
    }

    setErro(null)
    setLoading(true)

    try {
      const artigo = await articleService.create(
        {
          titulo,
          resumo: resumo.trim() || undefined,
          conteudo,
        },
        token
      )

      navigate(`/artigos/${artigo.id}`)
    } catch (error) {
      setErro(error instanceof Error ? error.message : 'Erro ao criar artigo')
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="state-panel">
        <strong>Redirecionando para login</strong>
        <p>Você precisa entrar para publicar um artigo.</p>
      </div>
    )
  }

  return (
    <main className="article-form-page">
      <form className="article-form" onSubmit={handleSubmit}>
        <div>
          <h1>Novo artigo</h1>
        </div>

        <div className="article-field">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={(event) => setTitulo(event.target.value)}
            required
          />
        </div>

        <div className="article-field">
          <label htmlFor="resumo">Resumo</label>
          <input
            id="resumo"
            type="text"
            value={resumo}
            onChange={(event) => setResumo(event.target.value)}
          />
        </div>

        <div className="article-field">
          <label htmlFor="conteudo">Conteúdo</label>
          <textarea
            id="conteudo"
            value={conteudo}
            onChange={(event) => setConteudo(event.target.value)}
            required
          />
        </div>

        {erro && <p className="article-error">{erro}</p>}

        <div className="article-actions">
          <Link className="button button-secondary" to="/artigos">
            Cancelar
          </Link>
          <button className="button button-primary article-submit" type="submit" disabled={loading}>
            {loading ? 'Publicando...' : 'Publicar'}
          </button>
        </div>
      </form>
    </main>
  )
}
