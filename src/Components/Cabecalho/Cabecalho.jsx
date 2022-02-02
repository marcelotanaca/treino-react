import React from "react";
import logo from "../../Img/logo.png";
import { StyledHeader, Logo, BtnCabecalho } from "./styles";
import { Link } from "react-router-dom";

const Cabecalho = () => {
  return (
    <StyledHeader>
      <Logo src={logo} alt="Logo Duas Rodas" />
      <BtnCabecalho href=" "><Link to="/"></Link>HOME</BtnCabecalho>
      <BtnCabecalho href=" "><Link to="/produtos"></Link>PRODUTOS</BtnCabecalho>
      <BtnCabecalho href=" "><Link to="/contato"></Link>CONTATO</BtnCabecalho>
    </StyledHeader>
  );
};

export default Cabecalho;
// <li><Link to="/sobre" className='menu-item'>Sobre</Link></li>
//<li><Link to="/sobre" className='menu-item'>Sobre</Link></li>
//
// <BtnCabecalho>HOME</BtnCabecalho>
// <BtnCabecalho>PRODUTOS</BtnCabecalho>
// <BtnCabecalho>CONTATO</BtnCabecalho>
//<li><Link to="#" >Entrar</Link></li>
//<li><Link to="#" >Produtos</Link></li>
//<li><Link to="/" >Blog</Link></li>
