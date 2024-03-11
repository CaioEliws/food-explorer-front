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

    const handleSearch = (value) => {
        setSearch(value);
    }

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
                                        <DishAdm data={dish} />
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
                                        <DishAdm data={dish} />
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
                                        <DishAdm data={dish} />
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
{/* <div className="content">

    <img src="" alt="" />
    <h1>Spaguetti Gambe</h1>
    <p>Massa fresca com camarões e pesto. </p>
    <h2>R$ 79,97</h2>
    <div className="buttons">
        <FaMinus />
        01
        <FaPlus />
        <Button title="incluir" />
    </div>
        
</div> */}