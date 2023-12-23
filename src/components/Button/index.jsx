import { Container } from "./styles";

export function Button({title, highlighted = false, icon: Icon, ...rest}){

    return(
        <Container 
            type="button"
            highlighted={highlighted.toString()}
            {...rest}
            >
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}