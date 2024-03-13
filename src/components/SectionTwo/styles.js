import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 24px;

    margin-bottom: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE_400};
    font-size: 14px;

    @media (max-width: 425px) {
        font-size: 1.2rem; 
    }
    
    > div {
        display: flex;

        gap: 30px;
    }
`;