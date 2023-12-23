import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

import { Container } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }){
    return(
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                {...rest}
                />

            <button
                type="button"
                onClick={onClick}
            >
                {isNew ? <AiOutlinePlus/> : <AiOutlineClose/>}
            </button>

        </Container>
    )
}