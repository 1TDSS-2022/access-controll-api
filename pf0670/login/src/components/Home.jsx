import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

export default function Home() {
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div>
      <h1>HOME</h1>

      <p>Bem vindo : {usuario}</p>
    </div>
  );
}
