import { Component } from 'react'
import PropTypes from 'prop-types'

export default class ComunicacionEntreComponentes extends Component {
    render(){
        return (
          <div>
                <h2>8. COMUNICACIÓN ENTRE COMPONENTES</h2>
                <Padre />
          </div>
        )
    }
}

class Padre extends Component{

    state = {
        contador: 0
    }

    incrementar = () => {
        this.setState({
            contador: this.state.contador + 1
        })  
    }

    render(){
        return(
            <div>
                <h3>Componente Padre</h3>
                <p>Contador: {this.state.contador}</p>
                <Hijo 
                    incrementarContador = {this.incrementar}
                    mensaje="Mensaje desde el componenete padre" 
                />
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
function Hijo ({mensaje, incrementarContador}) {
    return (
        <div>
            <p>{mensaje}</p>
            <button onClick = {incrementarContador}>Incrementar</button>
        </div>
    )

}

Hijo.propTypes = {
    mensaje: PropTypes.string,
    incrementarContador: PropTypes.func
}
