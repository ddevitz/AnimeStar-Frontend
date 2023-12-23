import { Container } from "./styles";

export function ButtonText({title, isActive = true, icon: Icon, ...rest}){

    return(
        <Container
            type="button"
            {...rest}
            isactive={isActive.toString()}
            >
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}