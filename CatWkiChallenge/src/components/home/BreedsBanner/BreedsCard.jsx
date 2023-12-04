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
  const [breedImage, setBreedImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const fetchBreedData = useCallback(async () => {
    if (!allDataLoaded) {
      try {
        const response = await getImagesByLimit(limit);

        if (response.data.length === 0 || breedImage.length >= limit) {
          setAllDataLoaded(true);
        } else {
          setBreedImage((prevImages) => [...prevImages, ...response.data]);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cat breed data: ", error);
      }
    }
  }, [limit, breedImage.length, allDataLoaded]);

  useEffect(() => {
    fetchBreedData();
  }, [fetchBreedData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchBreedData();
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (breedImage.length > 0) {
      observer.observe(document.querySelector(".imageCard:last-child"));
    }

    return () => {
      observer.disconnect();
    };
  }, [breedImage, fetchBreedData]);

  return (
    <ContainerBreedsCard>
      {breedImage.slice(0, limit).map((breed, index) => (
        <div key={index} className="imageCard">
          <Link to={`/breedInfoPage/${breed.id}`}>
            <ImageCard width={width} height={height}>
              <img
                src={breed.url}
                alt={breed.breeds[0].name}
                className="image"
              />
            </ImageCard>
            <TextCard key={breed.breeds[0].id}>{breed.breeds[0].name}</TextCard>
          </Link>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </ContainerBreedsCard>
  );
};

BreedsCard.propTypes = {
  limit: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default BreedsCard;
