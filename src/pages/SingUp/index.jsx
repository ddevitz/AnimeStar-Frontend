import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineArrowLeft } from "react-icons/ai";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SingUp() {
    return(
        <Container>
            <Form>
                <h1>AnimeStar</h1>
                <p>Aplicação para acompanhar e avaliar tudo que você assistir.</p>

                <h2>Crie sua conta</h2>

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
                    placeholder="Senha"
                    type="password"
                    icon={AiOutlineLock}
                />

                <Button className="button" title="Cadastrar" />

                <Link className="link" to="/">
                    <AiOutlineArrowLeft />
                    Voltar para o Login
                </Link>

            </Form>

            <Background />
        </Container>
    )
}