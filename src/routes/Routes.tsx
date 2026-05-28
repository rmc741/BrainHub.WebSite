import { Route, Routes } from "react-router-dom";
import { ArtigosPage } from "../pages/artigos/ArtigosPage";
import { ArtigoDetalhePage } from "../pages/artigos/ArtigoDetalhePage";
import { ArtigoNovoPage } from "../pages/artigos/ArtigoNovoPage";
import { SobreNosPage } from "../pages/sobreNos/SobreNosPage";
import { ContatoPage } from "../pages/contato/ContatoPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="artigos" element={<ArtigosPage/>} />
            <Route path="artigos/novo" element={<ArtigoNovoPage/>} />
            <Route path="artigos/:id" element={<ArtigoDetalhePage/>} />
            <Route path="sobre-nos" element={<SobreNosPage/>} />
            <Route path="contato" element={<ContatoPage/>} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="cadastro" element={<RegisterPage/>} />
        </Routes>
    );
}

export default AppRoutes;
