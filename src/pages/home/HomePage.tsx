import { ArtigosPage } from "../artigos/ArtigosPage";
import { ContatoPage } from "../contato/ContatoPage";
import { SobreNosPage } from "../sobreNos/SobreNosPage";

export function HomePage() {
  return (
    <div>
      <section className="page-shell home-hero">
        <h1>Conhecimento para criar, aprender e compartilhar.</h1>
        <p>Leia artigos da comunidade, publique suas ideias e acompanhe novas discussões em um só lugar.</p>
      </section>

      <ArtigosPage />
      <SobreNosPage />
      <ContatoPage />
    </div>
  )
}
