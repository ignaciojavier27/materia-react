import { Component } from "react"
import { Proptypes } from "prop-types"

function EstadoAHijo (props) {
    return(
        <p>Contador elemento hijo: {props.contador}</p>
    )
}

class EstadoClase extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        },1000)
    }

    render(){
        return(
        <div>
            <h3>El estado de un componente clase</h3>
            <p>Contador: {this.state.contador}</p>
            <EstadoAHijo contador={this.state.contador} />
        </div>
        )
    }

}


const Estado = () => {

    return (
    <div>
        <h2>4. Estado</h2>
        <p>El estado son los valores internos que maneja la lógica y los datos de un componente. Tiene 3 características importantes:</p>
        <ol>
            <li>Es inmutable</li>
            <li>No se puede modificar directamente</li>
            <li>Es asíncrono</li>
        </ol>
        <EstadoClase />
    </div>
    )
}


EstadoAHijo.propTypes = {
    contador: Proptypes.number
}

export default Estado
