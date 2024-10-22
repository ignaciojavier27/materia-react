import { useRef } from "react"
const Referencias = () => {

    let refMenu = useRef()
    let refMenuBtn = useRef()

    const handleToggleMenu = () => {
        /*
        const $menu = document.getElementById('menu');

        if(e.target.textContent === 'Menú') {
            e.target.textContent = 'Ocultar';
            $menu.style.display = 'block';
        }else{
            e.target.textContent = 'Menú';
            $menu.style.display = 'none';
        }
        */

        if(refMenuBtn.current.textContent === 'Menú') {
            refMenuBtn.current.textContent = 'Ocultar';
            refMenu.current.style.display = 'block';
        }else{
            refMenuBtn.current.textContent = 'Menú';
            refMenu.current.style.display = 'none';
        }

    }

    return(
        <div>
            <h2>16. REFERENCIAS</h2>
            <div>
                <button 
                    id="menu-btn" 
                    onClick={handleToggleMenu}
                    ref={refMenuBtn}
                >
                    Menú
                </button>
                <nav 
                    id="menu" 
                    style={{display: 'none'}}
                    ref={refMenu}
                >
                    <a href="#">Sección 1</a>
                    <br />
                    <a href="#">Sección 2</a>
                    <br />
                    <a href="#">Sección 3</a>
                    <br />
                    <a href="#">Sección 4</a>
                    <br />
                    <a href="#">Sección 5</a>
                </nav>
            </div>
        </div>
    )
}

export default Referencias;