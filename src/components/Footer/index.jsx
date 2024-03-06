import { Container } from "./styles";

import logoSvg from '../../assets/Logotipofooter.svg';

export function Footer() {
    return(
    <Container>
        <div>
            <img src={logoSvg} alt="Food Explorer logotipo" />
            <h1>food explorer</h1>
        </div>

        <h2>© 2023 - Todos os direitos reservados.</h2>
    </Container>
    )
}