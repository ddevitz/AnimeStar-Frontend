import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;

        background: ${({ theme }) => theme.COLORS.ROSE_100_05};

        display: flex;
        align-items: center;

        padding: 0 124px;

        a {
            color: ${({ theme }) => theme.COLORS.ROSE_100};

            display: flex;
        }

        svg {
            margin: 3px 8px;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;

    > div:nth-child(4){
        margin-top: 24px;
    }

    > a {
        margin: 24px 0 0 8px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: -124px auto 32px;

    width: 186px;
    height: 186px;

    > img {
        border-radius: 50%;
        width: 186px;
        height: 186px;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.ROSE_100};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 25px;
            height: 25px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;