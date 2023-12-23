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
        padding: 64px 0;
    }
`;

export const Content = styled.div`
    max-width: 1137px;
    margin: 0 auto;
    padding: 10px;

    height: 100%;

    overflow-y: auto;

    display: flex;
    flex-direction: column;

    > a:nth-child(1){
        display: flex;
        align-items: start;

        margin-bottom: 24px;
    }

    > .edit {
        display: flex;
        justify-content: center;

        color: ${({ theme }) => theme.COLORS.ROSE_100};
    }

    > h1{
        font-size: 36px;
        font-weight: 500;

        display: flex;
        flex-direction: row;
    }

    > p {
        font-size: 16px;
        margin-top: 16px;
        text-align: justify;
    }

     /* Estilos da barra de rolagem */
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.ROSE_100};
        border-radius: 8px;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: row;

    > h1 {
        margin-right: 15px;
    }
`;

export const LastUpdated = styled.div`
    display: flex;
    flex-direction: row;

    > svg {
        margin: 3px 5px 0 0;
        color: ${({ theme }) => theme.COLORS.ROSE_100};
    }
`;