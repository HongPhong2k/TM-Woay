import "./Blogs.scss";
import moingay_1 from "../../../image/blogs/moi-ngay/1.png";
import moingay_2 from "../../../image/blogs/moi-ngay/2.png";
import moingay_3 from "../../../image/blogs/moi-ngay/3.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import parse from "html-react-parser";
import { useState } from "react";
const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Blogs = () => {
  //const [items_moingay, setItems_moingay] = useState([]);
  const navigate = useNavigate();
  const items_moingay = [
    <div className="item" data-value="1" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img
          src={moingay_1}
          alt="anh"
          onClick={() => navigate("/EsteeLauder")}
        />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
    <div className="item" data-value="2" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img
          src={moingay_1}
          alt="anh"
          onClick={() => navigate("/EsteeLauder")}
        />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
    <div className="item" data-value="3" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img
          src={moingay_1}
          alt="anh"
          onClick={() => navigate("/EsteeLauder")}
        />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
    <div className="item" data-value="4" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img
          src={moingay_1}
          alt="anh"
          onClick={() => navigate("/EsteeLauder")}
        />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
    <div className="item" data-value="5" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img src={moingay_1} alt="anh" />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
    <div className="item" data-value="6" style={{ marginRight: "20px" }}>
      <div className="box-blog">
        <img src={moingay_1} alt="anh" />
        <div className="text-box">
          Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho
          Burger King một chuỗi thương hiệu đồ ăn
        </div>
        <div className="des-box">
          Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, với
          sản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửa
          hàng phục vụ trên 100 quốc gia khác nhau (2018).
        </div>
      </div>
    </div>,
  ];
  // useEffect(() => {
  //   let s = "";
  //   for (let i = 1; i < 7; i++) {
  //     s =
  //       s +
  //       `<div className="item" data-value="${i}" style={{ marginRight: "20px" }}><div className="box-blog"><img src=${moingay_1} alt="anh" /><div className="text-box">Chiến dịch We Love BIG mang về mức tăng trưởng doanh thu 116% cho BurgerKing một chuỗi thương hiệu đồ ăn</div><div className="des-box">Burger King là một chuỗi thương hiệu đồ ăn nhanh nổi tiếng của Mỹ, vớisản phẩm chính là burger. Hiện tại, thương hiệu đang có hơn 17,796 cửahàng phục vụ trên 100 quốc gia khác nhau (2018).</div></div></div>`;
  //   }
  //   //setItems_moingay(parse(s));
  //   //console.log("check arrrrrr", parse(s));
  // }, []);

  const [isForm, handleForm] = useOutletContext();
  return (
    <>
      <div className="blogs">
        <div className="container-css">
          <div className="main-blog">
            <div className="none"></div>
            <div className="title-blog">
              <p>ĐỪNG PHÍ TIỀN & THỜI GIAN</p>
              <p>ĐỂ LẤY KINH NGHIỆM!</p>
              <span>
                Mà hãy tham khảo công thức: Nền tảng vững vàng + Ý tưởng hấp dẫn
                = Hiệu quả mong muốn.
              </span>
            </div>
            <div className="row box-parent">
              <div className="col-md-3">
                <div className="t-row">#Moingay1conso</div>
                <div className="des-t">
                  Chuỗi bài viết về Gamification Marketing do Woay tổng hợp &
                  soạn thảo. Thông qua việc chia sẻ con số mỗi ngày, Woay sẽ
                  giúp bạn đến gần hơn với Gamification & cách ứng dụng hiệu quả
                  vào doanh nghiệp
                </div>
                <div className="btn-t">xem tất cả</div>
              </div>
              <div className="col-md-9">
                <AliceCarousel
                  swipeDelta={5}
                  mouseTracking
                  items={items_moingay}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  disableButtonsControls={true}
                  //disableDotsControls={true}
                />
              </div>
            </div>

            <div className="row box-parent">
              <div className="col-md-3">
                <div className="t-row">Lên Ý Tưởng</div>
                <div className="des-t">
                  Dù muốn tăng doanh số hay tri ân khách hàng, bạn đều có thể
                  tìm thấy thông tin hữu ích ở đây.
                </div>
                <div className="btn-t">xem tất cả</div>
              </div>
              <div className="col-md-9">
                <AliceCarousel
                  mouseTracking
                  items={items_moingay}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  //   disableButtonsControls={true}
                  //   disableDotsControls={true}
                />
              </div>
            </div>

            <div className="row box-parent">
              <div className="col-md-3">
                <div className="t-row">Cài đặt</div>
                <div className="des-t">
                  Tự setup phần thưởng + xác suất trúng chỉ trong 30 phút!
                </div>
                <div className="btn-t">xem tất cả</div>
              </div>
              <div className="col-md-9">
                <AliceCarousel
                  mouseTracking
                  items={items_moingay}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  //   disableButtonsControls={true}
                  //   disableDotsControls={true}
                />
              </div>
            </div>

            <div className="row box-parent">
              <div className="col-md-3">
                <div className="t-row">Sự kiện</div>
                <div className="des-t">
                  Các cập nhật về tính năng, sản phẩm, và sự kiện về WOAY
                </div>
                <div className="btn-t">xem tất cả</div>
              </div>
              <div className="col-md-9">
                <AliceCarousel
                  mouseTracking
                  items={items_moingay}
                  responsive={responsive}
                  controlsStrategy="alternate"
                  //   disableButtonsControls={true}
                  //   disableDotsControls={true}
                />
              </div>
            </div>
            {/* <div class="bg-create">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
