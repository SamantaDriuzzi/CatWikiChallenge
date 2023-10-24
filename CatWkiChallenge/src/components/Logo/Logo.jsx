import "../../scss/components/Logo/Logo.scss";
import LogoSVG from "../../assets/LogoSVG";
import PropTypes from "prop-types";

const Logo = ({ width, fill }) => {
  return (
    <div>
      <img src={LogoSVG} alt="Logo" style={{ width, fill }} />
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  fill: PropTypes.string,
};
export default Logo;
