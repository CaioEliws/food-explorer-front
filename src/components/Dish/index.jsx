import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { api } from "../../services/api";

export function Dish({ data, ...rest}) {
    const avatarUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    const MobileScreen = window.innerWidth > 768;

    const formatPrice = (price) => {
        if (isNaN(price)) return '';
        return price.toString().replace('.', ',');
    };

    return(
        <Container {...rest}>
            <button className="btnFavorite"><IoMdHeartEmpty /></button>

            <img
                src={avatarUrl}
                alt={data.title}
            />


            <Link 
                to={`/details/${data.id}`}
                className="title"
            > 
                {data.title} <IoIosArrowForward />
            </Link>

            {
                MobileScreen && ( 
                <p> 
                    {data.description.length > 50 ? `${data.description.slice(0,    100)}...` : data.description} 
                </p>
            )}

            <h2>R${formatPrice(data.price)}</h2> 

            <div className="btnScore">
                <section>
                    <button id="btnMinus"><FaMinus /></button>
                    <span>01</span>
                    <button id="btnPlus"><FaPlus /></button>
                </section>
                <button id="btnAdd">Incluir</button>
            </div>
                    
        </Container>
    )
}