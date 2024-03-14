import { Container } from "./styles";

export function Input({ icon: Icon, children, ...rest}) {
    return(
        <Container>
            {Icon && <Icon size={24} />}
            <input {...rest} />
            {children}
        </Container>
    )
}