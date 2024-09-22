import './App.css'
import Componentes from './components/Componentes'
import Estado from './components/Estado'
import FormatoJSX from './components/FormatoJSX'
import Propiedades from './components/Propiedades'

function App() {

  return (
    <>
      <h1>Contenido Curso React</h1>
      <hr />
      <FormatoJSX />
      <hr />
      <Componentes />
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
      <Estado />


    </>
  )
}

export default App
