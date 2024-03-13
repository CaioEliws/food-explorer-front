import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import { api } from "../../services/api";

export function DishAdm({ data, ...rest}) {
    const avatarUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    const MobileScreen = window.innerWidth > 768;

    return(
        <Container {...rest}>
            <Link 
                to={`/edit/${data.id}`}
                className="btnFavorite">
                    <GoPencil />
            </Link>

            <img
                src={avatarUrl}
                alt="Dish Image"
            />


            <Link 
                to={`/details/${data.id}`}
            >
                {data.title} <IoIosArrowForward
            />
            </Link>

            {
                MobileScreen && ( 
                <p> 
                    {data.description.length > 50 ? `${data.description.slice(0,    100)}...` : data.description} 
                </p>
            )}

            <h2>R${data.price}</h2>

                    
        </Container>
    )
}