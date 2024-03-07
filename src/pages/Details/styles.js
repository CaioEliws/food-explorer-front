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

    }


    .btnsScore {
        display: flex;
        align-items: center;

        font-size: 20px;
        gap: 10px;

        > #btnScore {
            border: none;
            background: none;
            color: white;

            align-items: center;
            display: flex;
            font-size: 20px;
        }

        > span {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 24px;
        }

        > #btnAdd {
            border: 0;
            border-radius: 5px;

            margin-left: 33px;
            
            max-width: 40%;
            
            font-size: 14px;

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