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

    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState({ meals: [], desserts: [] });

    const [searchResults, setSearchResults] = useState([]);

    const [slidesPerView, setSlidesPerView] = useState(4);
    const [slidesSpace, setSlideSpace] = useState(27);

    const [noResults, setNoResults] = useState(false);

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

                const mealsResults = meals.length > 0;
                const dessertsResults = desserts.length > 0;
                const drinksResults = drinks.length > 0;

                setNoResults({ meals: !mealsResults, desserts: !dessertsResults, drinks: !drinksResults });

                setSearchResults(response.data);
            } catch (error) {
                console.error("Erro ao carregar pratos:", error.message);
            }
        }

        fetchDishes();
    },[search]);

    return(
        <Container>

            <Header onSearch={handleSearch} searchResults={searchResults} />

            <Content>
                <Banner>
                    <img src={BannerImg} alt="Imagem do banner" />
                    <div>
                    <h2>Sabores inigualáveis</h2>
                    <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </Banner>

                <Section title="Refeições">
                    {noResults.meals && (
                        <h3 className="Results">Não foi possível encontrar nenhum prato!</h3>
                    )}
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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
                    {noResults.meals && (
                        <h3 className="Results">Não foi possível encontrar nenhum prato!</h3>
                    )}
                    <Swiper 
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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

                <Section title="Drinks">
                    {noResults.meals && (
                        <h3 className="Results">Não foi possível encontrar nenhum prato!</h3>
                    )}
                    <Swiper 
                        slidesPerView={slidesPerView}
                        spaceBetween={slidesSpace}
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
                </Section>


            </Content>

            <Footer />

        </Container>
    )
}