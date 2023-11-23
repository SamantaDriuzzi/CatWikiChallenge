import "../../../scss/components/home/FooterCat/FooterCat.scss";
import LogoSVG from "../../../assets/LogoSVG";

const FooterCat = () => {
  return (
    <div className="container-footer-banner">
      <div className="footer-banner">
        <LogoSVG width={120} />
        <div className="titulo-pequeño">
          <span className="material-symbols-outlined"> copyright</span> created
          by
          <span> Samanta Driuzzi</span> - devChallenge.io 2023
        </div>
      </div>
    </div>
  );
};
export default FooterCat;
