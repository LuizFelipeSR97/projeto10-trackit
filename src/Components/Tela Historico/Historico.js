import React from 'react'
import styled from 'styled-components'
import Cabecalho from "../Cabecalho"
import Rodape from '../Rodape'

export default function Historico(){
    
    return (
        <>
            <Cabecalho/>
                <ConteudoNavegador>
                    <ConteudoTela>
                        <TituloConteudo>
                            <h1>Histórico</h1>
                            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
                        </TituloConteudo>
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
        color: #666666;
        font-size: 18px;
        margin-top: 15px;
    }
    `;