import {useContext, useState, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../media/logo.svg";
import UserContext from './UserContext';

export default function Login(){

    const navigate = useNavigate();
    const {userInfo, setUserInfo} = useContext(UserContext)
    
    function enviarFormulario(e){
        e.preventDefault();
        const obj = {email: e.target.email.value, password: e.target.senha.value};

        const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',obj);
        request.then(resp=>tratarSucesso(resp.data));
        request.catch(()=>alert('Login e/ou senha estão errados. Por favor, digite valores válidos.'));
        // request.catch(()=>tratarErro(erro));
        //Colocar cinza nos botoes e a imagem de carregando
    }

    function tratarSucesso(obj){
        console.log(obj)
        setUserInfo([obj])
        navigate("/hoje")
    }

    return (
        <Pagina>
            <Tela> 
                <Logo src={logo} />
                <Formulario onSubmit={enviarFormulario}>
                    <input placeholder="email" name="email" required/>
                    <input placeholder="senha" type="password" name="senha" required/>
                    <button >Entrar</button>
                </Formulario>
                <Link to={"/cadastro"}><p>Não tem uma conta? Cadastre-se!</p></Link>
            </Tela>
        </Pagina>
    )
}

const Pagina = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    `;

const Tela = styled.div`
    background-color: #FFFFFF;
    height: 100%;
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #52B6FF;
        margin-top: 25px;
        text-decoration-line: underline;
    }
`;

const Logo = styled.img`
    height: 180px;
    width: 180px;
    margin-top: 68px;
    margin-bottom: 32px;
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    input{
        background-color: #FFFFFF;
        width: 303px;
        height: 45px;
        margin-bottom: 6px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        padding-left: 11px;
        font-size: 20px;
    };

    input::placeholder{
        color: #DBDBDB;
    };

    button{
        background-color: #52B6FF;
        width: 100%;
        height: 45px;
        color: #FFFFFF;
        border-radius: 5px;
        border-style: none;
        font-size: 21px;
        cursor: pointer;
    }
`;