import bg from "../../../image/case-study/anh1.png";
import "./EsteeLauder.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import logo1 from "../../../image/vong quay da thiet ke.jpg";
import logo2 from "../../../image/vong quay da thiet ke2.jpg";
import logo3 from "../../../image/pricing-3.png";
import logo4 from "../../../image/pricing-4.png";
import logo5 from "../../../image/vong quay da thiet ke3.jpg";
import { useOutletContext } from "react-router-dom";

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
const EsteeLauder = () => {
  const [isForm, handleForm] = useOutletContext();
  return (
    <>
      <div className="baiviet">
        <div className="container-baiviet">
          <div className="none"></div>
          <div className="bg-es">
            <img src={bg} alt="anh"></img>
            <div className="quote-bg">
              Thương hiệu đã đặt mục tiêu tri ân khách hàng vào tháng 6 bằng
              cách sử dụng gamification, đồng thời kết hợp với một chiến dịch có
              thể bao gồm 4 thương hiệu con khác.
            </div>
          </div>
          <div className="main-es">
            <div className="thuonghieu">
              <span className="title-bv">Thương hiệu</span>
              <p>
                Estee Lauder là một trong những công ty về mỹ phẩm hàng đầu từ
                Mỹ và được yêu thích bởi sản phẩm chất lượng. Chiến dịch tri ân
                này cũng bao gồm các thương hiệu con của Estee Lauder như MAC,
                Bobbi Brown, Estee Lauder và Clinique.
              </p>
              <img
                src="https://library.woay.io/public/article-images/b4995a0d-bd36-4ae3-8bc4-e7db297dbb95.webp"
                width="700"
                height="400"
                alt=""
              ></img>
            </div>
            <div className="muctieu">
              <span className="title-bv">Mục tiêu</span>
              <p>
                Thương hiệu đã đặt mục tiêu tri ân khách hàng vào tháng 6 bằng
                cách sử dụng gamification, đồng thời kết hợp với một chiến dịch
                có thể bao gồm 4 thương hiệu con khác.
              </p>
              <p>
                Trong chiến dịch này, thương hiệu WOAY đã chọn sử dụng VQMM
                (Vòng Quay May Mắn) và tận dụng các điểm đặc biệt của các sản
                phẩm đặc trưng của thương hiệu để tạo nét riêng và hấp dẫn cho
                chiến dịch. Gamification được sử dụng như một phương thức để thu
                hút sự quan tâm và tham gia của khách hàng. Thông qua VQMM,
                người chơi có cơ hội quay vòng để nhận được các phần quà và lợi
                ích đặc biệt từ thương hiệu. Đồng thời, việc kết hợp các điểm
                đặc trưng của các sản phẩm của thương hiệu trong chiến dịch cũng
                giúp tạo nên một trải nghiệm độc đáo và khác biệt cho khách
                hàng.
              </p>
              <p>
                Mục tiêu của chiến dịch này là tri ân khách hàng và tạo ra một
                trải nghiệm thú vị và hấp dẫn trong tháng 6. Sự kết hợp giữa
                gamification và các thương hiệu con khác giúp thương hiệu WOAY
                tạo nên một chiến dịch đa dạng, mang lại giá trị cho khách hàng
                và đồng thời tăng cường sự nhận diện và tương tác với các sản
                phẩm đặc trưng của thương hiệu.
              </p>
            </div>
            <div className="gameplay">
              <span className="title-bv">Gameplay</span>
              <p>
                Tại đây WOAY chọn kịch bản trúng nhanh để kích thích người chơi
                tham gia vào chiến dịch, chỉ cần đăng nhập và chơi là nhận ngay
                quà. Vì là kịch bản trúng nhanh trong một lượt chơi nên WOAY
                cũng không kết hợp thêm các nhiệm vụ tìm lượt.
              </p>
              <img
                src="https://library.woay.io/public/article-images/7288d5aa-f709-44da-8462-6b3e1194b1b7.png"
                width="100%"
                alt=""
              ></img>
              <ul>
                <li>
                  MAC: mâm vòng quay được thiết kế như một hộp phấn má hồng, với
                  các mảnh vòng là những màu sắc thường nổi bật của thương hiệu
                </li>
                <li>
                  Bobbi Brown: mâm vòng quay được bao quanh bởi màu đỏ rượu của
                  dòng son đặc trưng của thương hiệu
                </li>
                <li>
                  Estee Lauder: vòng quay được bao quanh màu sắc xanh trắng của
                  bộ sưu tập mùa hè.
                </li>
                <li>
                  Clinique:mâm vòng của Clinique được lấy từ màu của bộ 3 dưỡng
                  ẩm nổi tiếng của thương hiệu
                </li>
              </ul>
            </div>
            <div className="userflow">
              <span className="title-bv">Userflow</span>
              <p>
                Phần user flow là một trong những phần quan trọng của một chiến
                dịch gamification, vì từ user flow thương hiệu hướng người chơi
                để hoàn thành những nhiệm vụ để đạt được những mục tiêu ban đầu.
              </p>
              <p>
                Những chiến dịch trước đây Estee Lauder sẽ yêu cầu người chơi
                hoàn thành đơn hàng mới có thể tham gia, thì với chiến dịch lần
                này thương hiệu không đặt yêu cầu này lên người chơi.
              </p>
              <p>
                Điều này mang lại cho người chơi sự thoải mái và tự do hơn trong
                việc tham gia trò chơi, đồng thời giúp thương hiệu thu hút được
                nhiều sự quan tâm hơn từ khách hàng tiềm năng.
              </p>
            </div>
            <div className="phanthuong">
              <span className="title-bv">Phần thưởng</span>
              <p>
                Voucher: Với voucher điều kiện áp dụng cho đơn hàng tiếp theo
                việc này cũng giúp thương hiệu gia tăng thêm doanh số bán hàng
                vì đa phần người chơi cũng không muốn bỏ qua cơ hội khuyến mãi
              </p>
              <p>
                Bộ sản phẩm: Bộ sản phẩm đến từ thương hiệu vừa được người chơi
                đánh giá cao bởi chất lượng và giá thành, nên đây cũng là mồi
                câu để người chơi tích cực tham gia để nhận được phần thưởng.
              </p>
            </div>
            <div className="ketqua">
              <span className="title-bv">Kết quả</span>
              <p>
                Chiến dịch được diễn ra ở 4 thương hiệu con của công ty Estee
                Lauder và đã hoàn thành được mục tiêu đề ra khi tỷ lệ tham gia
                của khách hàng đạt gần 70%.
              </p>
            </div>
            <div className="none"></div>
          </div>
        </div>
        <div className="container-css">
          <div className="partner">
            <p>Khàng hàng tin dùng</p>
            <div className="carousel-partner">
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                disableButtonsControls={true}
                //disableDotsControls={true}
                autoPlay={true}
                autoPlayInterval={2000}
                infinite={true}
              />
            </div>
          </div>
          <div class="bg-create">
            <div className="bg-img"></div>
            <div class="box-info-create">
              <h5 class="title-create">
                TẠO CHIẾN DỊCH GAMIFICATION THU HÚT CHỈ TRONG 5 PHÚT
              </h5>
              <p class="desc-create">
                Nền tảng WOAY giúp bạn tạo chiến dịch gamification chỉ trong 5
                phút, với hơn 60 skin game đẹp và đa dạng ngành hàng có sẵn.
                Đăng ký nhận tư vấn từ chuyên gia của chúng tôi để thiết kế
                chiến dịch phù hợp nhất với doanh nghiệp của bạn.
              </p>
            </div>
            <div class="box-img-phone">
              <img
                src="https://www.woay.vn/uploads/group_57_1692264291.png"
                alt="hinh phai"
              />
            </div>
            <div class="btn-bg" onClick={() => handleForm(true)}>
              Tư vấn tạo Game
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsteeLauder;
