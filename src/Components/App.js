import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from "react"
import Login from "./Tela Login/Login"
import Cadastro from "./Tela Cadastro/Cadastro"
import Habitos from "./Tela Habitos/Habitos"
import Hoje from "./Tela Hoje/Hoje"
import Historico from "./Tela Historico/Historico"
import UserContext from "./Tela Login/UserContext"

export default function App(){
    /* escrever o codigo aqui */
    const [userInfo, setUserInfo] = useState([]);

    return (
        <>
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/habitos" element={<Habitos />} />
                        <Route path="/hoje" element={<Hoje />} />
                        <Route path="/historico" element={<Historico />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
        </>
    )
}