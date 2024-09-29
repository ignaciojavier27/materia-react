import { Component } from "react"
import PropTypes from "prop-types"


function Pokemon (props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

class EjemploPeticion extends Component {

    state = {
        pokemons: [],
    };

    componentDidMount () {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        fetch(url)
            .then( response => response.json() )
            .then( json => {
                json.results.forEach( el => {
                    fetch(el.url)
                        .then(response => response.json())
                        .then(json => {
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            }
                            
                            let pokemons = [...this.state.pokemons, pokemon];
                            this.setState({pokemons})
                        })
                })
            })
    }

    render() {
        return (
            <div>
                <h3>Ejemplo peticion</h3>
                {
                    this.state.pokemons.length === 0
                        ? <h4>Cargando...</h4>
                        : this.state.pokemons.map( pokemon => (
                            <Pokemon 
                                key = {pokemon.id} 
                                avatar = {pokemon.avatar}
                                name = {pokemon.name}
                            />
                        ))
                }
            </div>
        )
    }
}

const PeticionesAsincronasComponentesDeClase = () => {
    return (
        <div>
            <h2>10. PETICIONES ASINCRONAS EN COMPONENTES DE CLASE</h2>
            <EjemploPeticion />
        </div>
    )
}

Pokemon.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default PeticionesAsincronasComponentesDeClase
