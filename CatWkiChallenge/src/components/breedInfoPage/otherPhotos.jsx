import { useCallback, useEffect, useState } from "react";
import { getImagesByGroup } from "../../API/getsAPI";
import {
  ImageGroup,
  BreedGroupComponent,
} from "../../styledComponent/styledInfoPage";
import PropTypes from "prop-types";

const OtherPhotos = ({ breedsId }) => {
  const [photos, setPhotos] = useState([]);

  const fetchOtherPhotos = useCallback(async () => {
    try {
      const response = await getImagesByGroup(breedsId);
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching cat photo data: ", error);
    }
  }, [breedsId]);

  useEffect(() => {
    fetchOtherPhotos();
  }, [fetchOtherPhotos]);

  return (
    <BreedGroupComponent>
      {photos ? (
        photos.map((photo, index) => (
          <div key={index}>
            <ImageGroup>
              <img src={photo.url} alt={photo.name} />
            </ImageGroup>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </BreedGroupComponent>
  );
};
OtherPhotos.propTypes = {
  breedsId: PropTypes.string,
};
export default OtherPhotos;
