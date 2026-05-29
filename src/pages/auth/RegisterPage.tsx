import { type FormEvent, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import './AuthPage.css'

const getSafeRedirect = (redirect: string | null) => {
  if (!redirect || !redirect.startsWith('/') || redirect.startsWith('//')) {
    return '/artigos'
  }

  return redirect
}

export function RegisterPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { register } = useAuth()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const redirectTo = getSafeRedirect(searchParams.get('redirect'))

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErro(null)
    setLoading(true)

    try {
      await register({ nome, email, senha })
      navigate(redirectTo)
    } catch (error) {
      setErro(error instanceof Error ? error.message : 'Erro ao cadastrar usuário')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="auth-page">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <div className="auth-field">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="auth-field">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            required
          />
        </div>

        {erro && <p className="auth-error">{erro}</p>}

        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </button>

        <Link className="auth-link" to={`/login?redirect=${encodeURIComponent(redirectTo)}`}>
          Já tenho conta
        </Link>
      </form>
    </main>
  )
}
