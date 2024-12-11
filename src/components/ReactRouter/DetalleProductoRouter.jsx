import { useParams, useNavigate } from "react-router-dom"

const DetalleProductoRouter = ({ productos }) => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    const { id } = useParams();
    const producto = productos.find( producto => producto.id.toString() === id )

    return (
    <div>
        <h3>{producto.nombre}</h3>
        <h4>${producto.precio}</h4>
        <button onClick={goBack}>Regresar</button>
    </div>
    )
}

export default DetalleProductoRouter
