import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AcercaRouter from "./AcercaRouter"

const ConceptosBasicosRouter = () => {
    return (
    <div>
        <h3>19.1 Conceptos Básicos</h3>
        <BrowserRouter>
            <nav>
                <Link to={"/"}>Home</Link>
                <br />
                <Link to={"/acerca"}>Acerca</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Hola!</h1>} />
                <Route path="/acerca" element={<AcercaRouter />}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default ConceptosBasicosRouter
