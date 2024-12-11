import { Link } from "react-router-dom"

const ProductosRouter = ({ productos }) => {
  return (
    <ul>
      {
        productos.map( producto => <li key={producto.id}><Link to={`/producto/${producto.id}`}>{producto.nombre}</Link></li> )
      }
    </ul>
  )
}

export default ProductosRouter
