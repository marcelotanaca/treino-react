import React from "react";
import styled from "styled-components";
import logo from "../../Img/logo.png";


const StyledHeader = styled.nav `
  background-color: #cccccc;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 43vh;
  align-items: center;
`
const Logo = styled.img`
  height: 225px;
  width: 225px;  
`

const BtnCabecalho = styled.a`
  text-align: center;
 // border-radius: 3px;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 700;
  color: #000;
  text-decoration:none;
//  border: 2px solid white;
 
`

const Cabecalho = () => {
    return (
      <StyledHeader>
        <Logo src={logo} alt="Logo Duas Rodas" />
        <div>
          <BtnCabecalho primary href="../../Components/Cabecalho">HOME</BtnCabecalho>
          <BtnCabecalho href=" ">PRODUTOS</BtnCabecalho>
          <BtnCabecalho href=" ">CONTATO</BtnCabecalho>
        </div>
      </StyledHeader>
      
    );
  };
  
  export default Cabecalho;
  