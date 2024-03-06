import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    height: 100vh;

    padding: 0 124px 0 124px;

    background-color: ${({ theme}) => theme.COLORS.DARK_400};

    #logo {
        display: flex;
        align-items: center;

        gap: 8px;

        font-size: 26px;
    }
`;

export const Content = styled.div`
    background-color: ${({ theme}) => theme.COLORS.DARK_700};

    padding: 64px;
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;

    > section > h2 {
        color: ${({ theme}) => theme.COLORS.WHITE_400};

        font-size: 16px;
        padding-bottom: 8px;
    }

    a {
        color: ${({ theme}) => theme.COLORS.WHITE};
    }
`;