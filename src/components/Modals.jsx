import { useModal } from "../custom_hooks/useModal"
import Modal from "./Modal"

const Modals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    return (
        <div>
            <h2>18. Modals</h2>
            <button onClick={openModal1}>Modal 1</button>
            <Modal 
                isOpen={isOpenModal1}
                closeModal={closeModal1}
            >
                <h3>Modal 1</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem quos aut laudantium sequi, praesentium voluptates quaerat soluta et minima consectetur eius molestiae eligendi temporibus illum similique autem sint! Odio, impedit!</p>
            </Modal>
        </div>
    )
}

export default Modals