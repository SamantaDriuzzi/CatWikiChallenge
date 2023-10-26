import BreedsBanner from "./components/BreedsBanner/BreedsBanner";
import FooterCat from "./components/FooterCat/FooterCat";
import MaskGroup from "./components/MaskGroup/MaskGroup";
import WhyBanner from "./components/WhyBanner/WhyBanner";

const App = () => {
  return (
    <div className="app">
      <MaskGroup />
      <BreedsBanner />
      <WhyBanner />
      <FooterCat />
    </div>
  );
};
export default App;
