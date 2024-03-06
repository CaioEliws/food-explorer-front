import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-size: 14px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    padding: 24px 124px;

    > div {
        display: flex;
        gap: 11px;

        color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`;