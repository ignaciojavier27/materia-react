import './App.css'
import CicloDeVidaClases from './components/CicloDeVidaClases'
import Componentes from './components/Componentes'
import ComunicacionEntreComponentes from './components/ComunicacionEntreComponentes'
import ContactForm from './components/ContactForm'
import Estado from './components/Estado'
import { EventosClaseES6, EventosClaseES7, MasSobreEventos } from './components/EventosClase'
import FormatoJSX from './components/FormatoJSX'
import Formularios from './components/Formularios'
// import AjaxHooks from './components/hooks/AjaxHooks'
import CustomHooks from './components/hooks/CustomHooks'
import RelojHooks from './components/hooks/RelojHooks'
import UseEffect from './components/hooks/UseEffect'
import UseState from './components/hooks/UseState'
import Memorizacion from './components/Memorizacion/Memorizacion'
import Modals from './components/Modals'
// import PeticionesAsincronasComponentesDeClase from './components/PeticionesAsincronasComponentesDeClase'
import Propiedades from './components/Propiedades'
import ReactRouter from './components/ReactRouter/ReactRouter'
import Referencias from './components/Referencias'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElementos'

function App() {

  return (
    <>
      <h1>Contenido Curso React</h1>
      <hr />
      <Memorizacion /> 
      <hr />
      <ReactRouter />
      <hr />
      <Modals />
      <hr />
      <ContactForm />
      <hr />
      <Formularios />
      <hr />
      <Referencias />
      <hr />
      <CustomHooks />
      <hr />
      {/*<AjaxHooks />*/}
      <hr />
      <RelojHooks />
      <hr />
      <UseEffect />
      <hr />
      <UseState />
      <hr />
      {/*<PeticionesAsincronasComponentesDeClase />*/}
      <hr />
      <CicloDeVidaClases />
      <hr />
      <ComunicacionEntreComponentes />
      <hr />
      <MasSobreEventos />
      <EventosClaseES7 />
      <EventosClaseES6 />
      <hr />
      <RenderizadoElementos />
      <hr />
      <RenderizadoCondicional />
      <hr />
      <Estado />
      <hr />
      <Propiedades 
        cadena = "Hola mundo"
        numero = {10}
        boolean = {true}
        array = {[1,2,3,4,5,6,7,8,9,10]}
        objeto = {{nombre: "Ignacio"}}
        funcion = {(num) => num*num}
        reactElement = {<h4>Hola mundo</h4>}
      />
      <hr />
      <Componentes />
      <hr />
      <FormatoJSX />

    </>
  )
}

export default App
