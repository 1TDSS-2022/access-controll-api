import React from "react";
import Home from "./components/Home";
import Produto from "./components/Produto";


export default function App(){

   // sessionStorage.setItem("nome","Duda")

   const carro = {
    "modelo": "Corsa",
    "cor": "grafite",
    "placa": "BOL-2222"
   }

   sessionStorage.setItem("nome", "Duda")
   sessionStorage.setItem("carroobj", JSON.stringify(carro))

    return(
        <div>
            <h1>CONTROLE DE ACESSO</h1>

            <Home/>
            <Produto/>
        </div>
    )
}