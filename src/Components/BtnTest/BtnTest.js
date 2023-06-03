import { useState } from "react"
import InputText from "../InputText"

export const BtnTeste = () => {
    const [isActive, setisActive] = useState('False')

    const activateInput = () => {
        if (isActive === 'False'){
            setisActive('True')
        }else{
            setisActive('False')
        }
    }

    return (
        <>
            <button onClick={activateInput}>Teste</button>
            <InputText ativo={isActive} />
        </>
    )
}
