import { Container } from "./styles";

export function SectionTwo({ title, children }){
    return (
        <Container>
            <h2>{title}</h2>
            <div>
                {children}
            </div>     
        </Container>
    );
}