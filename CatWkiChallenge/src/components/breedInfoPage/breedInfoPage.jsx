import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BreedDatailsContainer,
  ImageCardInfo,
  RectanguloDiseñoCarDetails,
} from "../../styledComponent/styledInfoPage.js";
import LogoSVG from "../../assets/LogoSVG";
import BreedDetails from "./breedDetails";
import OtherPhotos from "./otherPhotos";
import FooterCat from "../home/FooterCat/FooterCat.jsx";
import {
  InfoPageContainer,
  OtherPhotosSection,
} from "../../styledComponent/styledInfoPage.js";

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
    document.cookie = "_hjSessionUser_3476263=value; SameSite=None; Secure";
    fetchBreedDetails();
  }, [fetchBreedDetails]);

  if (!breedImageDetails) {
    return <p>Loading...</p>;
  }

  return (
    <InfoPageContainer>
      <LogoSVG fill={"#000000"} width={130} />
      <BreedDatailsContainer>
        <ImageCardInfo>
          <RectanguloDiseñoCarDetails></RectanguloDiseñoCarDetails>
          <img
            src={breedImageDetails.url}
            alt={breedImageDetails.breeds[0].name}
            className="image"
          />
        </ImageCardInfo>
        <BreedDetails data={breedImageDetails.breeds[0]} />
      </BreedDatailsContainer>
      <OtherPhotosSection>
        <h1>Other Photos</h1>
        <OtherPhotos breedsId={breedImageDetails.breeds[0].id} />
      </OtherPhotosSection>
      <FooterCat />
    </InfoPageContainer>
  );
};

export default BreedInfoPage;
