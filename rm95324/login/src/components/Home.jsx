import React from "react";
import { useEffect } from "react";

export default function Home() {

  const usuario = sessionStorage.getItem("usuario-validado")

  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>Bem vindo: {usuario}</p>
    </div>
  );
}
