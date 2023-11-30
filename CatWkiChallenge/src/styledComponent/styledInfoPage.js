import styled, { css } from "styled-components";

export const InfoPageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
`;
export const BreedDatailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding-top: 20px;
`;

export const RectanguloDiseñoCarDetails = styled.div`
  width: 83px;
  height: 305px;
  border-radius: 14px 0px 0px 14px;
  background: #ac7f0d;
  position: relative;
  z-index: -1;
  margin-left: 10px;
`;

export const ImageCardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 491px;
  height: 371px;
  margin-top: 30px;

  ${css`
    img {
      width: 391px;
      height: 371px;
      object-fit: cover;
      border-radius: 24px;
      margin-right: 60px;
    }
  `}
`;
export const BreedGroupComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  max-width: 1278px;
  padding: 20px 10px;
`;

export const OtherPhotosSection = styled.div`
  ${css`
    h1 {
      color: #291507;
      font-family: Montserrat;
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  `}
`;
export const ImageGroup = styled.div`
  width: 278px;
  height: 278px;

  ${css`
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `}
`;
