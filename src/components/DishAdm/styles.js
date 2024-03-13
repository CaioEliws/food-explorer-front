import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border-radius: 8px;
    padding: 2.4rem;

    height: 100%;

    gap: 25px;

    @media (max-width: 768px) {
      width: 20rem;
      height: 30rem;
      
      padding: 24px;

      justify-content: center;
    }

    .btnFavorite {
      position: absolute;
      display: block;
      right: 2rem;

      color: white;
      background: none;
      border: none;

      font-size: 30px;

      @media (max-width: 768px) {
        font-size: 2.4rem;
        right: -1rem;
        top: 1.6rem;
      }
    }

    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;

      @media (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    > p {
      font-size: 1.2rem;
      height: 42px;
      color: ${({ theme }) => theme.COLORS.WHITE_400};
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};

      @media (max-width: 768px) {
        font-size: 1.6rem;
      }
    }

    img {
      width: 18rem;
      height: 18rem;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 9rem;
        height: 9rem;
      }
    }

    .title {
        height: 3rem;

        > svg {
          font-size: 3rem;

          @media (max-width: 768px) {
            font-size: 1.4rem;
          }
        }
    }
`;