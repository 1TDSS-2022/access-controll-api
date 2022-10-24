import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  return (
    <header>
      <Link to="/home">Home</Link> | <Link to="/produto">Produto</Link> |{" "}
      <Link to="/">Login</Link> |{" "}
      <span>[{sessionStorage.getItem("usuario-validado")}]</span>
      <button onClick={logout}>Logout</button>
    </header>
  );
}