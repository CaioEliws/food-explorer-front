import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border-radius: 8px;
    padding: 24px;

    gap: 15px;

    border: none;

    min-height: 260px;

    .btnFavorite {
      position: absolute;
      right: 18px;

      color: white;
      background: none;
      border: none;

      font-size: 30px;
    }

    img {
      width: 176px;
      height: 176px;
      object-fit: cover;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.WHITE};
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > p {
      font-size: 12px;
      color: ${({ theme }) => theme.COLORS.WHITE_400};
    }

    > h2 {
      color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
    }

    .btnScore {
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 20px;
        gap: 10px;

    > #btnMinus {
      border: none;
      background: none;
      color: white;
    }

    > span {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 20px;
    }

    > #btnPlus {
        border: none;
        background: none;
        color: white;
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
    }
  }
`;