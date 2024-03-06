import { useState } from "react";
import { Container, Form } from "./styles"
import { Link, Navigate, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import logoSvg from '../../assets/logo.svg';

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar")
            }
        })

    }

    return(
        <Container>
            <div id="logo">
                <img src={logoSvg} alt="" />
                <h1>food explorer</h1>
            </div>

            <Form>
                <h1>Criar sua conta</h1>

                <section>
                    <h2>Seu nome</h2>
                    <Input 
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                        onChange={e => setName(e.target.value)} 
                    />
                </section>

                <section>
                    <h2>Email</h2>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        onChange={e => setEmail(e.target.value)}  
                    />
                </section>

                <section>
                    <h2>Senha</h2>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="password" 
                        onChange={e => setPassword(e.target.value)} 
                    />
                </section>

                <Button 
                    children="Criar conta"
                    onClick={handleSignUp} 
                />
                    
                <Link to="/">
                    Voltar para o login
                </Link>
                
            </Form>
        </Container>
    )
}