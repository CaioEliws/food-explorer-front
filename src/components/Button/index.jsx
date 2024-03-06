import { Container } from "./styles";

export function Button({ children, loading = false, icon: Icon, ...rest }) {
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {Icon && <Icon size={24} />}
            { loading ? 'Carregando...' : children}
        </Container>
    )
}