import React from "react";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState({
    login: "",
    senha: "",
  });

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const logar = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(usuario),
    };

    const response = await fetch(
      "http://localhost:8080/ControleAcesso/rest/login/",
      requestOptions
    );

    const data = await response.json();
  };

  return (
    <div>
      <h2>LOGIN DE USUÁRIOS</h2>
      <div>
        <form onSubmit="">
          <fieldset>
            <legend>LOGIN</legend>
            <div>
              <label htmlFor="idLogin">Usuário</label>
              <input
                type="text"
                name="login"
                id="idLogin"
                placeholder="Usuário"
                value={usuario.login}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Senha"
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Logar</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
