import { Container } from "./styles";
import { Tag } from '../Tag'
import { Rating } from '../Rating';

export function Note({ data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating grade={4}/>
            <p>O jovem pirata Monkey D. Luffy veste o chapeu de palha e, com sua tripulaçao atrapalhada, zarpa em uma jornada epica nesta adaptação em live-action do popular mangá.O jovem pirata Monkey D. Luffy veste o chapeu de palha e, com sua tripulaçao atrapalhada, zarpa em uma jornada epica nesta adaptação em live-action do popular mangá.O jovem pirata Monkey D. Luffy veste o chapeu de palha e, com sua tripulaçao atrapalhada, zarpa em uma jornada epica nesta adaptação em live-action do popular mangá.O jovem pirata Monkey D. Luffy veste o chapeu de palha e, com sua tripulaçao atrapalhada, zarpa em uma jornada epica nesta adaptação em live-action do popular mangá.O jovem pirata Monkey D. Luffy veste o chapeu de palha e, com sua tripulaçao atrapalhada, zarpa em uma jornada epica nesta adaptação em live-action do popular mangá.</p>

            {
                data.tags && 
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container>
    )
}