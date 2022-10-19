import React from 'react'

export default function Produto() {

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
