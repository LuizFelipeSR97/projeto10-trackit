import React from 'react'
import styled from 'styled-components'

const usuario={
    "id": 3,
    "name": "Joe",
    "image": "https://cdn.pensador.com/img/authors/bo/be/bob-esponja-l.jpg",
    "email": "joe@respondeai.com.br",
    "password": "123456",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjIxMjg0NzExfQ.b8e3bYm7TnU5p6pfrCPPbzboax6gvh_gGNFR4T51FxY"
}

export default function Cabecalho({userInfo, setUserInfo}){

    console.log(userInfo[0].image)

    return (
        <CabecalhoNavegador>
            <CabecalhoTela>
                <p>TrackIt</p>
                <Perfil src={userInfo[0].image}/>
            </CabecalhoTela>
        </CabecalhoNavegador>        
    )
}

const CabecalhoNavegador = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 1;
    `;

const CabecalhoTela = styled.div`
    width: 375px;
    height: 100%;
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    font-family: 'Playball', cursive;
    font-size: 39px;
    `;

const Perfil = styled.img`
    background-color: red;
    height: 51px;
    width: 51px;
    border-radius: 25px;
    `;