import "./Header.scss";
import logo from "../../image/logoTMS.jpg";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container-css">
        <div className="content">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo} alt="anh" />
          </div>
          <div className="menu">
            <div className="list">
              <li>sản phẩm</li>
              <li>bảng giá</li>
              <li>case study</li>
              <li>dịch vụ chuyên sâu</li>
            </div>
          </div>
          <div className="btn-lienhe">Tư vấn vòng quay</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
