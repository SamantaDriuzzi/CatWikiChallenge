import { useState, useEffect, useCallback } from "react";
import "../../scss/components/BreedsBanner/BreedsCard.scss";
import { getImagesByLimit } from "../../API/searchBreeds";

const BreedsCard = () => {
  const [breedImage, setBreedImage] = useState(null);

  const fetchBreedData = useCallback(async () => {
    try {
      const response = await getImagesByLimit();
      setBreedImage(response.data);
    } catch (error) {
      console.error("Error fetching cat breed data: ", error);
    }
  }, []);

  useEffect(() => {
    fetchBreedData();
  }, [fetchBreedData]);

  return (
    <div className="container-breeds-card">
      {breedImage ? (
        breedImage.map((breed, index) => (
          <div key={index}>
            <div className="image-card">
              <img src={breed.url} alt={breed.breeds[0].name} />
            </div>

            <div className="text-card" key={breed.breeds[0].id}>
              {breed.breeds[0].name}
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BreedsCard;
