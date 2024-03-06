import { Container } from "./styles";

export function InputSignIn({ icon: Icon, ...rest}) {
    return(
        <Container>
            {Icon && <Icon size={24} />}
            <input {...rest} />
        </Container>
    )
}