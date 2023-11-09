import "./Partner.scss";
import logoPartner from "../../image/full-logo-partner-1.png";
const Partner = () => {
  return (
    <div className="partner">
      <h2>Các thương hiệu đã hợp tác</h2>
      <img src={logoPartner} alt="logo" className="logo" />
    </div>
  );
};

export default Partner;
