import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Produto from "./components/Produto";
import MainRoutes from "./routes/MainRoutes";

export default function App() {
  return (
    <div>
      <Menu />
      <h1>CONTROLE DE ACESSO</h1>
      <MainRoutes />
    </div>
  );
}
//sessionStorage.setItem("CHAVE","VALOR")

// const carro = {
//   modelo: "Corsa",
//   cor: "grafite",
//   placa: "GGG7432",
// };

// sessionStorage.setItem("nome", "Alê");
// sessionStorage.setItem("carroObj", JSON.stringify(carro));
