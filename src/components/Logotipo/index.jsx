import { Container } from "./styles";

import logoSvg from '../../assets/Logotipo.svg';

export function Logotipo() {
    return(
        <Container>
                <img src={logoSvg} alt="" />
                <h1>food explorer</h1>
        </Container>
    )
}