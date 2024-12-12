import { useState, useCallback } from 'react'
import MemoContadorHijo from './MemoContadorHijo';

const MemoContador = () => {

    const [contador, setContador] = useState(0);
    const [input, setInput] = useState("");

    // const sumar = () => setContador( contador + 1 );

    const sumar = useCallback ( () => setContador( contador + 1 ) , [contador] );
    const restar = useCallback ( () => setContador( contador - 1 ) , [contador] ) 

    return (
    <div>
        <h3>20.1 Memo</h3>
        <p>{contador}</p>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
        <MemoContadorHijo contador={contador} sumar={sumar} restar={restar} />
    </div>
    )
}

export default MemoContador
