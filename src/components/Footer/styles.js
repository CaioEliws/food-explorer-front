import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    padding: 24px 124px;

    @media (max-width: 425px) {
        padding: 3.0rem;

        > h2 {
            font-size: 1.2rem;
        }

        > div > h1 {
            font-size: 1.6rem;

            display: flex;
            align-items: center;
        }

        > div > img {
            width: 1.6rem;
            width: 1.6rem;
        }
    }

    > div {
        display: flex;
        gap: 11px;

        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`;