import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 105px 50px auto;
    grid-template-areas: 
    "header header"
    "menu brand"
    "menu content";
`;

export const Brand = styled.div`
    grid-area: brand;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 50px 64px;

    background-color:${({ theme }) => theme.COLORS.BACKGROUND_900};

    > h1 {
        font-size: 26px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-weight: 400;
    }

    > a {
        max-width: 250px;
    }
`;

export const Menu = styled.ul`
    grid-area: menu;
    background-color:${({ theme }) => theme.COLORS.ROSE_100_05};

    padding-top: 24px;
    text-align: center;

    > li {
        margin-bottom: 12px;
    }
`;

export const Content = styled.div`
    grid-area: content;

    padding: 64px 64px 0;
    overflow-y: auto;

     /* Estilos da barra de rolagem */
     &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.ROSE_100};
        border-radius: 8px;
    }

    
`;
