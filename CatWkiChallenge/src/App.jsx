import BreedsBanner from "./components/BreedsBanner/BreedsBanner";
import MaskGroup from "./components/MaskGroup/MaskGroup";
import WhyBanner from "./components/WhyBanner/WhyBanner";

const App = () => {
  return (
    <div className="app">
      <MaskGroup />
      <BreedsBanner />
      <WhyBanner />
    </div>
  );
};
export default App;
