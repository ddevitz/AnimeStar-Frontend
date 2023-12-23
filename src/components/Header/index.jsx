import { AiFillStar } from "react-icons/ai";
import { Container, Profile, Logo, Search } from "./styles";
import { Input } from '../Input';

export function Header(){
    return(
        <Container>
            <Logo to="/">
                <AiFillStar />
                AnimeStar
            </Logo>

            <Search>
                <Input placeholder="Pesquisar avaliação"/>
            </Search>

            <Profile to="/profile">
                <div>
                    <span>Daniela Devitz</span>
                    <a href="#">sair</a>
                </div>

                <img 
                    src="https://github.com/ddevitz.png" 
                    alt="Imagem do usuário" 
                />
            </Profile>
        </Container>
    )
}