import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    background: transparent;

    white-space: nowrap;

    > div {
        display: flex;
        gap: 12px;
    }
    
    > img {
        margin-right: 11px;
    }
    
    > p {
        display: flex;
        justify-content: end;

        color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
    }
`;