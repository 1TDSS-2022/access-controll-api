import React from "react";
import { useEffect } from "react";

const usuario = sessionStorage.getItem("usuario-validado");

export default function Produto() {
  useEffect(() => {
    if (usuario == null) {
      window.location = "/";
    }
  }, []);

  return (
    <div>
      <h1>Produto</h1>
    </div>
  );
}
