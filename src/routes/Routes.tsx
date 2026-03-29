import { Route, Routes } from "react-router-dom";
import { ArtigosPage } from "../pages/artigos/ArtigosPage";
import { SobreNosPage } from "../pages/sobreNos/SobreNosPage";
import { ContatoPage } from "../pages/contato/ContatoPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="artigos" element={<ArtigosPage/>} />
            <Route path="sobre-nos" element={<SobreNosPage/>} />
            <Route path="contato" element={<ContatoPage/>} />
        </Routes>
    );
}

export default AppRoutes;