import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    background-color: ${({ theme, $highlighted }) => $highlighted ? theme.COLORS.BLACK : theme.COLORS.ROSE_100};
    color: ${({ theme, $highlighted }) => $highlighted ? theme.COLORS.ROSE_100 : theme.COLORS.BACKGROUND_800};

    height: 56px;
    border: 0;
    padding: 0;
    margin-top: 16px;
    border-radius: 10px;
    font-weight: 500;

    display: flex;

    justify-content: center;
    align-items: center;

    > svg {
        margin-right: 5px;
    }
    
`;