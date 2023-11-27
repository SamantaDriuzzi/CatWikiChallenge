import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BreedDatailsContainer,
  ContainerBreedsCard,
  ImageCard,
  RectanguloDiseñoCarDetails,
} from "../../styledComponent/styled-breedCard";
import LogoSVG from "../../assets/LogoSVG";
import BreedDetails from "./breedDetails";

const BreedInfoPage = () => {
  const { breedId } = useParams();
  const [breedImageDetails, setBreedImageDetails] = useState(null);

  const fetchBreedDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/${breedId}`
      );
      console.log(response);

      setBreedImageDetails(response.data);
      console.log("❗Esto es breedImageDetails: ", response.data);
    } catch (error) {
      console.error("Error fetching cat breed details: ", error);
    }
  }, [breedId]);

  useEffect(() => {
    fetchBreedDetails();
  }, [fetchBreedDetails]);

  if (!breedImageDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <LogoSVG fill={"#000000"} width={130} />
      <BreedDatailsContainer>
        <RectanguloDiseñoCarDetails></RectanguloDiseñoCarDetails>
        <ImageCard
          width={"317px"}
          height={"371px"}
          margin={"-10px 0 0 -100px"}
          className="imageCard"
        >
          <img
            src={breedImageDetails.url}
            alt={breedImageDetails.breeds[0].name}
            className="image"
          />
        </ImageCard>

        <BreedDetails data={breedImageDetails.breeds[0]} />
      </BreedDatailsContainer>
    </div>
  );
};

export default BreedInfoPage;
