import styled from "styled-components";
import fondo from "../assets/fondoBreeds.png";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${fondo});
`;
export const ContainerSeeMore = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
export const Titulo = styled.div`
  width: 530px;
  color: #291507;
  font-family: Montserrat;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 50px 0 0 150px;
`;
