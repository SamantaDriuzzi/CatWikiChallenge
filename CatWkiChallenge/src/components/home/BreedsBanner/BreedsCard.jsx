import { useState, useEffect, useCallback } from "react";

import { getImagesByLimit } from "../../../API/searchBreeds";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const ContainerBreedsCard = styled.div`
  justify-content: ${(props) => props.justifyCon || "flex-start"};
  margin-top: ${(props) => props.marginT || "0"};

  ${css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 16px;
    max-width: 1100px;
    padding: 20px 10px;
  `}
`;

const ImageCard = styled.div`
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
  `}
`;
const TextCard = styled.div`
  color: #291507;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const BreedsCard = ({ limit, justifyCon, marginT, width, height }) => {
  const [breedImage, setBreedImage] = useState(null);

  const fetchBreedData = useCallback(async () => {
    try {
      const response = await getImagesByLimit(limit);
      setBreedImage(response.data);
    } catch (error) {
      console.error("Error fetching cat breed data: ", error);
    }
  }, [limit]);

  useEffect(() => {
    fetchBreedData();
  }, [fetchBreedData]);

  return (
    <ContainerBreedsCard
      justifyCon={justifyCon}
      marginT={marginT}
      className="container-breeds-card"
    >
      {breedImage ? (
        breedImage.map((breed, index) => (
          <div key={index}>
            <Link to={`/breedInfoPage/${breed.id}`}>
              <ImageCard width={width} height={height} className="imageCard">
                <img
                  src={breed.url}
                  alt={breed.breeds[0].name}
                  className="image"
                />
              </ImageCard>

              <TextCard className="text-card" key={breed.breeds[0].id}>
                {breed.breeds[0].name}
              </TextCard>
            </Link>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </ContainerBreedsCard>
  );
};
BreedsCard.propTypes = {
  limit: PropTypes.number,
  justifyCon: PropTypes.string,
  marginT: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default BreedsCard;
