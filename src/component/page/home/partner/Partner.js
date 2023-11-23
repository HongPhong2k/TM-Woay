import "./Partner.scss";
import logoPartner from "../../../../image/full-logo-partner-1.png";
const Partner = () => {
  return (
    <div className="partner-home">
      <p className="title-home">Các thương hiệu đã hợp tác</p>
      <img src={logoPartner} alt="logo" className="logo-partner" />
    </div>
  );
};

export default Partner;
