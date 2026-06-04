export function ContatoPage() {
  return (
    <section className="page-shell simple-page">
      <div className="simple-page-header">
        <span className="simple-page-kicker">Fale com o BrainHub</span>
        <h1>Contato</h1>
        <p>
          Nesta fase do MVP, o contato ainda acontece pelos canais internos do
          projeto. Use esta página como ponto reservado para suporte, feedback e
          sugestões da comunidade.
        </p>
      </div>

      <div className="simple-page-grid">
        <article>
          <h2>Feedback</h2>
          <p>
            Ideias sobre leitura, publicação de artigos e navegação ajudam a
            priorizar as próximas melhorias.
          </p>
        </article>

        <article>
          <h2>Suporte</h2>
          <p>
            Dúvidas sobre cadastro, login ou criação de artigos podem virar
            ajustes diretos no fluxo do produto.
          </p>
        </article>

        <article>
          <h2>Comunidade</h2>
          <p>
            A área de comentários será o próximo espaço para conversas dentro dos
            próprios artigos.
          </p>
        </article>
      </div>
    </section>
  )
}
