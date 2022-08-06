import styled from 'styled-components'
import lixeira from "../../media/lixeira.svg"
import {useState} from 'react'
import check from "../../media/check.svg"

export default function RenderizarHabitosHoje({habitosHojeAPI}){

    function RenderizarHabitosIndividual({habito}){

        const [selecionado, setSelecionado]=useState(habito.done)

        if (selecionado){
        return (<Habito >
            <h1>{habito.name}</h1>
            <h2>Sequência atual: {habito.currentSequence} dias
            Seu recorde: {habito.highestSequence} dias</h2>
            <CheckFinalizado onClick={()=>setSelecionado(!selecionado)}>
                <img src={check}/>
            </CheckFinalizado>
        </Habito>)
        } else {
            return ( 
        <Habito>
            <h1>{habito.name}</h1>
            <h2>Sequência atual: {habito.currentSequence} dias
            Seu recorde: {habito.highestSequence} dias</h2>
            <Check onClick={()=>setSelecionado(!selecionado)}>
                <img src={check}/>
            </Check>
        </Habito>
            )}
    }


    return (habitosHojeAPI.map(habito => <RenderizarHabitosIndividual habito={habito}/>))
}



const Habito = styled.div`
    background: #FFFFFF;
    width: 100%;
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

    h1{
        margin: 15px 0 10px 15px;
        font-size: 20px;
        color: #666666;
    }

    h2{
        margin: 0 0 15px 15px;
        font-size: 13px;
        color: #666666;
        width: 140px;
    }
`

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
    font-size: 20px;
`;

const Check = styled.div`
    background-color: #EBEBEB;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 70px;
    width: 70px;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
`;

const CheckFinalizado = styled.div`
    background-color: #8FC549;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0px;
    right: 0px;
    height: 70px;
    width: 70px;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
`;