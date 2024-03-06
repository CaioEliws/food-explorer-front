import { Container } from "./styles";

import { Link } from 'react-router-dom';

import { IoIosArrowForward } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

import { api } from "../../services/api";

export function Dish({ data, ...rest}) {
    const avatarUrl = data.image && `${api.defaults.baseURL}/files/${data.image}`;

    return(
        <Container {...rest}>
            <button className="btnFavorite"><IoMdHeartEmpty /></button>

            <img
                src={avatarUrl}
                alt={data.title}
            />


            <Link to={`/details/${data.id}`}> {data.title} <IoIosArrowForward /></Link>

            <p> 
                {data.description.length > 50 ? `${data.description.slice(0, 100)}...` : data.description}
            </p>

            <h2>R${data.price}</h2>

            <div className="btnScore">
                <button id="btnMinus"><FaMinus /></button>
                <span>01</span>
                <button id="btnPlus"><FaPlus /></button>
                <button id="btnAdd">Incluir</button>
            </div>
                    
        </Container>
    )
}