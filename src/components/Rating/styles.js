import styled from "styled-components";

export const Container = styled.div`
    color: ${({ theme }) => theme.COLORS.ROSE_100};
    display: flex;
    justify-content: ${({ isBigSize }) => (isBigSize ? "center" : "start")};

    > svg {
        font-size: ${({ isBigSize }) => (isBigSize ? "36px" : "20px")};
    }
`;