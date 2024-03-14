import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-bottom: 50px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_400};
        font-size: 3.2rem;
    }

    @media (max-width: 425px) {
        font-size: 1.8rem;
    }
`;