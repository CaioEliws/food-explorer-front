import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize: none;

    border-radius: 10px;
    padding: 16px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_400};
    }
`;