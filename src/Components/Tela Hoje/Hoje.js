import React from 'react'
import styled from 'styled-components'
import Cabecalho from "../Cabecalho"
import Rodape from '../Rodape'
import {useState} from 'react'
import lixeira from "../../media/lixeira.svg"

export default function Hoje(){
    
    return (
        <>
            <Cabecalho/>
                <ConteudoNavegador>
                    <ConteudoTela>
                        <TituloConteudo>
                            <h1>Segunda, 17/05</h1>
                            <h2>67% dos hábitos concluídos</h2>
                        </TituloConteudo>
                        <Habito>
                            <h2>Ler 1 capítulo de livro</h2>
                            <LinhaDias>
                                <Dia>D</Dia>
                                <DiaSelecionado>S</DiaSelecionado>
                                <Dia>T</Dia>
                                <Dia>Q</Dia>
                                <DiaSelecionado>Q</DiaSelecionado>
                                <Dia>S</Dia>
                                <Dia>S</Dia>
                            </LinhaDias>
                            <img src={lixeira}/>
                        </Habito>
                    </ConteudoTela>
                </ConteudoNavegador>
            <Rodape/>
        </>
        
    )
}

const ConteudoNavegador = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 70px 0;
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    `;

const ConteudoTela = styled.div`
    width: 375px;
    height: 100%;
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const TituloConteudo = styled.div`
    height: 77px;
    width: 100%;
    color: #126BA5;
    font-size: 23px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 18px;

    h1{
        color: #126BA5;
        font-size: 23px;
        margin-top: 28px;
    }

    h2{
        color: #8FC549;
        font-size: 18px;
    }
    `;

const Habito = styled.div`
    background: #FFFFFF;
    width: 340px;
    height: 90px;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;

    input{
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        padding-left: 10px;
        font-size: 20px;
        margin: 19px 19px 8px 19px;
        border-radius: 5px;
    }

    img{
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    h2{
        margin: 15px 0 10px 15px;
        font-size: 20px;
        color: #666666;
    }
`

const LinhaDias = styled.div`
    display: flex;
    margin-left: 15px;

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
    font-size: 20px;
`;

const DiaSelecionado = styled.div`
    background-color: #D4D4D4;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
    margin-right: 4px;
    cursor: pointer;
    font-size: 20px;
`;