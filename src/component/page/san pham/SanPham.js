import { useEffect, useState } from "react";
import "./SanPham.scss";
import { useRef } from "react";
import CustomizedSnackbars from "../../utils/CustomSnackbar";
import { FaCheck } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
const SanPham = () => {
  const [isForm, handleForm] = useOutletContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refPhone = useRef(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCheck(false);
    }, 5000);
  }, [check]);
  const isVietnamesePhoneNumber = (number) => {
    return /(03|05|07|08|09)+([0-9]{8})\b/.test(number);
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleDangki = () => {
    if (!name) {
      setCheck(true);
      refName.current.focus();
      refName.current.style.border = "1px solid red";
      return;
    } else {
      refName.current.style.border = "1px solid black";
    }
    if (!validateEmail(email)) {
      setCheck(true);
      refEmail.current.focus();
      refEmail.current.style.border = "1px solid red";
      return;
    } else {
      refEmail.current.style.border = "1px solid black";
    }
    if (!isVietnamesePhoneNumber(phone)) {
      setCheck(true);
      refPhone.current.focus();
      refPhone.current.style.border = "1px solid red";
      return;
    } else {
      refPhone.current.style.border = "1px solid black";
    }
  };
  return (
    <>
      <div className="sanpham">
        <div className="container-css">
          <div className="main-sp">
            <div className="none"></div>
            <div className="title-sp">
              <h3>
                Chỉ mất 5 phút để bạn cài đặt & phát hành minigame đa kênh
              </h3>
              <p>
                Nền tảng thiết kế minigame của Woay giúp bạn dễ dàng sáng tạo
                kịch bản & phù hợp với nhiều hình thức, quy mô vận hành.
              </p>
            </div>
            <div className="des-sp">
              <div className="img-sp">
                <div className="box-sp">
                  <img
                    src="https://www.woay.vn/uploads/thiet-ke-landingpage_1554523657.svg"
                    alt="Tùy chỉnh thiết kế giao diện Woay Page"
                  />
                  <p>Tùy chỉnh thiết kế giao diện Woay Page</p>
                </div>
                <div className="box-sp">
                  <img
                    src="https://www.woay.vn/uploads/vong-quay-giudeline_1554523223.svg"
                    alt="Dùng mẫu sẵn có hoặc tải file thiết kế của bạn"
                  />
                  <p>Dùng mẫu sẵn có hoặc tải file thiết kế của bạn</p>
                </div>
                <div className="box-sp">
                  <img
                    src="https://www.woay.vn/uploads/google-sheet_1563244411.svg"
                    alt="Đồng bộ dữ liệu realtime qua Google Sheet hoặc file Excel"
                  ></img>
                  <p>
                    Đồng bộ dữ liệu realtime qua Google Sheet hoặc file Excel
                  </p>
                </div>
                <div className="box-sp">
                  <img
                    src="https://www.woay.vn/uploads/nhan-thuong-sms_1563244411.svg"
                    alt="Gửi email trúng thưởng hoặc gửi phần thưởng qua tin nhắn"
                  />
                  <p>
                    Gửi email trúng thưởng hoặc gửi phần thưởng qua tin nhắn
                  </p>
                </div>
              </div>
            </div>
            <div className="form-sp">
              <div className="row d-flex align-items-center">
                <div className="col-lg-3">
                  <input
                    ref={refName}
                    type="text"
                    placeholder="Họ tên"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>

                <div className="col-lg-3">
                  <input
                    ref={refEmail}
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                </div>
                <div className="col-lg-3">
                  <input
                    ref={refPhone}
                    type="text"
                    placeholder="Số điện thoại"
                    className="form-control"
                    onChange={(e) => setPhone(e.target.value)}
                  ></input>
                </div>
                <div className="col-lg-3 btn-dangki-sp" onClick={handleDangki}>
                  Đăng ký
                </div>
              </div>
            </div>
            <div className="none"></div>
            <h4>NHIỀU TÍNH NĂNG HƠN - TỐI ƯU HƠN</h4>
            <div className="row mt-5">
              <div className="col-lg-7">
                <img
                  src="https://www.woay.vn/uploads/ezgif_1698461869.com-gif-maker.gif"
                  alt="ezgif 1698461869.com gif maker"
                />
              </div>
              <div className="col-lg-5">
                <p className="t1">KHO GAME ĐA DẠNG</p>
                <p className="t2">KHÁCH HÀNG HỨNG THÚ THƯƠNG HIỆU NĂNG ĐỘNG</p>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>40+ mẫu game có sẵn cho thương hiệu lựa chọn</p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Phù hợp với nhiều thời điểm: sinh nhật, siêu sale, Tết,
                    Trung thu, mùa hè, giáng sinh,…
                  </p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Thỏa mãn nhu cầu đổi mới của thương hiệu và người tiêu dùng
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-7">
                <img
                  src="https://www.woay.vn/uploads/ezgif_1698461215.com-video-to-gif_(1).gif"
                  alt="ezgif 1698461215.com video to gif (1)"
                />
              </div>
              <div className="col-lg-5">
                <p className="t1">NHIỀU HÌNH THỨC XÁC THỰC,</p>
                <p className="t2">THU THẬP ĐÚNG THÔNG TIN</p>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Tăng chất lượng data thông qua xác thực Zalo, Facebook,
                    Google, SMS
                  </p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>Tùy chỉnh thu thập data linh động</p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Thu thập thông tin cần thiết, ngăn chặn spam, tránh gian lận
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-7">
                <img
                  src="https://www.woay.vn/uploads/da-dang-tich-hop.gif"
                  alt="da dang tich hop"
                />
              </div>
              <div className="col-lg-5">
                <p className="t1">TẠO GAME MỘT LẦN </p>
                <p className="t2">HOẠT ĐỘNG ĐA KÊNH</p>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Hoạt động Woay Page trên sub-domain (vd:
                    minigame.tenmiencuaban.vn)
                  </p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>Tích hợp vào Landing Page sẵn có</p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>Hoạt động dạng popup đồng loạt trên tất cả site vệ tinh</p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Đa dạng hơn khi tích hợp với các hệ thống khác (SMS
                    Brandname, POS, CRM ...)
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-7">
                <img
                  src="https://www.woay.vn/uploads/tinh-nang-trao-thuong.jpg"
                  alt="tinh nang trao thuong"
                  width={"90%"}
                />
              </div>
              <div className="col-lg-5">
                <p className="t1">HỆ THỐNG TRAO QUÀ </p>
                <p className="t2">TRÁNH GIAN LẬN TỪ KHÁCH & NHÂN VIÊN</p>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Bộ tính năng lưu trữ & tìm kiếm thông tin khách hàng, phần
                    thưởng dễ dàng
                  </p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Cơ chế trao quà an toàn - Tránh nhân viên tự lấy phần quà
                  </p>
                </div>
                <div className="list-feature">
                  <div className="icon-feature">
                    <FaCheck />
                  </div>
                  <p>
                    Phân quyền đa dạng cho cả quy mô dạng chuỗi (Coop Smile tin
                    dùng với hơn 100 cửa hàng)
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="btn-dangki-sp-bottom"
                onClick={() => handleForm(true)}
              >
                Đăng ký
              </div>
            </div>
          </div>
        </div>
      </div>
      {check && <CustomizedSnackbars check={check} />}
    </>
  );
};

export default SanPham;
