import React from 'react';
import Home from './components/Home';
import Produto from './components/Produto';

export default function App() {

  const carro = {
    "modelo" : "Corsa",
    "cor" : "grafite",
    "placa" : "GGG7432"
  }

  sessionStorage.setItem("nome", "Luisa")
  sessionStorage.setItem("carroObj", JSON.stringify(carro))

  return (
    <div>
      <h1>Controle de acesso</h1>
      <Home/>
      <Produto/>
    </div>
  )
}
 
