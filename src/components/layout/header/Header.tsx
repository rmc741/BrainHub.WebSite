import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import "./index.css"

export function Header() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="header" id="header">
      <Link className="logo_header" to="/" aria-label="Ir para a página inicial">
        <img src="criatividade.png" alt="" />
        <span>BrainHub</span>
      </Link>

      <nav className="navigation_header" aria-label="Navegação principal">
        <Link to="/">Home</Link>
        <Link to="/artigos">Artigos</Link>
        {isAuthenticated && <Link to="/artigos/novo">Novo artigo</Link>}
        <Link to="/sobre-nos">Sobre Nós</Link>
        <Link to="/contato">Contato</Link>

        {isAuthenticated ? (
          <div className="auth_header">
            <span title={user?.nome}>{user?.nome}</span>
            <button type="button" onClick={logout}>
              Sair
            </button>
          </div>
        ) : (
          <div className="auth_header">
            <Link to="/login">Entrar</Link>
            <Link className="header_cta" to="/cadastro">Cadastrar</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
