import React from 'react';
import Home from './components/Home'
import Produto from './components/Produto';

export default function App() {

    //sessionStorage.setItem("CHAVE" , "VALOR")
    
    const carro = {
        "modelo" :  "Corsa",
        "cor" : "Grafite",
        "placa" : "GGG-7432"
    }
    
    sessionStorage.setItem("nome" , "WALLISON")
    sessionStorage.setItem("carroObj",JSON.stringify(carro))




  return (
  <div>
    <h1>Controle de Acesso</h1>
    <Home/>
    <Produto/>
  </div>

)
}
