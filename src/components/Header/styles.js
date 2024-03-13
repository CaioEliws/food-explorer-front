import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3.2rem;
    padding: 2.4rem 12.4rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
`;

export const Logout = styled.button `
    background: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border: none;
    display: flex;
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
`;

export const MenuMobile = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    
    font-size: 2.4rem;

    ul {
        display: none;
        position: fixed;

        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        border: none;
        text-decoration: none;
        z-index: 1000;

        font-size: 1.6rem;

        > div {
            background-color: ${({ theme }) => theme.COLORS.DARK_400};
            height: 100%;
            width: 100%;

            padding: 3rem;
        }

        &.visible {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }

        > header {
            width: 100%;
            height: 12rem;

            display: flex;
            align-items: center;
        }
    }

    li {
        padding: 1em;

        &:hover {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
  
    ul.visible {
        display: flex;
    }
`;

export const CloseButton = styled.button`
    background: none;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-left: 2rem;

    font-size: 3rem;

    align-items: center;
    display: flex;
`;