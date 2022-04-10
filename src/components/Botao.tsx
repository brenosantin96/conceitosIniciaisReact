import React, {useState} from "react";

type Props = {
    text : string,
    clickFn: (frase: string) => void;
}

export const Botao = (props : Props) => {

    const handleClick = () => {
        alert("Clicou");
    }

    return(
        <button onClick={handleClick}>{props.text}</button>
    )
}