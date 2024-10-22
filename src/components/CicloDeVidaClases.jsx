import { Component } from "react"

class EjemploCicloDeVida extends Component {
    constructor(props){
        super(props);
        // console.log(0, "Se ha inicializado el componente pero aún no está en el DOM")

        this.state = {
            hora: new Date().toLocaleTimeString()
        }

        this.temporizador = null;
    }

    componentDidMount() {
        // console.log(2, "El componente ya se encuentra en el DOM")
    }

    /*
    componentDidUpdate(prevProps, preState) {
        // console.log(3, "El estado del componente ha cambiado")
        // console.log(prevProps)
        // console.log(preState)
    }
    */

     componentWillUnmount() {
        // console.log("4. El componente se ha eliminado del DOM")
     }

    tictac = () => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        },1000);
    }

    iniciar = () => {
        this.tictac()
    }

    detener = () => {
        clearInterval(this.temporizador)
    }

    render(){
        // console.log(1, "El componente se ha dibujado en el DOM")
        return (
            <div>
                <h3>Ejemplo reloj</h3>
                <strong>{this.state.hora}</strong>
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }
}

const CicloDeVidaClases = () => {
    return (
    <div>
        <h2>9. CICLO DE VIDA EN COMPONENTES DE CLASE</h2>
        <div>
        <p>Son métodos que se ejecutan de manera automática en el componete. Esto ocurre entres fases:</p>
        <ol>
            <li>Montaje</li>
            <li>Actualización</li>
            <li>Desmontaje</li>
        </ol>
        <p>Es lo equivalente el hook useEffect</p>
        </div>
        <EjemploCicloDeVida></EjemploCicloDeVida>
    </div>
    )
}

export default CicloDeVidaClases
