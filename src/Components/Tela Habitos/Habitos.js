import React from 'react'
import styled from 'styled-components'
import Cabecalho from "../Cabecalho"
import Rodape from '../Rodape'
import CriarHabito from './CriarHabito'
import RenderizarHabitos from './RenderizarHabitos'
import {useState,useContext} from 'react'
import UserContext from '../Tela Login/UserContext'


export default function Habitos(){

    const [criarHabito, setCriarHabito] = useState(false)
    const {userInfo, setUserInfo} = useContext(UserContext)
    let loadPage=false;
    
    return (
        <>
            <Cabecalho userInfo={userInfo} setUserInfo={setUserInfo}/>
                <ConteudoNavegador>
                    <ConteudoTela>
                        <TituloConteudo>
                            Meus hábitos
                            <button onClick={()=>setCriarHabito(true)}>+</button>
                        </TituloConteudo>
                        <CriarHabito userInfo={userInfo} criarHabito={criarHabito} setCriarHabito={setCriarHabito} loadPage={loadPage}/>
                        <RenderizarHabitos userInfo={userInfo} loadPage={loadPage}/>
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
    height: 10000px;
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