import pc1 from "../../image/pricing-1.png";
import pc2 from "../../image/pricing-2.png";
import pc3 from "../../image/pricing-3.png";
import pc4 from "../../image/pricing-4.png";
import "./Price.scss";
import iconCheck from "../../image/icon-check.png";
import { Divider } from "antd";
import { useState } from "react";
const Price = (props) => {
  const { handleForm } = props;
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);

  const handleA1 = (b) => {
    setA1(b);
  };
  const handleA2 = (b) => {
    setA2(b);
  };
  const handleA3 = (b) => {
    setA3(b);
  };
  const handleA4 = (b) => {
    setA4(b);
  };
  return (
    <>
      <div className="roww">
        <div className={a1 ? "main height-more" : "main height-less"}>
          <div className="name">Starter</div>
          <div className="gr-line">
            <div className="line active-line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
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
          <div className="btn-lienlac" onClick={() => handleForm(true)}>
            Liên lạc với TM
          </div>
          <div className="info">
            <p>Chi tiết: </p>
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
                <p>Chế độ thông báo trúng thưởng bằng pop-up</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Thiết lập lượt chơi cho mỗi người chơi không giới hạn</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Lượt phát hành game: 1 game/tháng</p>
              </div>
            </div>
          </div>
          {a1 ? (
            <div className="see-less" onClick={() => handleA1(false)}>
              Thu gọn
            </div>
          ) : (
            <div className="see-more" onClick={() => handleA1(true)}>
              Xem thêm
            </div>
          )}
        </div>

        <div className={a2 ? "main height-more" : "main height-less"}>
          <div className="name">Pro</div>
          <div className="gr-line">
            <div className="line active-line"></div>
            <div className="line active-line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
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
          <div className="btn-lienlac" onClick={() => handleForm(true)}>
            Liên lạc với TM
          </div>
          <div className="info">
            <p>Chi tiết: </p>
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
                <p>Chế độ thông báo trúng thưởng bằng pop-up</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Thiết lập lượt chơi cho mỗi người chơi không giới hạn</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Lượt phát hành game: 1 game/tháng</p>
              </div>
            </div>
          </div>
          {a2 ? (
            <div className="see-less" onClick={() => handleA2(false)}>
              Thu gọn
            </div>
          ) : (
            <div className="see-more" onClick={() => handleA2(true)}>
              Xem thêm
            </div>
          )}
        </div>

        <div className={a3 ? "main height-more" : "main height-less"}>
          <div className="name">Starter</div>
          <div className="gr-line">
            <div className="line active-line"></div>
            <div className="line active-line"></div>
            <div className="line active-line"></div>
            <div className="line"></div>
          </div>
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
          <div className="btn-lienlac" onClick={() => handleForm(true)}>
            Liên lạc với TM
          </div>
          <div className="info">
            <p>Chi tiết: </p>
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
                <p>Chế độ thông báo trúng thưởng bằng pop-up</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Thiết lập lượt chơi cho mỗi người chơi không giới hạn</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Lượt phát hành game: 1 game/tháng</p>
              </div>
            </div>
          </div>
          {a3 ? (
            <div className="see-less" onClick={() => handleA3(false)}>
              Thu gọn
            </div>
          ) : (
            <div className="see-more" onClick={() => handleA3(true)}>
              Xem thêm
            </div>
          )}
        </div>
        <div className={a4 ? "main height-more" : "main height-less"}>
          <div className="name">By Request</div>
          <div className="gr-line">
            <div className="line active-line"></div>
            <div className="line active-line"></div>
            <div className="line active-line"></div>
            <div className="line active-line"></div>
          </div>
          <div className="des">
            Khởi sự kinh doanh Online. Tăng nhận diện và tương tác.
          </div>
          <div className="pricing">
            500.000
            <div>vnd / tháng</div>
          </div>
          <div className="img-price">
            <img src={pc4} alt="anh" />
          </div>
          <div className="btn-lienlac" onClick={() => handleForm(true)}>
            Liên lạc với TM
          </div>
          <div className="info">
            <p>Chi tiết: </p>
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
                <p>Chế độ thông báo trúng thưởng bằng pop-up</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Thiết lập lượt chơi cho mỗi người chơi không giới hạn</p>
              </div>
            </div>
            <div className="list">
              <div className="icon">
                <img src={iconCheck} alt="icon" width={24} />
              </div>
              <div className="detail">
                <p>Lượt phát hành game: 1 game/tháng</p>
              </div>
            </div>
          </div>
          {a4 ? (
            <div className="see-less" onClick={() => handleA4(false)}>
              Thu gọn
            </div>
          ) : (
            <div className="see-more" onClick={() => handleA4(true)}>
              Xem thêm
            </div>
          )}
        </div>
      </div>

      <div className="center">
        <div className="now" onClick={() => handleForm(true)}>
          liên hệ với TM
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Price;
