import React from 'react'
import Home from './components/Home'
import Produto from './components/Produto'

export default function App() {

    //sessionStorage.setItem("CHAVE","VALOR")

    const carro = {
        "modelo" : "Corsa",
        "cor": "grafite",
        "placa" : "GGG7432"
    }


    sessionStorage.setItem("nome","Alê")
    sessionStorage.setItem("carroObj",JSON.stringify(carro))

  return (
    <div>
        <h1>CONTROLE DE ACESSO</h1>

            <Home/>
            <Produto/>    

    </div>
  )
}
