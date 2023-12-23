import styled from "styled-components";

export const Container = styled.section`
    margin: 28px 0 28px;

    > h2 {
        padding-bottom: 16px;

        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;