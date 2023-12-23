import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.ROSE_100_05};

    border: none;
    border-radius: 10px;

    padding: 22px;
    margin-bottom: 24px;

    > h1 {
        flex: 1;
        text-align: left;
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-bottom: 10px;
    }

    > p {
        flex: 1;
        text-align: left;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};

        margin-top: 10px;

        word-wrap: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
        
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 24px;
    }
`;