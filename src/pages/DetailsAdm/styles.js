import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
`;

export const Content = styled.div`
    width: 1120px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    font-family: 'Poppins', sans-serif;

    > header {
        width: 100%;
        display: flex;
        justify-content: start;

        margin-top: 60px;
    }

    > main {
        display: flex;
        margin-top: 60px;

        > img {
            width: 400px;
            height: 400px;
            object-fit: cover;
        }
    }
    
    div {
        display: flex;

        margin-left: 20px;

        flex-direction: column;
        gap: 24px;

        justify-content: center;

        h1, p {
            color: ${({ theme }) => theme.COLORS.WHITE_300};
        }

        > section {
            display: flex;
            gap: 8px;
        }

        > #btnEdit {
            border: 0;
            border-radius: 5px;

            width: 25%;
    
            display: flex;
            padding: 12px 24px;
            justify-content: center;
            align-items: center;
            gap: 8px;
    
            background-color: ${({ theme }) => theme.COLORS.TOMATO};
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`;