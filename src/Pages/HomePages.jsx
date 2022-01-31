import React from 'react';
import styled from "styled-components";
import moto from "../Img/moto.jpg";

const Moto = styled.img` 
  width: 100%;  
`
const Texto1 = styled.h2 `
  text-shadow: 10px 10px 10px #000000;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  margin-top: 30px;
`
function HomePages () {
  return (
    <>
      <Moto src={moto} alt="Imagem moto" />
      <Texto1>A SUA OFICINA DE MOTOS EM SÃO VICENTE</Texto1>
    </>
  );
}

export default HomePages;