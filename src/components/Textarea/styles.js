import styled from "styled-components";

export const Container = styled.textarea`
    width: 99%;
    min-height: 270px;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    margin: 8px;
    border-radius: 10px;

    padding: 12px;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;