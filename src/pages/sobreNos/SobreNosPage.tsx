export function SobreNosPage() {
  return (
    <section className="page-shell simple-page">
      <div className="simple-page-header">
        <span className="simple-page-kicker">Sobre o projeto</span>
        <h1>Sobre Nós</h1>
        <p>
          O BrainHub é um espaço para publicar artigos, compartilhar aprendizados
          e acompanhar discussões da comunidade em um só lugar.
        </p>
      </div>

      <div className="simple-page-grid">
        <article>
          <h2>Missão</h2>
          <p>
            Aproximar pessoas que querem aprender, registrar ideias e transformar
            conhecimento em conteúdo útil para outras pessoas.
          </p>
        </article>

        <article>
          <h2>Como estamos construindo</h2>
          <p>
            O produto está evoluindo por sprints pequenas: primeiro artigos,
            depois autenticação e, em seguida, comentários.
          </p>
        </article>

        <article>
          <h2>Próximo passo</h2>
          <p>
            A próxima etapa do MVP é permitir conversas nos artigos com uma área
            de comentários simples e autenticada.
          </p>
        </article>
      </div>
    </section>
  )
}
