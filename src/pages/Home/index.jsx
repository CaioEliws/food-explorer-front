import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Dish } from '../../components/Dish'

import BannerImg from "../../assets/BannerImg.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function Home() {

    const [search] = useState("");
    const [dishes, setDishes] = useState({ meals: [], desserts: [] });

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes?search=${search}`);
                const meals = response.data.filter(dish => dish.category === "meals");
                const desserts = response.data.filter(dish => dish.category === "desserts");

                setDishes({ meals, desserts });
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        }

        fetchDishes();
    },[]);

    

    return(
        <Container>

            <Header />

            <Content>
                <Banner>
                    <img src={BannerImg} alt="Imagem do banner" />
                    <div>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                <Section title="Refeições">

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={27}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="swiper-wrapper"
                    >
                        

                        {
                             dishes.meals && dishes.meals.map((dish) => {
                                return (
                                    <SwiperSlide key={String(dish.id)}>
                                        <Dish data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section>

                <Section title="Sobremesas">
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={27}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="swiper-wrapper"
                    >

                        {
                            dishes.desserts && dishes.desserts.map((dish) => {
                                return (
                                    <SwiperSlide key={String(dish.id)}>
                                        <Dish data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section>

                {/* <Section title="Drinks">
                    <Swiper 
                        slidesPerView={4}
                        spaceBetween={27}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="swiper-wrapper"
                    >

                        {
                            dishes.drinks && dishes.drinks.map((dish) => {
                                return (
                                    <SwiperSlide key={String(dish.id)}>
                                        <Dish data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section> */}


            </Content>

            <Footer />

        </Container>
    )
}