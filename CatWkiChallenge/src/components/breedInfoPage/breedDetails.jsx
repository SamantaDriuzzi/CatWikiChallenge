import PropTypes from "prop-types";
import "../../scss/components/breedInfoPage/breedDetails.scss";

const BreedDetails = ({ data }) => {
  const caractArray = [
    { name: "Adaptability", value: data.adaptability },
    { name: "Affection level", value: data.affection_level },
    { name: "Child friendly", value: data.child_friendly },
    { name: "Grooming", value: data.grooming },
    { name: "Intelligence", value: data.intelligence },
    { name: "Shedding level", value: data.shedding_level },
    { name: "Social needs", value: data.social_needs },
    { name: "Stranger friendly", value: data.stranger_friendly },
  ];

  const renderBars = (value) => {
    const maxBars = 5;
    const filledBars = value;
    const emptyBars = maxBars - filledBars;

    const bars = [];
    for (let i = 0; i < filledBars; i++) {
      bars.push(<div key={i} className="bar filled" />);
    }
    for (let i = 0; i < emptyBars; i++) {
      bars.push(<div key={i + filledBars} className="bar empty" />);
    }
    return bars;
  };

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
      {caractArray.map((caract, index) => (
        <div className="bars-container" key={index}>
          <p className="detailsTitle">{caract.name}:</p>
          <div className="bars">{renderBars(caract.value)}</div>
        </div>
      ))}
    </div>
  );
};
BreedDetails.propTypes = {
  data: PropTypes.object.isRequired,
};
export default BreedDetails;
