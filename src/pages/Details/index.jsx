import { Container, Content } from "./styles";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonExit } from "../../components/ButtonExit";
import { Tag } from '../../components/Tag'; 

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export function Details() {
    const [data, setData] = useState("");

    const params = useParams();

    const avatarUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDish();
    }, []); 

    return (
        <Container>
            <Header />
            
            <Content>
                <ButtonExit />
                
                {
                    data &&
                    <main>
                        <img 
                            src={avatarUrl} 
                            alt={data.title}
                        />

                        <div>
                            <h1>{data.title}</h1>
                            <p>{data.description}</p>

                            {
                                data.ingredients &&
                                <section>
                                    {
                                        data.ingredients.map(ingredient => (
                                            <Tag
                                                key={String(ingredient.id)}
                                                title={ingredient.name} 
                                            />
                                        ))
                                    }
                                </section>
                            }

                            <section className="btnsScore">
                                <button id="btnScore"><FaMinus /></button>
                                <span>01</span>
                                <button id="btnScore"><FaPlus /></button>
                                <button id="btnAdd">incluir ∙ R$ 25,00</button>
                            </section>
                        </div>
                    </main>
                }
            </Content>

            <Footer />
        </Container>
    );
}
