import { useEffect, useState } from "react";

const UseEffect = () => {

    const [scrollY, setScrollY] = useState(0);

    useEffect( () => {
        // console.log("Moviendo Scroll");

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
        }

    }, [scrollY])

    useEffect( () => {
        // console.log("Fase de montaje")
    },[])

    useEffect( () => {
        // console.log("Fase de actualización")
    })

    useEffect( () => {
        return () => {
            // console.log("Fase de desmontaje")
        }
    },[])


    return(
        <div>
            <h2>12. HOOK - USE EFFECT</h2>
            <p>Scroll Y del navegador en este momento: {scrollY} </p>
        </div>
    )
}

export default UseEffect;