import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border-radius: 8px;
    padding: 2.4rem;

    height: 100%;

    gap: 15px;

    .btnFavorite {
      position: absolute;
      right: 18px;

      color: white;
      background: none;
      border: none;

      font-size: 30px;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
    }

    > p {
      font-size: 1.2rem;
      height: 42px;
      color: ${({ theme }) => theme.COLORS.WHITE_400};
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
    }

    img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;
    }
`;