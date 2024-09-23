import { Component } from "react"


function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}

class RenderizadoCondicionalClase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            session: true
        }
    }

    render() {
        return(
            <>
                {
                    this.state.session 
                        ? <Login />
                        : <Logout />
                }
            </>
        )
    }
}



const RenderizadoCondicional = () => {
  return (
    <div>
        <h2>5. RENDERIZADO CONDICIONAL</h2>
        <RenderizadoCondicionalClase />
    </div>
  )
}

export default RenderizadoCondicional
