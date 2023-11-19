import "./DichVuChuyenSau.scss";
import banner from "../../../image/dich-vu/banner.png";
import { Carousel } from "antd";
import logo1 from "../../../image/vong quay da thiet ke.jpg";
import logo2 from "../../../image/vong quay da thiet ke2.jpg";
import logo3 from "../../../image/pricing-3.png";
import logo4 from "../../../image/pricing-4.png";
import logo5 from "../../../image/vong quay da thiet ke3.jpg";
import g1 from "../../../image/dich-vu/g1.png";
import g2_bg_1 from "../../../image/dich-vu/g2_bg-1.png";
import g2_bg_2 from "../../../image/dich-vu/g2_bg-2.png";
import g2_1 from "../../../image/dich-vu/g2_1.png";
import g2_2 from "../../../image/dich-vu/g2_2.png";
import g2_3 from "../../../image/dich-vu/g2_3.png";
import g2_4 from "../../../image/dich-vu/g2_4.png";
import g2_5 from "../../../image/dich-vu/g2_5.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CiStar } from "react-icons/ci";
import { MdStar } from "react-icons/md";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 5 },
};
const items = [
  <div className="item" data-value="1">
    <img src={logo1} width={"100%"}></img>
  </div>,
  <div className="item" data-value="2">
    <img src={logo2} width={"100%"}></img>
  </div>,
  <div className="item" data-value="3">
    <img src={logo3} width={"100%"}></img>
  </div>,
  <div className="item" data-value="4">
    <img src={logo4} width={"100%"}></img>
  </div>,
  <div className="item" data-value="5">
    <img src={logo5} width={"100%"}></img>
  </div>,
];
const responsive_2 = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 4 },
};
const items_2 = [
  <div className="item" data-value="1" style={{ marginRight: "20px" }}>
    <div style={{ backgroundColor: "#fff" }}>
      <div className="image-crs">
        <div className="g2_bg_1">
          <img src={g2_bg_1}></img>
        </div>
        <div className="g2_1">
          <img src={g2_1}></img>
        </div>
        <div className="g2_bg_2">
          <img src={g2_bg_2}></img>
        </div>

        <p>01</p>
      </div>

      <div className="title-crs">Tư vấn chiến lược</div>
      <div className="des-crs">
        Xác định mục tiêu kinh doanh và mục tiêu truyền thông, các thách thức và
        KPI, Woay cung cấp các giải pháp cụ thể để đồng hành cùng thương hiệu
        đạt hiệu quả cao nhất.
      </div>
    </div>
  </div>,
  <div className="item" data-value="2" style={{ marginRight: "20px" }}>
    <div style={{ backgroundColor: "#fff" }}>
      <div className="image-crs">
        <div className="g2_bg_1">
          <img src={g2_bg_1}></img>
        </div>
        <div className="g2_1">
          <img src={g2_2}></img>
        </div>
        <div className="g2_bg_2">
          <img src={g2_bg_2}></img>
        </div>

        <p>02</p>
      </div>

      <div className="title-crs">Kịch bản game</div>
      <div className="des-crs">
        Thiết kế hành trình trải nghiệm của người chơi dựa trên mô hình 8 động
        lực Octalysis, nhận diện 4 tính cách người chơi nhằm điều hướng hành vi
        và tạo cảm xúc tích cực.
      </div>
    </div>
  </div>,
  <div className="item" data-value="3" style={{ marginRight: "20px" }}>
    <div style={{ backgroundColor: "#fff" }}>
      <div className="image-crs">
        <div className="g2_bg_1">
          <img src={g2_bg_1}></img>
        </div>
        <div className="g2_1">
          <img src={g2_3}></img>
        </div>
        <div className="g2_bg_2">
          <img src={g2_bg_2}></img>
        </div>

        <p>03</p>
      </div>

      <div className="title-crs">Sản xuất</div>
      <div className="des-crs">
        Phối hợp cùng thương hiệu, hoàn thiện sản phẩm dựa trên mô hình game có
        sẵn (Game studio), khởi tạo game mới hoặc tích hợp với nền tảng số
        (website, mobile application, chatbot, chuỗi cửa hàng,...)
      </div>
    </div>
  </div>,
  <div className="item" data-value="4" style={{ marginRight: "20px" }}>
    <div style={{ backgroundColor: "#fff" }}>
      <div className="image-crs">
        <div className="g2_bg_1">
          <img src={g2_bg_1}></img>
        </div>
        <div className="g2_1">
          <img src={g2_4}></img>
        </div>
        <div className="g2_bg_2">
          <img src={g2_bg_2}></img>
        </div>

        <p>04</p>
      </div>

      <div className="title-crs">Vận hành & tối ưu</div>
      <div className="des-crs">
        Xây dựng quy trình & biểu mẫu ticket để tiếp nhận yêu cầu & xử lý chuyên
        nghiệp. Cung cấp đội ngũ CSKH xử lý các tình trạng hỏi đáp & xử lý thông
        tin trong game 20/7. Tối ưu chiến dịch cùng thương hiệu nhằm đạt hiệu
        quả cao nhất.
      </div>
    </div>
  </div>,
  <div className="item" data-value="5" style={{ marginRight: "20px" }}>
    <div style={{ backgroundColor: "#fff" }}>
      <div className="image-crs">
        <div className="g2_bg_1">
          <img src={g2_bg_1}></img>
        </div>
        <div className="g2_1">
          <img src={g2_5}></img>
        </div>
        <div className="g2_bg_2">
          <img src={g2_bg_2}></img>
        </div>

        <p>05</p>
      </div>

      <div className="title-crs">Báo cáo</div>
      <div className="des-crs">
        Real-time dashboard giúp thương hiệu và Woay theo dõi và tối ưu kịp
        thời. Bên cạnh đó, báo cáo chuyên sâu định kỳ cùng những con số biết nói
        giúp thương hiệu hiểu rõ hành vi và tâm lý của khách hàng khi tham gia
        chiến dịch Gamification.
      </div>
    </div>
  </div>,
];
const contentStyle = {
  height: "100px",
};
const DichVuChuyenSau = () => {
  return (
    <>
      <div className="dichvu">
        <div className="container-css">
          <div className="main-dv">
            <div className="none"></div>
            <div className="banner-dv">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                  <h3 className="text-banner">
                    Bạn đã sẵn sàng
                    <Carousel
                      autoplay
                      autoplaySpeed={3000}
                      className="carousel-dv"
                    >
                      <div>
                        <p style={contentStyle}>tăng nhận diện thương hiệu</p>
                      </div>
                      <div>
                        <p style={contentStyle}>thúc đẩy hành vi chủ động</p>
                      </div>
                      <div>
                        <p style={contentStyle}>xóa bỏ sự nhàm chán</p>
                      </div>
                      <div>
                        <p style={contentStyle}>
                          kết nối cảm xúc với khách hàng
                        </p>
                      </div>
                      <div>
                        <p style={contentStyle}>
                          tạo hiệu ứng lan truyền mạnh mẽ
                        </p>
                      </div>
                    </Carousel>
                    Bằng Gamification Marketing?
                  </h3>
                </div>
                <div className="col-md-6 img-banner">
                  <img src={banner}></img>
                </div>
              </div>
            </div>
            <div className="partner">
              <p>Được tin cậy bởi</p>
              <div className="carousel-partner">
                <AliceCarousel
                  mouseTracking
                  items={items}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  disableButtonsControls={true}
                  disableDotsControls={true}
                  autoPlay={true}
                  autoPlayInterval={2000}
                  infinite={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="group-1">
          <div className="container-css">
            <div className="row">
              <div className="g1 col-md-7">
                <p className="g1-title">
                  Dễ dàng đạt được mục tiêu chiến dịch với Gamification.
                </p>
                <div className="g1-list">
                  <div className="item">
                    <div className="title-i">
                      <div className="icon-i">
                        <MdStar className="star" />
                      </div>
                      <p>Tăng ROI cho chiến dịch Marketing</p>
                    </div>
                    <div className="des">
                      Dù là ngắn hay dài hạn, khi sử dụng đúng cách,
                      Gamification tạo ra cơ chế chuyển đổi hiệu quả từ tương
                      tác truyền thông thành hành vi mua hàng. Chiến lược tối ưu
                      nhất khi thương hiệu đặt khách hàng vào trung tâm và thấu
                      hiểu động lực thúc đẩy hành vi.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title-i">
                      <div className="icon-i">
                        <MdStar className="star" />
                      </div>

                      <p>Thu hút tương tác giàu tính cảm xúc</p>
                    </div>
                    <div className="des">
                      Bộ não chúng ta thích game và những trải nghiệm mà game
                      mang lại, vì thế thương hiệu dễ dàng thu hút sự chú ý và
                      tương tác từ khách hàng. Từ đó, cảm xúc được tạo ra bởi
                      các yếu tố bất ngờ, phần quà thú vị và hơn hết là cảm giác
                      được chinh phục thử thách.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title-i">
                      <div className="icon-i">
                        <MdStar className="star" />
                      </div>

                      <p>Thúc đẩy lan truyền chủ động</p>
                    </div>
                    <div className="des">
                      Ứng dụng số hóa và sáng tạo hóa khiến nội dung quảng cáo
                      trở nên mới lạ hơn. Khai thác thêm cảm xúc từ yếu tố cạnh
                      tranh, bảng xếp hạng là một ví dụ cụ thể, khách hàng sẵn
                      sàng chia sẻ hoạt động và mời thêm bạn bè tham gia vào
                      chiến dịch của bạn.
                    </div>
                  </div>
                  <div className="item">
                    <div className="title-i">
                      <div className="icon-i">
                        <MdStar className="star" />
                      </div>

                      <p>Gắn kết lòng trung thành với thương hiệu</p>
                    </div>
                    <div className="des">
                      Điều hướng hành vi thông qua hệ thống nhiệm vụ,
                      Gamification tạo môi trường tương tác ý nghĩa và thường
                      xuyên giữa khách hàng với thương hiệu. Cộng hưởng với cảm
                      xúc tích cực, thương hiệu dần thắt chặt lòng trung thành
                      của khách hàng một cách tự nhiên nhất.
                    </div>
                  </div>
                </div>
                <div className="btn-dv">Tư vấn chuyên sâu</div>
              </div>
              <div className="g1 col-md-5">
                <img src={g1} alt="anh" width={"100%"}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="group-2">
          <div className="container-css">
            <div className="g2-title">
              Hãy để TM thiết kế chiến dịch Gamification
            </div>
            <div className="g2-carousel">
              <AliceCarousel
                mouseTracking
                items={items_2}
                responsive={responsive_2}
                controlsStrategy="alternate"
                // disableButtonsControls={true}
                disableDotsControls={true}
                // autoPlay={true}
                // autoPlayInterval={3000}
                // infinite={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DichVuChuyenSau;
