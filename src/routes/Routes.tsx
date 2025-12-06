import { Route, Routes } from "react-router-dom";
import { Artigos } from "../pages/artigos/Artigos";
import { SobreNos } from "../pages/sobreNos/SobreNos";
import { Contato } from "../pages/contato/Contato";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="artigos" element={<Artigos/>} />
            <Route path="sobre-nos" element={<SobreNos/>} />
            <Route path="contato" element={<Contato/>} />
        </Routes>
    );
}

export default AppRoutes;