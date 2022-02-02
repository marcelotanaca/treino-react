import styled from "styled-components";
import background from "../../Img/lg.jpg";

export const Rodape = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${background});
`;
export const RodapeImg = styled.img`
  text-align: center;
  padding: 29px 0;
`;
export const Copyright = styled.div`
  font-size: 12px;
  color: goldenrod;
  margin: 40px;
`;