import { Container, Content } from "./styles";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { ButtonExit } from "../../components/ButtonExit";
import { Tag } from '../../components/Tag'; 

import { Link } from "react-router-dom";


export function DetailsAdm() {

    const [data, setData] = useState("");

    const params = useParams();

    const avatarUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    useEffect(() => {
        async function fetchDishAdm() {
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
        }

        fetchDishAdm();
    }, []);

    return (
        <Container>
            <HeaderAdmin />
            
            <Content>
                <header>
                    <ButtonExit />
                </header>
                
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

                            <Link 
                                to={`/edit/${data.id}`}
                                id="btnEdit"
                            > 
                                Editar prato 
                            </Link>
                        </div>
                    </main>
                }
            </Content>

            <Footer />
        </Container>
    );
}
