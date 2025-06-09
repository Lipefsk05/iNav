import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "./pages/base";
import Home from "./pages/home";
import Features from "./pages/features";
import Sobre from "./pages/sobre";
import Contatos from "./pages/contatos";
import PageNotFound from "./pages/pagenotfound";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Base /> }>
                    <Route index element={<Home />} /> 
                    <Route path="/features" element={<Features />} /> 
                    <Route path="/sobre" element={<Sobre />} /> 
                    <Route path="/contatos" element={<Contatos />} /> 
                    <Route path="*" element={<PageNotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes