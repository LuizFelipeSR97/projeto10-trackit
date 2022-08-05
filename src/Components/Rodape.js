import React from 'react'
import styled from 'styled-components'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Rodape(){
    const percentage = 66;
    return (
        <RodapeNavegador>
            <RodapeTela>
                <Link to={"/habitos"}><p>Hábitos</p></Link>
                {/* <CircularProgressbar value={percentage} text={`${percentage}%` } />; */}
                <Link to={"/hoje"}><p>Hoje</p></Link>
                <p>Histórico</p>
            </RodapeTela>
        </RodapeNavegador>
        
    )
}

const RodapeNavegador = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF;
    z-index: 1;
    `;

const RodapeTela = styled.div`
    width: 375px;
    height: 100%;
    padding-left: 18px;
    padding-right: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #52B6FF;
    font-size: 18px;

    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }
`;

const Perfil = styled.img`
    background-color: red;
    height: 51px;
    width: 51px;
    border-radius: 25px;
    `;