import { BrowserRouter, Routes, Route } from "react-router-dom"
import AcercaRouter from "./AcercaRouter"
import NavRouter from "./NavRouter"
import PageError404 from "./PageError404"
import { useState } from "react"
import ProductosRouter from "./ProductosRouter"
import DetalleProductoRouter from "./DetalleProductoRouter"

const initialProducts = [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
    { id: 5, nombre: "Producto 5", precio: 500 },
]

const ConceptosBasicosRouter = () => {

    const [productos, setProductos] = useState(initialProducts);

    return (
    <div>
        <h3>19.1 Conceptos Básicos</h3>
        <BrowserRouter>
            <NavRouter />
            <Routes>
                <Route path="/" element={<h1>Hola!</h1>} />
                <Route path="/acerca" element={<AcercaRouter />}/>
                <Route path="*" element={<PageError404 />} />
                <Route path="/productos" element={<ProductosRouter productos={productos} />} />
                <Route path="/producto/:id" element={<DetalleProductoRouter productos={productos} />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}

export default ConceptosBasicosRouter
