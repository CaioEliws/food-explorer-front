import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import { IoIosArrowBack } from "react-icons/io";

export function ButtonExit() {

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(-1);
    }

    return(
        <Container 
            to="/"
            onClick={handleNavigate}
        >
            <IoIosArrowBack />
            Voltar
        </Container>
    )
}