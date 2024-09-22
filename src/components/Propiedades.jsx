import { PropTypes } from "prop-types"
const Propiedades = ({cadena, numero, boolean, array, objeto, reactElement}) => {
    return (
        <div>
            <h2>3. Propiedades - PROPS</h2>
            <p>Son los valores que recibe un componente hijo de su componente padre. </p>
            <p>Son valores inmutables</p>
            <p>Las propiedades pueden ser: string, number, boolean, array, object, react elements, react components, funciones</p>
            <ul>
                <li>Cadena: {cadena}</li>
                <li>Numero: {numero}</li>
                <li>{boolean ? 'Verdadero' : 'Falso'}</li>
                <li>{array.join(', ')}</li>
                <li>{objeto.nombre}</li>
                <li>{reactElement}</li>
            </ul>
        </div>
    )
}

Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired,
    numero: PropTypes.number.isRequired,
    boolean: PropTypes.bool.isRequired,
    array: PropTypes.array.isRequired,
    objeto: PropTypes.object.isRequired,
    reactElement: PropTypes.element.isRequired
}

export default Propiedades
