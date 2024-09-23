import { Component } from "react"
import PropTypes from 'prop-types'
import data from '../helpers/data.json'

function ElementosLista({el}){
    const { name, url } = el
    return(
        <li>
            <a href={url} target="_blank">{name}</a>
        </li>
    )
}

class RenderizadoElementos extends Component {

    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Invierno"]
        }

    }
    render(){
        console.log(data);
        return (
          <div>
            <h2>6. RENDERIZADO DE ELEMENTOS</h2>
            <h3>Estaciones del año desde array</h3>
            <ul>
                {
                    this.state.seasons.map(( season, index ) => (
                        <li key={index}>{season}</li>
                    ))
                }
            </ul>
            <h3>Frameworks desde data</h3>
            <ul>
                {
                    data.frameworks.map( 
                        (el) => <ElementosLista 
                                    key = {el.name}
                                    el = {el}
                                />
                    )
                }
            </ul>
          </div>
        )
    }
}

ElementosLista.propTypes = {
    el: PropTypes.array.isRequired
}
export default RenderizadoElementos
