import "./Form.scss";
import iconname from "../../image/icon-name.png";
import iconphone from "../../image/icon-phone.png";
import iconemail from "../../image/icon-email.png";
import iconweb from "../../image/icon-web.png";
import logo from "../../image/logo-modal-1.png";
import close from "../../image/btn-close.png";
import { useEffect, useRef, useState } from "react";

const FormInfo = (props) => {
  const { handleForm } = props;
  const [active, setActive] = useState({ a1: true });

  const refOutside = useRef(null);
  const handleActive = (b) => {
    if (b === "name") setActive({ a1: true });
    if (b === "email") setActive({ a2: true });
    if (b === "phone") setActive({ a3: true });
    if (b === "web") setActive({ a4: true });
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);
  const handleClickOutside = (e) => {
    if (
      refOutside &&
      refOutside.current &&
      !refOutside.current.contains(e.target)
    ) {
      refOutside.current.classList.add("out");
      setTimeout(() => {
        handleForm(false);
      }, 500);
    }
  };
  const handleClose = () => {
    refOutside.current.classList.add("out");
    setTimeout(() => {
      handleForm(false);
    }, 500);
  };
  return (
    <div className="formm " ref={refOutside}>
      <div className="modal-info">
        <div className="btn-close" onClick={handleClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          ></svg>
        </div>
        <div className="logo">
          <img src={logo} alt="anh" />
        </div>
        <div className="text">
          <p>Bạn vui lòng điền thông tin để TM </p>
          <p>có thể tư vấn tốt nhất nhé!</p>
        </div>
        <form className="row ">
          <div className="col-md-12">
            <div
              className={active.a1 ? "activec custom-input" : "custom-input"}
              onClick={() => handleActive("name")}
            >
              <img src={iconname} alt="anh" />
              <input type="text" required placeholder=" Họ tên" />
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div
              className={active.a2 ? "activec custom-input" : "custom-input"}
              onClick={() => handleActive("email")}
            >
              <img src={iconemail} alt="anh" />
              <input type="text" required placeholder=" Email" />
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div
              className={active.a3 ? "activec custom-input" : "custom-input"}
              onClick={() => handleActive("phone")}
            >
              <img src={iconphone} alt="anh" />
              <input type="text" required placeholder=" Số điện thoại" />
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div
              className={active.a4 ? "activec custom-input" : "custom-input"}
              onClick={() => handleActive("web")}
            >
              <img src={iconweb} alt="anh" />
              <input type="text" required placeholder=" Website" />
            </div>
          </div>
          <div className="col-12 mt-5">
            <button className="btn btn-primary advise" type="submit">
              Tư vấn cho tôi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormInfo;
