import styled, { css } from "styled-components";

export const ContainerBreedsCard = styled.div`
  justify-content: center;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
  max-width: 1100px;
  padding: 20px 10px;
  a {
    text-decoration: none;
  }
`;

export const ImageCard = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  ${css`
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    img:hover {
      transform: scale(1.1) rotate(5deg);
      transition: transform 0.5s ease;
      cursor: pointer;
      filter: saturate(150%);
    }
  `}
`;
export const TextCard = styled.div`
  color: #291507;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const RectanguloDiseñoCard = styled.div`
  width: 47px;
  height: 174px;
  border-radius: 14px;
  background: #ac7f0d;
  margin: 60px 0 0 100px;
`;
