import { BrowserRouter, Routes, Route } from "react-router-dom"
import AcercaRouter from "./AcercaRouter"
import NavRouter from "./NavRouter"

const ConceptosBasicosRouter = () => {
    return (
    <div>
        <h3>19.1 Conceptos Básicos</h3>
        <BrowserRouter>
            <NavRouter />
            <Routes>
                <Route path="/" element={<h1>Hola!</h1>} />
                <Route path="/acerca" element={<AcercaRouter />}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default ConceptosBasicosRouter
