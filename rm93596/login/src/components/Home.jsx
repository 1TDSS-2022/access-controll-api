import React from "react";

export default function Home(){
    return(
        <div>
            <h1>HOME</h1>

            <p>{sessionStorage.getItem("nome")}</p>
        </div>
    )
}