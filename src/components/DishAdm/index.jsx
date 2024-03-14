import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { GoPencil } from "react-icons/go";

import { api } from "../../services/api";

export function DishAdm({ data, ...rest}) {
    const dishUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    const MobileScreen = window.innerWidth > 768;

    const formatPrice = (price) => {
        if (isNaN(price)) return '';
        return price.toString().replace('.', ',');
    };

    return(
        <Container {...rest}>
            <Link 
                to={`/edit/${data.id}`}
                className="btnFavorite">
                    <GoPencil />
            </Link>

            <img
                src={dishUrl}
                alt="Dish Image"
            />


            <Link 
                to={`/details/${data.id}`}
                className="title"
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

            <h2>R${formatPrice(data.price)}</h2> 
        </Container>
    )
}