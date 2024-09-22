const FormatoJSX = () => {

    const nombre = "Ignacio";
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

    return (
    <div>
        <h2>1. SINTAXIS JSX</h2>
        <p>Mi nombre es: {nombre}</p>
        <ul>
            {
                dias.map(( dia, index ) => <li key={index}>{dia}</li>)
            }
        </ul>
    </div>
    )
}

export default FormatoJSX
