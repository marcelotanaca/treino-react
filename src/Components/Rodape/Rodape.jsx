import React from "react";
import rodape from "../../Img/logo rodape.png";
import {Rodape, RodapeImg, Copyright } from "./styles";

function Rodapea() {
  return (
    <>
    <Rodape>
        <RodapeImg src={rodape} alt="logo rodape" />
        <Copyright>&copy; Copyright Duas Rodas Moto Peças - 2021</Copyright>
      </Rodape>
    </>
  );
}

export default Rodapea;