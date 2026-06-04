import { Link, NavLink } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"
import "./index.css"

const getNavigationLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "navigation_link navigation_link_active" : "navigation_link"

export function Header() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <header className="header" id="header">
      <Link className="logo_header" to="/" aria-label="Ir para a página inicial">
        <img src="criatividade.png" alt="" />
        <span>BrainHub</span>
      </Link>

      <nav className="navigation_header" aria-label="Navegação principal">
        <NavLink className={getNavigationLinkClass} end to="/">Home</NavLink>
        <NavLink className={getNavigationLinkClass} end to="/artigos">Artigos</NavLink>
        {isAuthenticated && (
          <NavLink className={getNavigationLinkClass} to="/artigos/novo">
            Novo artigo
          </NavLink>
        )}
        <NavLink className={getNavigationLinkClass} to="/sobre-nos">Sobre Nós</NavLink>
        <NavLink className={getNavigationLinkClass} to="/contato">Contato</NavLink>

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
