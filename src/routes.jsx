import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Base from "./pages/base";
import PageNotFound from "./pages/pagenotfound";

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