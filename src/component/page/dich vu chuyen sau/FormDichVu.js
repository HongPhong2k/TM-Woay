import { useState } from "react";
import "./FormDichVu.scss";
import CustomizedSnackbars from "../../utils/CustomSnackbar";
import { useEffect } from "react";
import { useRef } from "react";

const chienDichArr = [
  "Webgame",
  "Video/Photo contest",
  "Instant game",
  "Tích hợp ứng dụng di động",
  "Khác",
];

const nganSachArr = [
  "15 - 24 triệu",
  "25 - 50 triệu",
  "51 - 100 triệu",
  "trên 100 triệu",
];
const FormDichVu = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cty, setCty] = useState("");
  const [chienDich, setChienDich] = useState("");
  const [nganSach, setNganSach] = useState("");
  const [textArea, setTextArea] = useState("");
  const [check, setCheck] = useState(false);
  const refName = useRef("");
  const refPhone = useRef("");
  const refEmail = useRef("");
  const refCty = useRef("");
  const refChienDich = useRef("");
  const refNganSach = useRef("");
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
  const handleSentForm = () => {
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
    if (!cty) {
      setCheck(true);
      refCty.current.style.border = "1px solid red";
      return;
    } else {
      refCty.current.style.border = "1px solid black";
    }
    if (!chienDich) {
      setCheck(true);
      refChienDich.current.style.border = "1px solid red";
      return;
    } else {
      refChienDich.current.style.border = "1px solid black";
    }
    if (!nganSach) {
      setCheck(true);
      refNganSach.current.style.border = "1px solid red";
      return;
    } else {
      refNganSach.current.style.border = "1px solid black";
    }
    console.log(
      "formmmm: ",
      name,
      phone,
      email,
      cty,
      chienDich,
      nganSach,
      textArea
    );
  };
  return (
    <>
      <div className="form-dv">
        <p>Bạn đã sẵn sàng sở hữu chiến dịch lôi cuốn hơn?</p>
        <p style={{ color: "var(--color-main)", marginBottom: "50px" }}>
          Hãy thảo luận cùng TM!
        </p>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Họ tên"
              onChange={(e) => setName(e.target.value)}
              ref={refName}
            ></input>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              ref={refEmail}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Số điện thoại"
              onChange={(e) => setPhone(e.target.value)}
              ref={refPhone}
            ></input>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Tên công ty"
              onChange={(e) => setCty(e.target.value)}
              ref={refCty}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => setChienDich(chienDichArr[+e.target.value - 1])}
              ref={refChienDich}
            >
              <option selected>Loại chiến dịch</option>
              <option value="1">Webgame</option>
              <option value="2">Video/Photo contest</option>
              <option value="3">Instant game</option>
              <option value="4">Tích hợp ứng dụng di động </option>
              <option value="5">Khác</option>
            </select>
          </div>
          <div className="col-md-6">
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => setNganSach(nganSachArr[+e.target.value - 1])}
              ref={refNganSach}
            >
              <option selected>Ngân sách dự kiến</option>
              <option value="1">15 - 24 triệu</option>
              <option value="2">25 - 50 triệu</option>
              <option value="3">51 - 100 triệu</option>
              <option value="4">trên 100 triệu</option>
            </select>
          </div>
          <div className="text-area">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Ghi chú thảo luận"
              onChange={(e) => setTextArea(e.target.value)}
            ></textarea>
          </div>
          <div className="btn-g4" onClick={handleSentForm}>
            Gửi yêu cầu
          </div>
        </div>
      </div>
      {check && <CustomizedSnackbars check={check} />}
    </>
  );
};

export default FormDichVu;
