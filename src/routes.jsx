import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PageNotFound from "./pages/pagenotfound";
import Base from "./pages/base";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Base /> }>
                    <Route index element={<Home />} /> 
                    <Route path="*" element={<PageNotFound />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes