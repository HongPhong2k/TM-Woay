import "./Header.scss";
import logo from "../../image/logoTMS.jpg";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import ProgressBar from "../utils/ProgressBar";
import { useEffect } from "react";

const Header = (props) => {
  const { handleForm } = props;
  const navigate = useNavigate();
  const [scrollPosition, setPosition] = useState(0);
  const [active, setActive] = useState({});
  const handleNavigate = (k, p) => {
    if (k === "a1") setActive({ a1: true });
    if (k === "a2") setActive({ a2: true });
    if (k === "a3") setActive({ a3: true });
    if (k === "a4") setActive({ a4: true });

    navigate(p);
  };
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.scrollY);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return (
    <div
      //className={scrollPosition > 300 ? "header-sticky" : "header"}
      className="header"
    >
      <ProgressBar />
      <div className="container-css">
        <div
          //className={scrollPosition > 300 ? "content-sticky" : "content"}
          className="content"
        >
          <div
            className="logo"
            onClick={() => {
              navigate("/");
              setActive({});
            }}
          >
            <img src={logo} alt="anh" />
          </div>
          <div className="menu">
            <div className="list">
              <li
                onClick={() => handleNavigate("a1", "san-pham")}
                className={active.a1 ? "active-h" : ""}
              >
                sản phẩm
              </li>
              <li
                onClick={() => handleNavigate("a2", "bang-gia")}
                className={active.a2 ? "active-h" : ""}
              >
                bảng giá
              </li>
              <li
                onClick={() => handleNavigate("a3", "case-study")}
                className={active.a3 ? "active-h" : ""}
              >
                case study
              </li>
              <li
                onClick={() => handleNavigate("a4", "dich-vu-chuyen-sau")}
                className={active.a4 ? "active-h" : ""}
              >
                dịch vụ chuyên sâu
              </li>
            </div>
          </div>
          <div className="btn-lienhe" onClick={() => handleForm(true)}>
            Tư vấn vòng quay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
