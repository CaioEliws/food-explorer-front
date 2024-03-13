import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    white-space: nowrap;

    > img {
        margin-right: 11px;
    }

    @media (max-width: 768px) {
        display: flex;

        > img {
            width: 2.4rem;
            height: 2.4rem;
        }

        > h1 {
            font-size: 2.1rem;
        }
    }
`;