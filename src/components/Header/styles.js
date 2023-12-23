import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`;

export const Logo = styled(Link)`
    border: none;
    background: none;

    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.ROSE_100};
    font-weight: 700;

    display: flex;

    align-items: center;
    justify-content: center;

    > svg {
        margin: 5px;
    }
`;

export const Profile = styled(Link)`
    display: flex;
    align-items: center;

    > img{
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        
        margin-right: 16px;

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-decoration: none;

        display: flex;
        flex-direction: row-reverse;

        font-size: 14px;
    }
    }

`;

export const Search = styled.div`
    width: 64%;
    display: flex;
    align-items: center;
`;

