import React from 'react';
import Home from './components/Home';
import Produto from './components/Produto';
import MainRoutes from './routes/MainRoutes';
import Menu from './components/Menu'

export default function App() {
  return (
    <div>
      <Menu />
      <h1>Controle de acesso</h1>
      <MainRoutes />
    </div>
  )
}
 
/**const carro = {
    "modelo" : "Corsa",
    "cor" : "grafite",
    "placa" : "GGG7432"
  }

  sessionStorage.setItem("nome", "Luisa")
  sessionStorage.setItem("carroObj", JSON.stringify(carro)) */
