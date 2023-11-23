import "./Footer.scss";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-css">
        <div className="main">
          <div className="row">
            <div className="col-xs-12 col-lg-4">
              <div className="title-f">Thông tin về chủ sở hữu website</div>
              <div className="des-f">
                <p>Tên công ty: CÔNG TY CỔ PHẦN WOAY</p>
                <p>
                  Giấy ĐKKD số 0316704274 do Sở KHĐT TP.HCM cấp lần đầu ngày
                  03/02/2021
                </p>
                <p>
                  Địa chỉ đăng ký kinh doanh: Tầng 3, ACM Building, 96 Cao
                  Thắng, Phường 4, Quận 3, Thành phố Hồ Chí Minh
                </p>
                <p>
                  Số tài khoản: 123456789 - Ngân hàng TMCP Kỹ thương Việt Nam
                  (Techcombank)
                </p>
                <p>Copyright © 2019 WOAY. All Rights Reserved.</p>
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="title-f">Hỗ trợ</div>
              <div className="des-f">
                <p>
                  Địa chỉ: Tầng 3, 451/24/4 Tô Hiến Thành, P.14, Q.10, Tp. HCM
                </p>
                <p>Hotline: 0898884169</p>
                <p>Email: support@woay.vn</p>
                <p>Website: https://www.woay.vn</p>
                <FaFacebook
                  style={{
                    marginRight: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
                <FaYoutube
                  style={{
                    marginRight: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
                <FaTiktok
                  style={{
                    marginRight: "15px",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="col-xs-12 col-lg-4">
              <div className="title-f">Thông tin khác</div>
              <div className="des-f">
                <p>về TM</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
