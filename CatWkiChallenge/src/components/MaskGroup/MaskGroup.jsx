import LogoSVG from "../../assets/LogoSVG";
import "../../scss/components/MaskGroup/MaskGroup.scss";

const MaskGroup = () => {
  return (
    <>
      <div className="container-logo-principal">
        <LogoSVG fill={"#000000"} width={130} />
      </div>
      <div className="container-mask-goup">
        <div className="mask-group">
          <div className="mask">
            <LogoSVG width={270} />
            <div>
              <h2>Get to know more about your cat breed</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MaskGroup;
