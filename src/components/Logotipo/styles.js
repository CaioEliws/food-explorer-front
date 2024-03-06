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
`;