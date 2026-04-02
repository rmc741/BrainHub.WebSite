import { ArtigosPage } from "../artigos/ArtigosPage";
import { ContatoPage } from "../contato/ContatoPage";
import { SobreNosPage } from "../sobreNos/SobreNosPage";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to BrainHub</h1>
      <p>Your gateway to knowledge and creativity.</p>

      <ArtigosPage />
      <SobreNosPage />
      <ContatoPage />
    </div>
  )
}
