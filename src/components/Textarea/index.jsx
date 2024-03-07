import { Container } from "./styles";

export function Textarea({ children, ...rest }) {
    return(
        <Container {...rest}>
            {children}
        </Container>
    )
}