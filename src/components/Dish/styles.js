import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  border-radius: 8px;
  padding: 2.4rem;

  gap: 15px;

  height: 100%;

  border: none;

  @media (max-width: 768px) {
    width: 20rem;
    height: 30rem;
      
    padding: 24px;

    justify-content: center;
  }

  .btnFavorite {
    position: absolute;
    right: 18px;

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
    

  img {
    width: 176px;
    height: 176px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 9rem;
      height: 9rem;
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  > p {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.WHITE_400};
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  .btnScore {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 20px;
      gap: 10px;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      > section {
        display: flex;
        gap: 1.4rem;
        align-items: center;

        > #btnMinus {
          border: none;
          background: none;
          color: white;
          display: flex;
          align-items: center;
        }

        > span {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 1.6rem;
        }

        > #btnPlus {
            border: none;
            background: none;
            color: white;
            display: flex;
            align-items: center;
        }
      }

    > #btnAdd {
        width: 100px;
        height: 40px;
        border: 0;
        border-radius: 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.COLORS.TOMATO};
        color: ${({ theme }) => theme.COLORS.WHITE};

        @media (max-width: 768px) {
          width: 100%;
        }
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