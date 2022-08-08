import {useState} from 'react';
import axios from "axios";
import styled from 'styled-components';

export default function CriarHabito({criarHabito, setCriarHabito, userInfo, loadPage}){

    const [diasDaSemana,setDiasDaSemana]=useState([{index: 0, dia: "D", selecionado: false},{index: 1, dia: "S", selecionado: false},{index: 2, dia: "T", selecionado: false},{index: 3, dia: "Q", selecionado: false},{index: 4, dia: "Q", selecionado: false},{index: 5, dia: "S", selecionado: false},{index: 6, dia: "S", selecionado: false}])

    function RenderizarDias({diasDaSemana, setDiasDaSemana}){

        return (diasDaSemana.map(dia=> <RenderizarDia dia={dia} diasDaSemana={diasDaSemana} setDiasDaSemana={setDiasDaSemana}/>))
    }

    function RenderizarDia({diasDaSemana, dia}){

        const [diaSelecionado,setDiaSelecionado]=useState(false)

        if (diaSelecionado){
            dia.selecionado=true;
            return <DiaSelecionado onClick={()=> setDiaSelecionado(!diaSelecionado)}>{dia.dia}</DiaSelecionado>
        } else  {
            dia.selecionado=false;
            return <Dia onClick={()=> setDiaSelecionado(!diaSelecionado)}>{dia.dia}</Dia>
        }

    }

    function enviarHabito(diasDaSemana, nomeHabito, loadPage){

        const diasEscolhidos=[]
        diasDaSemana.map(dias => (dias.selecionado) ? diasEscolhidos.push(dias.index) : null)

        //fazer o post do criar habito
        if (!diasDaSemana[0].selecionado && !diasDaSemana[1].selecionado && !diasDaSemana[2].selecionado && !diasDaSemana[3].selecionado && !diasDaSemana[4].selecionado && !diasDaSemana[5].selecionado && !diasDaSemana[6].selecionado){
            alert("Você não selecionou nenhum dia para o seu hábito.")
        } else {
            const body={name: nomeHabito, days: diasEscolhidos}
            const config = {headers: {"Authorization": `Bearer ${userInfo[0].token}`}}
            const promise=axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config)
            promise.catch(()=>alert("Houve um erro. Tente novamente"))
            promise.then(()=>{setCriarHabito(false);loadPage=true;document.location.reload=true})
        }
    }
    
    if (criarHabito===true){
        let nomeHabito=""

        return (
            <>
                <CardCriarHabito>
                        <input placeholder="nome do hábito" required onChange={e=>nomeHabito=e.target.value}/>
                    <LinhaDias>
                        <RenderizarDias diasDaSemana={diasDaSemana} setDiasDaSemana={setDiasDaSemana}/>
                    </LinhaDias>
                    <LinhaAcao>
                        <p onClick={()=>setCriarHabito(false)}>Cancelar</p>
                        <button onClick={()=>enviarHabito(diasDaSemana,nomeHabito)}>Salvar</button>
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