import "./CaseStudy.scss";
import anh1 from "../../../image/case-study/anh1.png";
import anh2 from "../../../image/case-study/anh2.png";
import anh3 from "../../../image/case-study/anh3.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CaseStudy = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="case">
        <div className="container-css">
          <div className="main-case">
            <div className="none"></div>
            <div className="title-case">
              <h3>CASE STUDY</h3>
              <p className="mt-4">
                Học lỏm cách thức của những case study chọn lọc.
              </p>
              <p>Vài mẹo nhỏ. Hiệu quả to.</p>
              <p style={{ marginBottom: "80px" }}>
                Đông người chơi. Thêm khách hàng
              </p>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img
                      src={anh1}
                      alt="anh"
                      onClick={() => navigate("/EsteeLauder")}
                    ></img>
                    <p
                      className="text-quote"
                      onClick={() => navigate("/EsteeLauder")}
                    >
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img
                      src={anh1}
                      alt="anh"
                      onClick={() => navigate("/EsteeLauder")}
                    ></img>
                    <p
                      className="text-quote"
                      onClick={() => navigate("/EsteeLauder")}
                    >
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                      cùng các tính năng giúp chiến dịch marketing bán lẻ được
                      vận hành trơn tru khiến khách hàng hào hứng tham gia và
                      đạt những kết quả tích cực
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img
                      src={anh1}
                      alt="anh"
                      onClick={() => navigate("/EsteeLauder")}
                    ></img>
                    <p
                      className="text-quote"
                      onClick={() => navigate("/EsteeLauder")}
                    >
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                      cùng các tính năng giúp chiến dịch marketing bán lẻ được
                      vận hành trơn tru khiến khách hàng hào hứng tham gia và
                      đạt những kết quả tích cực
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img
                      src={anh1}
                      alt="anh"
                      onClick={() => navigate("/EsteeLauder")}
                    ></img>
                    <p
                      className="text-quote"
                      onClick={() => navigate("/EsteeLauder")}
                    >
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                      cùng các tính năng giúp chiến dịch marketing bán lẻ được
                      vận hành trơn tru khiến khách hàng hào hứng tham gia và
                      đạt những kết quả tích cực
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img src={anh1} alt="anh"></img>
                    <p className="text-quote">
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                      cùng các tính năng giúp chiến dịch marketing bán lẻ được
                      vận hành trơn tru khiến khách hàng hào hứng tham gia và
                      đạt những kết quả tích cực
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="group-case">
                  <div className="group-anh-case">
                    <img src={anh1} alt="anh"></img>
                    <p className="text-quote">
                      Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên
                      toàn quốc, Envy Apple đã lựa chọn game Vòng quay may mắn
                      cùng các tính năng giúp chiến dịch marketing bán lẻ được
                      vận hành trơn tru khiến khách hàng hào hứng tham gia và
                      đạt những kết quả tích cực
                    </p>
                  </div>
                  <div className="des-case">
                    <p className="col-md-4">
                      tên dự án:<span>name is</span>
                    </p>
                    <p className="col-md-4">
                      khách hàng:
                      <span>customer is</span>
                    </p>
                    <p className="col-md-4">
                      thời gian diễn ra:
                      <span>20/10/2023 - 20/11/2023</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudy;
