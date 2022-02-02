import React from 'react';
import imagem from "../Img/logo.png"
import "../css/404.css"

const Pagina404 = () => {
  return(
    <main className="container flex flex--centro flex--coluna">
      <img className='imagem404' src={imagem} alt="ilustração Doguito" />
      <p className='naoencontrado-texto' >
        Ops, essa pagina não existe!
      </p>
    </main>
  )

}  

export default Pagina404