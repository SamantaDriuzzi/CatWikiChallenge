import LogoSVG from "../../assets/LogoSVG";
import BreedsCard from "../home/BreedsBanner/BreedsCard";

const BreedInfoPage = () => {
  return (
    <div>
      <div className="container-logo-principal">
        <LogoSVG fill={"#000000"} width={130} />
      </div>
      <BreedsCard
        limit={1}
        justifyCon={"flex-start"}
        marginT={"50px"}
        width={"220px"}
        height={"200px"}
      />
    </div>
  );
};
export default BreedInfoPage;
