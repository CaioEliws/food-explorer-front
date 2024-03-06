import styled from "styled-components";

export const Container = styled.span`
    font-family: 'Poppins', sans-serif;

    font-size: 14px;
    padding: 4px 8px;

    border-radius: 5px;

    justify-content: center;
    align-items: center;

    white-space: nowrap;

    background-color: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;