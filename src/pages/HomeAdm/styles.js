import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: 1120px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 425px) {
    padding-left: 2.4rem;
    padding-right: 2.4rem;

    max-width: 100%;
  }

  .swiper-button-prev::after {
    color: white;
  }

  .swiper-button-next::after {
    color: white;
  }

  @media (max-width: 425px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }
  }

  .swiper::after {
    content: "";
    background: linear-gradient(90deg, rgba(0,10,15,1) 0%, rgba(0,10,15,0) 100%);
    position: absolute;
    border-radius: .8rem;
    width: 20%;
    height: 100%;
    z-index: 1;
    bottom: 0;
    left: 0;
  }

  .swiper::before {
    content: "";
    background: linear-gradient(90deg, rgba(0.27,15,10,0) 0%, rgba(0,10,15,1) 100%);
    position: absolute;
    border-radius: .8rem;
    width: 20%;
    height: 100%;
    z-index: 2;
    bottom: 0;
    right: 0;  
  }

  @media (max-width: 425px) {
    .swiper::before,
    .swiper::after {
      display: none;
    }
  }
`;

export const Banner = styled.div`
  margin-top: 18rem;
  margin-bottom: 6rem;

  height: 26rem;
  display: flex;
  border-radius: 0.8rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  @media (max-width: 425px) {
    margin-top: 8rem;
    width: 100%;
    height: 120px;

    padding-left: 1.5rem;

    margin-left: 1rem;
  }

  img {
    height: 40rem;

    object-fit: cover;
    overflow: visible;

    margin-top: -14rem;
    margin-left: -5rem;

    @media (max-width: 425px) {
      width: 18rem;
      height: 15rem;

      margin-right: 1rem;
      margin-top: -3rem;
      margin-left: -2rem;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.3rem;

    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 4rem;
      font-weight: 600;

      @media (max-width: 425px) {
        font-size: 1.6rem
      }
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      
      @media (max-width: 425px) {
        font-size: 1rem;
        padding-right: 1rem;
        color: ${({ theme }) => theme.COLORS.WHITE_300};
      }
    }
  }
`