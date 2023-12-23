import styled from "styled-components";
import backgroundImg from '../../assets/bg.webp';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    text-align: center;

    > h1{
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ROSE_100};

        display: flex;
        align-items: flex-start;
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;

        display: flex;
        align-items: flex-start;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        display: flex;
        align-items: flex-start;
    }

    > .link {
        margin: 48px 0 0 10px;
        color: ${({ theme }) => theme.COLORS.ROSE_100};

        display: flex;
        justify-content: center;
    }

    > .button{
        margin-left: 8px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    opacity: 0.4;
`;