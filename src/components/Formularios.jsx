import { useState } from 'react'

/*
const Formularios = () => {

    const [ nombre, setNombre ] = useState('');
    const [ sabor, setSabor ] = useState('');
    const [ select, setSelect ] = useState('');
    const [ terminos, setTerminos ] = useState(false);

 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({nombre, sabor, select, terminos});
    }

    return (
    <div>
        <h2>17. FORMULARIOS</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor="nombre">Nombre: </label>
            <input 
                type = "text" 
                id = "nombre" 
                name = "nombre" 
                value = {nombre}
                onChange = {(e) => setNombre(e.target.value)}
            />

            <p>Elige tu favorito</p>
            <input 
                type="radio" 
                name="sabor" 
                id="react" 
                value="react"
                onChange={e => setSabor(e.target.value)} 
            />
            <label htmlFor="react">React</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vue" 
                value="vue"
                onChange={e => setSabor(e.target.value)} 
            />
            <label htmlFor="vue">Vue</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vanilla" 
                value="vanilla"
                onChange={e => setSabor(e.target.value)} 
            />
            <label htmlFor="vanilla">Vanilla</label>
            <p>Selección: {sabor}</p>

            <p>Elige tu favorito</p>
            <select name="lenguaje" onChange={e => setSelect(e.target.value)}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="vanilla">Vanilla</option>
            </select>
            <p>Selección: {select}</p>

            <label htmlFor="terminos">Terminos y Condiciones</label> 
            <input 
                type="checkbox" 
                id='terminos' 
                onChange = {e => setTerminos(e.target.checked)}
            />
            <br />
            <input type="submit" value="Enviar" />

        </form>
    </div>
    )
}

*/

const Formularios = () => {

    const [ form, setForm ] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    
    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name] : e.target.checked
        })
    }
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

    return (
    <div>
        <h2>17. FORMULARIOS</h2>
        <form onSubmit={handleSubmit}>

            <label htmlFor="nombre">Nombre: </label>
            <input 
                type = "text" 
                id = "nombre" 
                name = "nombre" 
                value = {form.nombre}
                onChange = {handleChange}
            />

            <p>Elige tu favorito</p>
            <input 
                type="radio" 
                name="sabor" 
                id="react" 
                value="react"
                onChange={handleChange} 
            />
            <label htmlFor="react">React</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vue" 
                value="vue"
                onChange={handleChange} 
            />
            <label htmlFor="vue">Vue</label>
            <input 
                type="radio" 
                name="sabor" 
                id="vanilla" 
                value="vanilla"
                onChange={handleChange} 
            />
            <label htmlFor="vanilla">Vanilla</label>
            <p>Selección: {form.sabor}</p>

            <p>Elige tu favorito</p>
            <select name="lenguaje" onChange={handleChange}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
                <option value="vanilla">Vanilla</option>
            </select>
            <p>Selección: {form.select}</p>

            <label htmlFor="terminos">Terminos y Condiciones</label> 
            <input 
                type="checkbox" 
                id='terminos' 
                onChange = {handleChecked}
            />
            <br />
            <input type="submit" value="Enviar" />

        </form>
    </div>
    )
}

export default Formularios
