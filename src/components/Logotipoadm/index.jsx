import { Container } from "./styles";

import logoSvg from '../../assets/Logotipo.svg';
import { useNavigate } from "react-router-dom";



export function Logotipoadm() {
    const navigate = useNavigate();

    function handleHome() {
        navigate("/")
    }

    return(
        <Container onClick={handleHome}>
            <div>
                <img src={logoSvg} alt="" />
                <h1>food explorer</h1>
            </div>
                <p>admin</p>
        </Container>
    )
}