import { useState } from 'react';

const UseState = () => {

    const [ contador, setContador ] = useState(0);

    const incrementar = () => setContador( contador + 1 );

    const decrementar = () => setContador( contador - 1 );

    return (
    <div>
        <h2>11. HOOK - USE STATE</h2>
        <div>
            <button onClick={decrementar}> - </button>
            <span style={{margin: '0px 10px'}}>{ contador }</span>
            <button onClick={incrementar}> + </button>
        </div>
    </div>
    )
}

export default UseState
