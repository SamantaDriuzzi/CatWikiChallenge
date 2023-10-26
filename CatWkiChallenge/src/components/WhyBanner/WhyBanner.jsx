import "../../scss/components/WhyBanner/WhyBanner.scss";
const WhyBanner = () => {
  return (
    <div className="container-why-banner">
      <div className="why-banner">
        <div className="container-text-why">
          <div className="barra-separadora"></div>
          <div className="titulo-grande">Why should you have a cat?</div>
          <div className="titulo-pequeño">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </div>
          <div className="text-read-more">
            READ MORE
            <span className="material-symbols-outlined">trending_flat</span>
          </div>
        </div>

        <div className="images-why-banner">
          <div className="image-1"></div>
          <div className="image-2"></div>
          <div className="image-3"></div>
        </div>
      </div>
    </div>
  );
};
export default WhyBanner;
