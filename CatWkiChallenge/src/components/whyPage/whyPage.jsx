import { whyData } from "./whyData";
import "../../scss/components/whyPage/whyPage.scss";
import LogoSVG from "../../assets/LogoSVG";
import { getImagesRandom } from "../../API/getsAPI";
import { useCallback, useEffect, useState } from "react";
import FooterCat from "../home/FooterCat/FooterCat";

const WhyPage = () => {
  window.scrollTo(0, 0);

  const [photos, setPhotos] = useState([]);

  const fetchOtherPhotos = useCallback(async () => {
    try {
      const response = await getImagesRandom(3);
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching cat photo data: ", error);
    }
  }, []);

  useEffect(() => {
    fetchOtherPhotos();
  }, [fetchOtherPhotos]);

  return (
    <>
      <LogoSVG fill={"#000000"} width={130} />
      <div className="why-page-container">
        <div className="title-container">
          <h1>The surprising benefits of having a cat in your life!</h1>

          <div className="barra-separadora"></div>
        </div>
        <div className="benefits-container">
          <ul>
            {whyData.map((data) => (
              <li key={data.id}>
                <h3>{data.benefitName}</h3>
                <p>{data.benefitContent}</p>
              </li>
            ))}
          </ul>
          <div className="breed-card-container">
            {photos.map((photo, index) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={photo.name}
                className={`custom-image-style-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <FooterCat />
    </>
  );
};

export default WhyPage;
