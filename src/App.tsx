import React, {useState} from 'react'
import {Botao} from './components/Botao';

const App = () => {


  let textoDoBotao: string = 'Clique aqui no botão'

  const botaoEventAction = (frase : string) => {
    alert("Frase que está rodando aqui no APP: " + frase);
  }

  return (
    <div>
      <Botao text={textoDoBotao} clickFn={botaoEventAction} ></Botao>
    </div>
  )
}

export default App;