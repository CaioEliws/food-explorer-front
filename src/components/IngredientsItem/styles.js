import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, $isNew }) => $isNew ? 'transparent' : theme.COLORS.GRAY_600};

    border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : "none"};

    padding-right: 16px;
    border-radius: 10px;

    width: 125px;
    height: 40px;

    > button {
        border: none;
        background: none;

        display: flex;
        align-items: center;

        color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};
    }

    > input {
        width: 100%;

        padding-left: 12px;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_500};
        }
    }
`;