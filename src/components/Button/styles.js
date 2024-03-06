import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    border: 0;
    padding: 0 16px;
    border-radius: 10px;
    font-weight: 500;

    /* font-size: 16   px; */

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
        opacity: 0.5;
    }

    background-color: ${({ theme }) => theme.COLORS.TOMATO};
    color: ${({ theme }) => theme.COLORS.WHITE};

    > svg {
        margin-right: 8px;
    }
`;