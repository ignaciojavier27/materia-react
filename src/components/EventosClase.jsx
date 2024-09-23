import { Component } from "react"
class EventosClase extends Component {

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
                <h2>7. EVENTOS EN COMPONENTES DE CLASE</h2>
                <div style={{display: 'flex', gap:20, justifyContent: 'center'}}>
                    <button onClick={this.decrementar}>-</button>
                    <h3>{this.state.contador}</h3>
                    <button onClick={this.incrementar}>+</button>
                </div>
            </div>
        )
    }
}

export default EventosClase
