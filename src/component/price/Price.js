import pc1 from "../../image/pricing-1.png";
import pc2 from "../../image/pricing-2.png";
import pc3 from "../../image/pricing-3.png";
import pc4 from "../../image/pricing-4.png";
import "./Price.scss";
import iconCheck from "../../image/icon-check.png";
import { Divider } from "antd";
const Price = () => {
  return (
    <>
      <h2>Bảng giá</h2>
      <div className="roww">
        <div className="main">
          <div className="front">
            <div className="name">Starter</div>
            <div className="des">
              Khởi sự kinh doanh Online. Tăng nhận diện và tương tác.
            </div>
            <div className="pricing">
              500.000
              <div>vnd / tháng</div>
            </div>
            <div className="img-price">
              <img src={pc1} alt="anh" />
            </div>
          </div>

          <div className="back">
            <div className="info">
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn cơ bản </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn nâng cao </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn vip</p>
                </div>
              </div>
            </div>
            <button className="lienhe">liên hệ với TM</button>
          </div>
        </div>
        <div className="main">
          <div className="front">
            <div className="name">pro</div>
            <div className="des">
              Khởi sự kinh doanh Online. Tăng nhận diện và tương tác.
            </div>
            <div className="pricing">
              1.100.000
              <div>vnd / tháng</div>
            </div>
            <div className="img-price">
              <img src={pc2} alt="anh" />
            </div>
          </div>

          <div className="back">
            <div className="info">
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn cơ bản </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn nâng cao </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn vip</p>
                </div>
              </div>
            </div>
            <button className="lienhe">liên hệ với TM</button>
          </div>
        </div>
        <div className="main">
          <div className="front">
            <div className="name">Starter</div>
            <div className="des">
              Khởi sự kinh doanh Online. Tăng nhận diện và tương tác.
            </div>
            <div className="pricing">
              3.300.000
              <div>vnd / tháng</div>
            </div>
            <div className="img-price">
              <img src={pc3} alt="anh" />
            </div>
          </div>

          <div className="back">
            <div className="info">
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn cơ bản </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn nâng cao </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn vip</p>
                </div>
              </div>
            </div>
            <button className="lienhe">liên hệ với TM</button>
          </div>
        </div>
        <div className="main">
          <div className="front">
            <div className="name">Theo yêu cầu</div>
            <div className="des">
              Khởi sự kinh doanh Online. Tăng nhận diện và tương tác.
            </div>
            <div className="pricing">
              10.000.000
              <div>vnd / tháng</div>
            </div>
            <div className="img-price">
              <img src={pc4} alt="anh" />
            </div>
          </div>

          <div className="back">
            <div className="info">
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn cơ bản </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn nâng cao </p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn vip</p>
                </div>
              </div>
              <div className="list">
                <div className="icon">
                  <img src={iconCheck} alt="icon" width={24} />
                </div>
                <div className="detail">
                  <p>Thiết kế vòng quay may mắn vip</p>
                </div>
              </div>
            </div>
            <button className="lienhe">liên hệ với TM</button>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="now">liên hệ với TM</div>
      </div>
      <Divider />
    </>
  );
};

export default Price;
