import React from 'react'
import { useEffect } from "react";

export default function Produto() {

  const usuario = sessionStorage.getItem("usuario-validado")

  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

    const carro = JSON.parse(sessionStorage.getItem("carroObj"))

  return (
    <div>
        <h2>Produto</h2>
        <p>{carro.modelo}</p>
        <p>{carro.cor}</p>
        <p>{carro.placa}</p>
    </div>
  )
}
