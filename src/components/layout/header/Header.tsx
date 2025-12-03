import "./index.css"

export function Header() {
  return (
    <div className="header" id="header">
      <div className="logo_header">
        <img src="criatividade.png" alt="BrainHub Logo" />
      </div>

      <div className="navigation_header">
        <a href="#">Home</a>
        <a href="#">Artigos</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Contato</a>
      </div>
    </div>
  )
}