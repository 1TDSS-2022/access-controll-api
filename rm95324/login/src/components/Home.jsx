import React from "react";

export default function Home() {
    
  const nome = sessionStorage.getItem("nome");

  return (
    <div>
      <h2>Home</h2>
      <p>{nome}</p>
    </div>
  );
}
