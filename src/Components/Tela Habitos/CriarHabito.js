import {useState} from 'react'
import styled from 'styled-components'
import RenderizarHabitos from './RenderizarHabitos'

export default function CriarHabito({criarHabito, setCriarHabito}){

    function RenderizarDias(){

        const [diasDaSemana,setDiasDaSemana]=useState([{dia: "D", selecionado: false},{dia: "S", selecionado: false},{dia: "T", selecionado: false},{dia: "Q", selecionado: false},{dia: "Q", selecionado: false},{dia: "S", selecionado: false},{dia: "S", selecionado: false}])

        return (diasDaSemana.map(dia=> <RenderizarDia diaNome={dia.dia}/>))
    }

    function RenderizarDia({diaNome, diasDaSemana, setDiasDaSemana}){

        const [diaSelecionado,setDiaSelecionado]=useState(false)

        if (diaSelecionado){
            return <DiaSelecionado onClick={()=> setDiaSelecionado(!diaSelecionado)}>{diaNome}</DiaSelecionado>
        } else  {
            return <Dia onClick={()=> setDiaSelecionado(!diaSelecionado)}>{diaNome}</Dia>
        }
    }
    
    if (criarHabito===true){
        return (
            <>
                <CardCriarHabito>
                        <input placeholder="nome do hábito"/>
                    <LinhaDias>
                        <RenderizarDias/>
                    </LinhaDias>
                    <LinhaAcao>
                        <p onClick={()=>setCriarHabito(!criarHabito)}>Cancelar</p>
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
    width: 100%;
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
    font-size: 20px;
    cursor: pointer;
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