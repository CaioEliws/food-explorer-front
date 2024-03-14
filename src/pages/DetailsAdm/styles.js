import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    flex: 1;

    display: flex;
    flex-direction: column;

    font-family: 'Poppins', sans-serif;

    @media (max-width: 425px) {
        padding-left: 2.4rem;
        padding-right: 2.4rem;

        max-width: 100%;
    }

    > main {
        display: flex;
        margin-top: 60px;

        @media (max-width: 425px) {
            flex-direction: column;
            margin-top: 3rem;
            align-items: center;
        }

        > img {
            width: 400px;
            height: 400px;
            object-fit: cover;

            @media (max-width: 425px) {
                width: 26rem;
                height: 26rem;
            }
        }
    }
    
    div {
        display: flex;

        margin-left: 20px;

        flex-direction: column;
        gap: 24px;

        justify-content: center;

        @media (max-width: 425px) {
            align-items: center;
            width: 100%;
            flex: 1;
        }

        h1, p {
            color: ${({ theme }) => theme.COLORS.WHITE_300};
        }

        h1 {
            @media (max-width: 425px) {
                font-size: 2.6rem;
                text-align: center;
                margin-top: 1.6rem;
            }
        }

        p {
            @media (max-width: 425px) {
                font-size: 1.6rem;
                text-align: center;
            }
        }

        > section {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 2.4rem;

            gap: 8px;

            @media (max-width: 425px) {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 2.4rem;

                margin-left: 2.5rem;
                margin-right: 2.5rem;
            }
        }

        > footer {
            margin-top: 3.8rem;
            width: 15rem;

            @media (max-width: 425px) {
                width: 100%;
            }

            > #btnEdit {
                border: 0;
                border-radius: 5px;
                
                flex-wrap: nowrap;
                
                font-size: 14px;
                
                display: flex;
                padding: 12px 24px;
                justify-content: center;
                align-items: center;
                gap: 8px;
        
                background-color: ${({ theme }) => theme.COLORS.TOMATO};
                color: ${({ theme }) => theme.COLORS.WHITE};

                margin-bottom: 5rem;
            }
        }
    }
`;