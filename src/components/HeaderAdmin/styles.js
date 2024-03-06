import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;

    align-items: center;
    justify-content: center;

    gap: 32px;
    padding: 24px 124px;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    a:nth-child(3) {
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
    }
`;

export const Logout = styled.button `
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    align-items: center;
`;

export const Menu = styled.div`
    position: relative;
    cursor: pointer;

    width: 10%;
    height: 100%;

    color: white;

    display: flex;
    align-items: center;
    
    svg {
        font-size: 36px;
    }

    ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: ${({ theme }) => theme.COLORS.DARK_600};
        border-radius: 5px;
        border: none;
        padding: 0;
        margin: 0;
        text-decoration: none;

        &.visible {
        display: block;
        }
    }

    li {
        list-style: none;
        padding: 1em;
        cursor: pointer;
        color: red;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

    ul.visible {
    display: block;
  }
`;