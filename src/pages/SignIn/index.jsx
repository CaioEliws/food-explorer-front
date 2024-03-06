import { useState } from "react";
import { Container, Content } from "./styles"
import { Link } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";

import { Button } from "../../components/Button";
import { InputSignIn } from "../../components/InputSignIn";

import logoSvg from '../../assets/logo.svg';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({email, password});
    }

    return(
        <Container>
            <div id="logo">
                <img src={logoSvg} alt="" />
                <h1>food explorer</h1>
            </div>

            <Content>
                <h1>Faça Login</h1>

                <section>
                    <h2>Email</h2>
                    <InputSignIn 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        onChange={e => setEmail(e.target.value)} 
                    />
                </section>

                <section>
                    <h2>Senha</h2>
                    <InputSignIn 
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        onChange={e => setPassword(e.target.value)}  
                    />
                </section>

                <Button 
                    children="Entrar" 
                    onClick={handleSignIn} 
                />
                    
                <Link to="/register">
                    Criar uma conta
                </Link>

            </Content>
        </Container>
    )
}