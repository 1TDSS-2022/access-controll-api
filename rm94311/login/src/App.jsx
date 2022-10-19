import React from 'react';
import Home from './components/Home';
import Produto from './components/Produto';

export default function src() {

    const carro = {
        modelo : "fusca",
        cor: "azul",
        placa: "abc123"
    }

    sessionStorage.setItem("nome","Marcos")
    sessionStorage.setItem("carroItem",JSON.stringify(carro))


  return (
    <div>
        <h1>Controle de acesso</h1>

        <Home/>
        <Produto/>
    </div>
  )
}
