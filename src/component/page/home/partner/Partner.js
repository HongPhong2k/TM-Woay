import "./Partner.scss";
import logoPartner from "../../../../image/full-logo-partner-1.png";
const Partner = () => {
  return (
    <div className="partner">
      <div className="css-title">
        <p className="title">Các thương hiệu đã hợp tác</p>
      </div>

      <img src={logoPartner} alt="logo" className="logo" />
    </div>
  );
};

export default Partner;
