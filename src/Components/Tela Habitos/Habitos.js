import React from 'react'
import styled from 'styled-components'
import Cabecalho from "../Cabecalho"
import Rodape from '../Rodape'
import CriarHabito from './CriarHabito'
import {useState} from 'react'
import lixeira from "../../media/lixeira.svg"

export default function Habitos(){

    const [criarHabito, setCriarHabito] = useState(false)

    function criacaoHabito(criarHabito, setCriarHabito){
        if (criarHabito===false){
            setCriarHabito(true)
        }
    }
    
    return (
        <>
            <Cabecalho/>
                <ConteudoNavegador>
                    <ConteudoTela>
                        <TituloConteudo>
                            Meus hábitos
                            <button onClick={()=>criacaoHabito(criarHabito,setCriarHabito)}>+</button>
                        </TituloConteudo>
                        <CriarHabito criarHabito={criarHabito} setCriarHabito={setCriarHabito}/>
                        {/* <RenderizarHabito /> */}
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
    h1{
        color: #666666;
        font-size: 18px;
        margin-top: 30px;
    }
    `;

const TituloConteudo = styled.div`
    height: 77px;
    width: 100%;
    color: #126BA5;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        height: 35px;
        width: 40px;
        background-color: #52B6FF;
        color: #FFFFFF;
        border: none;
        border-radius: 5px;
        font-size: 27px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
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
`;