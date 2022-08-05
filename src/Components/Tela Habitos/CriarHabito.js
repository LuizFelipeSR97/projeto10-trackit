import {useState} from 'react'
import styled from 'styled-components'

export default function CriarHabito({criarHabito, setCriarHabito}){
    
    if (criarHabito===true){
        return (
            <>
                <CardCriarHabito>
                        <input placeholder="nome do hábito"/>
                    <LinhaDias>
                        <Dia>D</Dia>
                        <Dia>S</Dia>
                        <Dia>T</Dia>
                        <Dia>Q</Dia>
                        <Dia>Q</Dia>
                        <Dia>S</Dia>
                        <Dia>S</Dia>
                    </LinhaDias>
                    <LinhaAcao>
                        <p>Cancelar</p>
                        <button>Salvar</button>
                    </LinhaAcao>
                </CardCriarHabito>
            </>
        )
    } 
    else {
        return (
            <>
            </>
        )
    } 
}

const CardCriarHabito = styled.div`
    background: #FFFFFF;
    width: 340px;
    height: 180px;
    border-radius: 5px;

    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        padding-left: 10px;
        font-size: 20px;
        margin: 19px 19px 8px 19px;
        border-radius: 5px;
    }

    input::placeholder{
        color: #D4D4D4;
    }
    p{
        cursor: pointer;
    }
`

const LinhaDias = styled.div`
    display: flex;
    margin-left: 19px;

`;

const Dia = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #D4D4D4;
    color: #D4D4D4;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin-right: 4px;
    cursor: pointer;

`;

const LinhaAcao = styled.div`
    margin-top: 30px;
    margin-right: 16px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #52B6FF;
    button{
        height: 35px;
        width: 84px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 23px;
    }
`