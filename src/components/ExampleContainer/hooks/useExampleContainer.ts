import { useState } from "react"

export const useExampleContainer = () => {

    const [activeModal, setActiveModal] = useState(0);
    

    const changeModal = (i: number) => {
        setActiveModal(i);
    }
    
    return {
        activeModal,
        changeModal
    }
}