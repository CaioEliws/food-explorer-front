import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    background-color: ${({ theme}) => theme.COLORS.DARK_400};

    #logo {
        display: flex;
        align-items: center;

        gap: 8px;

        font-size: 26px;

        > h1 {
            @media (max-width: 768px) {
                font-size: 4.0rem;
            }
        }

        > img {
            width: 4rem;
            height: 4rem;
        }
    }

    @media (max-width: 768px) {
        height: 100vh;
        overflow: hidden;
        
        display: flex;
        flex-direction: column;
    }
`;

export const Form = styled.form`
    background-color: ${({ theme}) => theme.COLORS.DARK_700};

    padding: 64px;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;

    > section {
        width: 300px;
    }

    @media (max-width: 768px) {
        background-color: ${({ theme}) => theme.COLORS.DARK_400};
    }

    > section > h2 {
        color: ${({ theme}) => theme.COLORS.WHITE_400};

        font-size: 16px;
        padding-bottom: 8px;
    }

    a {
        color: ${({ theme}) => theme.COLORS.WHITE};
    }
`;