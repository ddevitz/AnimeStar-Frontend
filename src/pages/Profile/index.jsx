import { Container, Form, Avatar } from "./styles";

import { AiOutlineArrowLeft, AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlineCamera } from "react-icons/ai";

import { Input } from '../../components/Input';
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <AiOutlineArrowLeft/>
                    Voltar
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                        src="https://github.com/ddevitz.png" 
                        alt="Imagem do Usuário" 
                        />
                
                    <label htmlFor="avatar">
                        <AiOutlineCamera />

                        <input 
                            id="avatar"
                            type="file"
                        />
                    </label>
                </Avatar>
                <Input 
                    placeholder="Nome"
                    type="text"
                    icon={AiOutlineUser}
                />

                <Input 
                    placeholder="E-mail"
                    type="text"
                    icon={AiOutlineMail}
                />

                <Input 
                    placeholder="Senha atual"
                    type="password"
                    icon={AiOutlineLock}
                />

                <Input 
                    placeholder="Nova Senha"
                    type="password"
                    icon={AiOutlineLock}
                />

                <Button title="Salvar"/>

            </Form>
        </Container>
    )
}