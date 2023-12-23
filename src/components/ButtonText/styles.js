import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    background: none;
    color: ${({ theme, $isactive }) => $isactive ? theme.COLORS.ROSE_100 : theme.COLORS.GRAY_100};

    border: none;
    font-size: 16px;

    > svg {
        width: 16px;
        height: 16px;

        margin: 3px 5px 0 0;
    }
`;