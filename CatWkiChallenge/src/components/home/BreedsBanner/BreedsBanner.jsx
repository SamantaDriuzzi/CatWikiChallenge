import { Link } from "react-router-dom";
import "../../../scss/components/home/BreedsBanner/BreedsBanner.scss";
import { RectanguloDiseñoCard } from "../../../styledComponent/styled-breedCard";
import BreedsCard from "./BreedsCard";

const BreedsBanner = () => {
  return (
    <div className="container-breeds-banner">
      <div className="breeds-banner">
        <div className="titulo-pequeño">Most Searched Breeds</div>
        <div className="barra-separadora"></div>
        <div className="titulo-grande">66+ Breeds For you to discover</div>
        <Link to={`/seeMorePage/`}>
          <div className="text-see-more">
            SEE MORE
            <span className="material-symbols-outlined">trending_flat</span>
          </div>
        </Link>
        <RectanguloDiseñoCard></RectanguloDiseñoCard>
        <div className="container-breed-card">
          <BreedsCard limit={4} width={"220px"} height={"200px"} />
        </div>
      </div>
    </div>
  );
};
export default BreedsBanner;
