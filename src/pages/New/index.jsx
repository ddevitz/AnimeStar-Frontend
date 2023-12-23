import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

import { Container, Form } from './styles';

import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <Link to="/">
                            <AiOutlineArrowLeft/>
                            Voltar
                        </Link>
                        <h1>Nova Avaliação</h1>
                    </header>

                    <div>
                        <Input 
                            placeholder="Título"
                            type="text" 
                        />
                        <Input 
                            placeholder="Sua nota (de 0 a 5)"
                            type="number" 
                            min="0"
                            max="5"
                        />
                    </div>

                    <Textarea placeholder="Observações"/>

                    <Section title="Marcadores">
                        <div  className='markers'>
                            <NoteItem 
                                value="Netflix"
                            />

                            <NoteItem 
                                isNew
                                value=""
                                placeholder="Novo marcador"
                            />
                        </div>
                    </Section>
                        <div>
                            <Button 
                                $highlighted
                                title="Excluir avaliação"
                            />
                            <Button 
                                title="Salvar alterações"
                            />
                        </div>
                </Form>
            </main>
        </Container>
    )
}