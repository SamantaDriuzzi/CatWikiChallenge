import { useState, useEffect, useCallback } from "react";

import { getImagesByLimit } from "../../../API/getsAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  ContainerBreedsCard,
  ImageCard,
  TextCard,
} from "../../../styledComponent/styled-breedCard";

const BreedsCard = ({ limit, width, height }) => {
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
    <ContainerBreedsCard>
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
  width: PropTypes.string,
  height: PropTypes.string,
};

export default BreedsCard;
