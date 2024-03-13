import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    white-space: nowrap;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        > div {
            align-items: center;
        }

        > div > h1 {
            font-size: 2.1rem;
        }

        > div > img {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    > div {
        display: flex;
        gap: 12px;

        > h1 {
            font-size: 2.4rem;
        }
    }
    
    > img {
        margin-right: 11px;
    }
    
    > p {
        display: flex;
        justify-content: end;
        font-size: 1.2rem;

        color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
    }
`;