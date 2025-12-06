import { Artigos } from "../artigos/Artigos";
import { Contato } from "../contato/Contato";
import { SobreNos } from "../sobreNos/SobreNos";

export function Home() {
  return (
    <div>
      <h1>Welcome to BrainHub</h1>
      <p>Your gateway to knowledge and creativity.</p>

      <Artigos />
      <SobreNos />
      <Contato />
    </div>
  )
}