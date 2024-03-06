import { Container, Content } from './styles';


export function InputImage({ icon: Icon, id, text, ...rest }){
    return(
        <Container>
            <label htmlFor={id}>
                <Content>
                    {Icon && <Icon size={24} />}
                    <input id={id} {...rest} type="file" />
                    <p>{text}</p>
                </Content>
            </label>
        </Container>
    )
}