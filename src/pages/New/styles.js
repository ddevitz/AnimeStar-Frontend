import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";

    > main{
        grid-area: content;
        overflow-y: auto;

        /* Estilos da barra de rolagem */
        &::-webkit-scrollbar {
            width: 8px;
        }
    
        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.COLORS.ROSE_100};
            border-radius: 8px;
        }
    }
`;

export const Form = styled.form`
    max-width: 1130px;
    margin: 38px auto;
    height: 100%;

    display: flex;
    flex-direction: column;    

    > header {
        display: flex;
        align-items: start;
        justify-content: space-around;
        flex-direction: column;

        margin-bottom: 36px;

        h1 {
            margin: 24px 0 0 8px;
        }

        a {
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.ROSE_100};

            display: flex;

            svg {
                margin: 3px 8px;
            }
        }
    }

    > section {
        display: flex;
        flex-direction: column;
        
        .markers {
            display: flex;
            flex-direction: row;
            align-items: center;
            flex-wrap: wrap;

            padding: 16px 16px 0 16px;
            border-radius: 8px;
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            
        }
    }

    > div {
        display: flex;
        flex-direction: row;

        a:first-child {
            margin-right: 16px;
        }
    }

`;