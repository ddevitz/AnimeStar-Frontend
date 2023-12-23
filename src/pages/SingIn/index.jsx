import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { AiOutlineMail, AiOutlineLock  } from "react-icons/ai";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SingIn() {
    return(
        <Container>
            <Form>
                <h1>AnimeStar</h1>
                <p>Aplicação para acompanhar e avaliar tudo que você assistir.</p>

                <h2>Faça seu login</h2>

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

                <Button className="button" title="Entrar" />

                <Link className="link" to="/register">
                    Criar conta
                </Link>
            </Form>

            <Background />
        </Container>
    )
}