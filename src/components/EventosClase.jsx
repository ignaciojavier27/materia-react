import { Component } from "react"
import PropTypes from "prop-types"

export class EventosClaseES6 extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }

        this.incrementar = this.incrementar.bind(this)
        this.decrementar = this.decrementar.bind(this)
    }

    incrementar(){
        this.setState ({
            contador: this.state.contador + 1
        })
    }

    decrementar(){
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>7.1 EVENTOS EN COMPONENTES DE CLASE ES6</h2>
                <div style={{display: 'flex', gap:20, justifyContent: 'center'}}>
                    <button onClick={this.decrementar}>-</button>
                    <h3>{this.state.contador}</h3>
                    <button onClick={this.incrementar}>+</button>
                </div>
            </div>
        )
    }
}

export class EventosClaseES7 extends Component {

    state = {
        contador: 0
    }

    incrementar = () => {
        this.setState ({
            contador: this.state.contador + 1
        })
    }

    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render(){
        return(
            <div>
                <h2>7.2 EVENTOS EN COMPONENTES DE CLASE ES7</h2>
                <div style={{display: 'flex', gap:20, justifyContent: 'center'}}>
                    <button onClick={this.decrementar}>-</button>
                    <h3>{this.state.contador}</h3>
                    <button onClick={this.incrementar}>+</button>
                </div>
            </div>
        )
    }
}

// eslint-disable-next-line react-refresh/only-export-components
function Boton (props) {
    return <button onClick = {props.myOnClick} >Botón Como Componente</button>
}

export class MasSobreEventos extends Component {

    handleClick = (e, mensaje) => {
        alert(`Hola ${mensaje}`)
    }

    render(){
        return(
            <div>
                <h2>7.3 EVENTOS NATIVOS, SINTÉTICOS Y PERSONALIZADOS</h2>
                <button onClick={(e) => this.handleClick(e,"Ignacio")}>Saludar</button>
                <Boton
                    myOnClick= {(e) => this.handleClick(e,"Ignacio")}
                />
            </div>
        )
    }
}

Boton.propTypes = {
    myOnClick: PropTypes.func
}