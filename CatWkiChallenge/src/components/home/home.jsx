import { Outlet } from "react-router-dom";
import BreedsBanner from "./BreedsBanner/BreedsBanner";
import FooterCat from "./FooterCat/FooterCat";
import MaskGroup from "./MaskGroup/MaskGroup";
import WhyBanner from "./WhyBanner/WhyBanner";

const Home = () => {
  return (
    <div className="home">
      <MaskGroup />
      <BreedsBanner />
      <WhyBanner />
      <FooterCat />
      <Outlet />
    </div>
  );
};
export default Home;
