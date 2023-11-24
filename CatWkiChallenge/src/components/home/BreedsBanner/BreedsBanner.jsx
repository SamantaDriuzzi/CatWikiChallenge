import "../../../scss/components/home/BreedsBanner/BreedsBanner.scss";
import BreedsCard from "./BreedsCard";

const BreedsBanner = () => {
  return (
    <div className="container-breeds-banner">
      <div className="breeds-banner">
        <div className="titulo-pequeño">Most Searched Breeds</div>
        <div className="barra-separadora"></div>
        <div className="titulo-grande">66+ Breeds For you to discover</div>
        <div className="text-see-more">
          SEE MORE
          <span className="material-symbols-outlined">trending_flat</span>
        </div>
        <div className="rectangulo-diseño"></div>
      </div>
      <BreedsCard
        limit={4}
        justifyCon={"center"}
        marginT={"-350px"}
        width={"220px"}
        height={"200px"}
      />
    </div>
  );
};
export default BreedsBanner;
