import React from 'react'

export default function Produto() {

    const c = JSON.parse(sessionStorage.getItem("carroObj"))
   
  return (
    <div>
        <h1>Produto</h1>
        <p>{c.modelo}</p>
        <p>{c.cor}</p>
        <p>{c.placa}</p>

    </div>
  )
}
