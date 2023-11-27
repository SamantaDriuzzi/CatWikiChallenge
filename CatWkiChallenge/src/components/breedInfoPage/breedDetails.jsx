import PropTypes from "prop-types";
import "../../scss/components/breedInfoPage/breedDetails.scss";

const BreedDetails = ({ data }) => {
  return (
    <div className="details-container">
      <h1>{data.name}</h1>
      <p className="detailsTitle">
        <span>{data.description}</span>
      </p>
      <p className="detailsTitle">
        Temperament: <span>{data.temperament}</span>
      </p>
      <p className="detailsTitle">
        Origin: <span>{data.origin}</span>
      </p>
      <p className="detailsTitle">
        Life Span: <span>{data.life_span}</span>
      </p>
    </div>
  );
};
BreedDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
export default BreedDetails;
