import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreedInfoPage from "./components/breedInfoPage/breedInfoPage";
import Home from "./components/home/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/breedInfoPage/:id" element={<BreedInfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
