import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreedInfoPage from "./components/breedInfoPage/breedInfoPage";
import Home from "./components/home/home";
import SeeMorePage from "./components/seeMorePage/seeMoreSection";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breedInfoPage/:breedId" element={<BreedInfoPage />} />
        <Route path="/seeMorePage/" element={<SeeMorePage />} />
      </Routes>
    </BrowserRouter>
  );
}
