import LogoSVG from "../../assets/LogoSVG";
import {
  ContainerSeeMore,
  MainContainer,
  Titulo,
} from "../../styledComponent/styled-see-more-page";
import BreedsCard from "../home/BreedsBanner/BreedsCard";
import FooterCat from "../home/FooterCat/FooterCat";

const SeeMorePage = () => {
  window.scrollTo(0, 0);
  return (
    <MainContainer>
      <LogoSVG fill={"#000000"} width={130} />
      <div className="see-more">
        <Titulo>Explore more breeds</Titulo>
      </div>
      <ContainerSeeMore>
        <BreedsCard limit={72} width={"220px"} height={"200px"} />
      </ContainerSeeMore>

      <FooterCat />
    </MainContainer>
  );
};
export default SeeMorePage;
