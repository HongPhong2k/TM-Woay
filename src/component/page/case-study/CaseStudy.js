import "./CaseStudy.scss";
import anh1 from "../../../image/case-study/anh1.png";
import anh2 from "../../../image/case-study/anh2.png";
import anh3 from "../../../image/case-study/anh3.png";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const CaseStudy = () => {
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
            <div className="group-case">
              <div className="group-anh-case">
                <img src={anh1} alt="anh"></img>
                <p className="text-quote">
                  Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên toàn
                  quốc, Envy Apple đã lựa chọn game Vòng quay may mắn cùng các
                  tính năng giúp chiến dịch marketing bán lẻ được vận hành trơn
                  tru khiến khách hàng hào hứng tham gia và đạt những kết quả
                  tích cực
                </p>
              </div>
              <div className="des-case">
                <p className="col-md-4">tên dự án</p>
                <p className="col-md-4">khách hàng</p>
                <p className="col-md-4">thời gian diễn ra</p>
              </div>
              <div className="des-case-detail">
                <p className="col-md-4">name is</p>
                <p className="col-md-4">công ty customer</p>
                <p className="col-md-4">20/10/2023 - 20/11/2023</p>
              </div>
            </div>
            <div className="group-case">
              <div className="group-anh-case">
                <img src={anh2} alt="anh"></img>
                <p className="text-quote">
                  Với chương trình khuyến mãi áp dụng tại mọi điểm bán trên toàn
                  quốc, Envy Apple đã lựa chọn game Vòng quay may mắn cùng các
                  tính năng giúp chiến dịch marketing bán lẻ được vận hành trơn
                  tru khiến khách hàng hào hứng tham gia và đạt những kết quả
                  tích cực
                </p>
              </div>
              <div className="des-case">
                <p className="col-md-4">tên dự án</p>
                <p className="col-md-4">khách hàng</p>
                <p className="col-md-4">thời gian diễn ra</p>
              </div>
              <div className="des-case-detail">
                <p className="col-md-4">name is</p>
                <p className="col-md-4">công ty customer</p>
                <p className="col-md-4">20/10/2023 - 20/11/2023</p>
              </div>
            </div>
            <div className="group-case">
              <div className="group-anh-case">
                <img src={anh3} alt="anh"></img>
                <p className="text-quote">
                  Thương hiệu Nagakawa hi vọng rằng qua việc áp dụng
                  gamification và mang đến những trải nghiệm vui vẻ, sẽ tiếp
                  thêm sự gần gũi và tạo dựng mối quan hệ lâu dài với khách hàng
                  trên khắp cả nước .
                </p>
              </div>
              <div className="des-case">
                <p className="col-md-4">tên dự án</p>
                <p className="col-md-4">khách hàng</p>
                <p className="col-md-4">thời gian diễn ra</p>
              </div>
              <div className="des-case-detail">
                <p className="col-md-4">name is</p>
                <p className="col-md-4">công ty customer</p>
                <p className="col-md-4">20/10/2023 - 20/11/2023</p>
              </div>
            </div>
            <div className="group-case">
              <div className="group-anh-case">
                <img src={anh3} alt="anh"></img>
                <p className="text-quote">
                  Sản phẩm của NUNA được nhiều bà mẹ tin dùng, đặc biệt vào mùa
                  hè thì khăn ướt lại càng là sản phẩm không thể thiếu
                </p>
              </div>
              <div className="des-case">
                <p className="col-md-4">tên dự án</p>
                <p className="col-md-4">khách hàng</p>
                <p className="col-md-4">thời gian diễn ra</p>
              </div>
              <div className="des-case-detail">
                <p className="col-md-4">name is</p>
                <p className="col-md-4">công ty customer</p>
                <p className="col-md-4">20/10/2023 - 20/11/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CaseStudy;
