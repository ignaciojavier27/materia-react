import { Component } from "react"
import { PropTypes } from "prop-types"

class ComponenteClase  extends Component {
    render(){

        return(
            <h3>{this.props.mensaje}</h3>
        )

    }
}

const ComponenteFuncional = ({mensaje}) => {
    return(
        <h3>{mensaje}</h3>
    )
}

/*
function ComponenteFuncional ({mensaje}) {

    return (
        <h3>{mensaje}<h3/>
    )
}
*/

const Componentes = () => {
    return (
    <div>
        <h2>2. COMPONENTES</h2>
        <p>React nos permite crear componentes de dos maneras: Funcionales o de clases.</p>
        <ComponenteClase mensaje="Hola soy un componente de clase"/>
        <ComponenteFuncional mensaje="Hola soy un componente funcional"/>
    </div>
    )
}

ComponenteClase.propTypes = {
    mensaje: PropTypes.string.isRequired
}

ComponenteFuncional.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Componentes

