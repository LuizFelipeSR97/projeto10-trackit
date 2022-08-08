import styled from 'styled-components';
import axios from "axios";
import lixeira from "../../media/lixeira.svg";
import {useState, useEffect} from 'react';

const habitosAPI=[
	{
		id: 1,
		name: "Ler 1 capítulo de livro",
		days: [1, 3, 5]
	},
	{
		id: 2,
		name: "Ler 2 capítulos de livro",
		days: [0, 1, 4]
	},
	{
		id: 3,
		name: "Ler 3 capítulos de livro",
		days: [2, 4, 6]
	}
]

export default function RenderizarHabitos({userInfo, loadPage}){

    const [habitos, setHabitos] = useState(null);

    useEffect(() => {
        console.log("api")
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",{headers: {"Authorization": `Bearer ${userInfo[0].token}`}});
        request.then(resp => {
            setHabitos(resp.data);
            loadPage=false;
        });
    },[loadPage]);

    function RenderizarDias({arrayDias}){

        const diasDaSemana=[{dia: "D", selecionado: false},{dia: "S", selecionado: false},{dia: "T", selecionado: false},{dia: "Q", selecionado: false},{dia: "Q", selecionado: false},{dia: "S", selecionado: false},{dia: "S", selecionado: false}]

        for (let i=0; i<arrayDias.length; i++){
            diasDaSemana[arrayDias[i]].selecionado=true
        }

        return (diasDaSemana.map(dia=> <RenderizarDia diaEscolhido={dia.selecionado} diaNome={dia.dia}/>))
    }

    function RenderizarDia({diaEscolhido, diaNome}){

        if (diaEscolhido){
            return <DiaSelecionado >{diaNome}</DiaSelecionado>
        } else  {
            return <Dia >{diaNome}</Dia>
        }
    }

    function excluirHabito(habito){
        console.log([`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`, {headers: {"Authorization": `Bearer ${userInfo[0].token}`}}])
            const promise=axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}`, {headers: {"Authorization": `Bearer ${userInfo[0].token}`}})
            promise.catch(()=>alert("Houve um erro. Tente novamente"))
            promise.then(()=>loadPage=true)

    }

    if (habitos===null){
        return <></>;
    } else if (habitos!==null){
        return (habitos.map(habito =>
            <Habito>
                <h2>{habito.name}</h2>
                <LinhaDias>
                    <RenderizarDias arrayDias={habito.days}/>
                </LinhaDias>
                <img src={lixeira} onClick={()=>excluirHabito(habito)}/>
            </Habito>
        ))
    }
    
}

const Habito = styled.div`
    background: #FFFFFF;
    width: 100%;
    height: 90px;
    border-radius: 5px;
    margin-top: 10px;
    position: relative;
    cursor: default;

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