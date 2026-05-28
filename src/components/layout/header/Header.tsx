import { Link } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import "./index.css"

export function Header() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <div className="header" id="header">
      <div className="logo_header">
        <img src="criatividade.png" alt="BrainHub Logo" />
      </div>

      <div className="navigation_header">
        <Link to="/">Home</Link>
        <Link to="/artigos">Artigos</Link>
        {isAuthenticated && <Link to="/artigos/novo">Novo artigo</Link>}
        <Link to="/sobre-nos">Sobre Nos</Link>
        <Link to="/contato">Contato</Link>

        {isAuthenticated ? (
          <div className="auth_header">
            <span>{user?.nome}</span>
            <button type="button" onClick={logout}>
              Sair
            </button>
          </div>
        ) : (
          <div className="auth_header">
            <Link to="/login">Entrar</Link>
            <Link to="/cadastro">Cadastrar</Link>
          </div>
        )}
      </div>
    </div>
  )
}
