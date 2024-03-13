import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Container, Content, Banner } from "./styles";

import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { DishAdm } from '../../components/DishAdm'
import { Section } from '../../components/Section'

import BannerImg from "../../assets/BannerImg.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export function HomeAdm() {

    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState({ meals: [], desserts: [] });

    const [slidesPerView, setSlidesPerView] = useState(4);
    const [slidesSpace, setSlideSpace] = useState(27);

    const handleSearch = (value) => {
        setSearch(value);
    }

    const reziseSpace = () => {
        if (window.innerWidth <= 768) {
            setSlideSpace(50);
        } else {
            setSlideSpace(27);
        }
    }

    const reziseSlides = () => {
        if (window.innerWidth <= 768) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(4);
        }
    };

    useEffect(() => {
        reziseSlides();
      
        window.addEventListener("resize", reziseSlides);
      
        return () => {
          window.removeEventListener("resize", reziseSlides);
        };
    }, []);

    useEffect(() => {
        reziseSpace();
      
        window.addEventListener("resize", reziseSpace);
      
        return () => {
          window.removeEventListener("resize", reziseSpace);
        };
    }, []);

    useEffect(() => {
        async function fetchDishes() {
            try {
                const response = await api.get(`/dishes?title=${search}`);

                const meals = response.data.filter(dish => dish.category === "meals");
                const desserts = response.data.filter(dish => dish.category === "desserts");
                const drinks = response.data.filter(dish => dish.category === "drinks");

                setDishes({ meals, desserts, drinks });
            } catch (error) {
                console.error("Erro ao carregar pratos:", error.message);
            }
        }

        fetchDishes();
    },[search]);
    

    return(
        <Container>

            <HeaderAdmin onSearch={handleSearch} />

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
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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
                                        <DishAdm data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section>

                <Section title="Sobremesas">
                    <Swiper 
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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
                                        <DishAdm data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section>

                <Section title="Drinks">
                    <Swiper 
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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
                                        <DishAdm data={dish} />
                                    </SwiperSlide>
                                );
                            })
                        }

                    </Swiper>
                </Section>


            </Content>

            <Footer />

        </Container>
    )
}