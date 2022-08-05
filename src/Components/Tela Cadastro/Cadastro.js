import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import logo from "../../media/logo.svg"

export default function Cadastro(){
    
    function enviarFormulario(e){
        e.preventDefault();
        alert("oi");
    }

    return (
        <Pagina>
            <Tela> 
                <Logo src={logo} />
                <Formulario onSubmit={enviarFormulario}>
                    <input placeholder="email" type="email" name="email" required/>
                    <input placeholder="senha" name="senha" required/>
                    <input placeholder="nome" name="nome" required/>
                    <input placeholder="foto" name="foto" required/>
                    {/* <input placeholder="foto" type="file" name="foto" required/> */}
                    <button >Entrar</button>
                </Formulario>
                <Link to={"/"}><p>Já tem uma conta? Faça login!</p></Link>
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
        width: 303px;
        height: 45px;
        color: #FFFFFF;
        border-radius: 5px;
        border-style: none;
        font-size: 21px;
        cursor: pointer;
    }
`;