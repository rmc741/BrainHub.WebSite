import "./index.css"

export function Header() {
  return (
    <div className="header" id="header">
      <div className="logo_header">
        <img src="criatividade.png" alt="BrainHub Logo" />
      </div>

      <div className="navigation_header">
        <a href="/">Home</a>
        <a href="artigos">Artigos</a>
        <a href="sobre-nos">Sobre Nós</a>
        <a href="contato">Contato</a>
      </div>
    </div>
  )
}