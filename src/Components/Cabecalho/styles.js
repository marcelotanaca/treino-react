import styled from "styled-components";

export const StyledHeader = styled.nav `
  background-color: #cccccc;
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 43vh;
  align-items: center;
`;

export const Logo = styled.img`
  height: 225px;
  width: 225px;  
`;

export const BtnCabecalho = styled.a`
  text-align: center;
  padding: 5px 20px;
  margin: 0 10px;
  font-weight: 700;
  color: #000;
  text-decoration:none;
`;