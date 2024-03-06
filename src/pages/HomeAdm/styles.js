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

  .banner-container {
    margin-top: 150px;
    width: 100%;
    height: 260px;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    padding-right: 100px;

    border-radius: 8px;

    margin-bottom: 60px;
  }

  .banner-img {
    position: absolute;
    top: 127px;
    left: 330px;

    background: url(${fruitSvg}) no-repeat center bottom;
    height: 400px;
    width: 600px;
  }

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
