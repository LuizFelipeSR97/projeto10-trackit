import React from 'react'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function Rodape(){
    const percentage = 65;
    return (
        <RodapeNavegador>
            <RodapeTela>
                <Link to={"/habitos"}><p>Hábitos</p></Link>
                <Link to={"/hoje"}><IconeHoje>
                    <CircularProgressbar
                        value={percentage}
                        text='Hoje'
                        styles={buildStyles({
                            rotation: 0,
                            strokeLinecap: 'round',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `#FFFFFF`,
                            textColor: '#FFFFFF',
                            textSize: '22px',
                            trailColor: '#52B6FF',
                            backgroundColor: '#3e98c7',
                        })}
                    />;
                </IconeHoje></Link>
                <Link to={"/historico"}><p>Histórico</p></Link>
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
    position: relative;

    a:-webkit-any-link {
        text-decoration: none;
        color: inherit;
    }

    p{
        padding-right: 18px;
        padding-left: 18px;
    }
`;

const Perfil = styled.img`
    background-color: red;
    height: 51px;
    width: 51px;
    border-radius: 25px;
    `;

const IconeHoje = styled.div`
background-color: #52B6FF;
width: 75px;
height: 75px;
border-radius: 60px;
padding: 6px;
margin-bottom: 50px;
`