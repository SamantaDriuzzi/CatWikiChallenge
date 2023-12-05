import "../../../scss/components/home/WhyBanner/WhyBanner.scss";
import image1 from "../../../assets/image1.jpg";
import image2 from "../../../assets/image2.jpg";
import image3 from "../../../assets/image3.jpg";
import { Link } from "react-router-dom";
const WhyBanner = () => {
  return (
    <div className="container-why-banner">
      <div className="why-banner">
        <div className="container-text-why">
          <div className="barra-separadora"></div>
          <div className="titulo-grande">Why should you have a cat?</div>
          <div className="titulo-pequeño">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </div>
          <Link to={`/whyPage/`}>
            <div className="text-read-more">
              READ MORE
              <span className="material-symbols-outlined">trending_flat</span>
            </div>
          </Link>
        </div>

        <div className="images-why-banner">
          <div className="image-1">
            <img src={image1} />
          </div>
          <div className="image-2">
            <img src={image2} />
          </div>
          <div className="image-3">
            <img src={image3} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhyBanner;
