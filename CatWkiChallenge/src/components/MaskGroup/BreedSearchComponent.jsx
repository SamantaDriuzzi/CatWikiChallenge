import { useState, useEffect, useCallback } from "react";
import "../../scss/components/MaskGroup/BreedSearchComponent.scss";
import { getRazas } from "../../API/searchBreeds";

function BreedSearchComponent() {
  const [breeds, setBreeds] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchBreeds = useCallback(async () => {
    if (searchValue.length >= 3) {
      try {
        const response = await getRazas(searchValue);
        setBreeds(response.data);
      } catch (error) {
        console.error("Error al obtener la lista de razas: " + error);
      }
    } else {
      setBreeds([]);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  return (
    <div className="breed-search-container">
      <div className="search-container">
        <div className="imput-container">
          <input
            type="text"
            id="search-input"
            name="searchInput"
            placeholder="Enter your breed"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
          <span className="material-symbols-outlined">search</span>
        </div>
        <ul className="breed-list">
          {breeds.map((breed) => (
            <li key={breed.id} onClick={() => setSearchValue(breed.name)}>
              {breed.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BreedSearchComponent;
