import styled from "styled-components";
import fruitSvg from '../../assets/fruit.svg';

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

  .banner-text {
    text-align: end;
    padding-top: 10%;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
  }

  .swiper-button-prev::after {
    color: white;
  }

  .swiper-button-next::after {
    color: white;
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
`;

export const Banner = styled.div`
  margin-top: 16rem;
  margin-bottom: 6rem;

  height: 26rem;
  display: flex;
  border-radius: 0.8rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  img {
    width: 62rem;
    height: 40rem;
    object-fit: cover;
    margin-top: -14rem;
    margin-left: -5rem;
    overflow: visible;
    opacity: 0.8;
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
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
    }
  }
`