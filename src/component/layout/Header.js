import "./Header.scss";
import logo from "../../image/logoTMS.jpg";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import ProgressBar from "../utils/ProgressBar";
import { useEffect } from "react";
import menu_icon from "../../image/home/menu-icon.png";
import { faL } from "@fortawesome/free-solid-svg-icons";
const Header = (props) => {
  const { handleForm } = props;
  const navigate = useNavigate();
  const [scrollPosition, setPosition] = useState(0);
  const [active, setActive] = useState({});
  const [openMenuMb, setOpenMenuMb] = useState(false);
  const handleNavigate = (k, p) => {
    setOpenMenuMb(false);
    if (k === "a1") setActive({ a1: true });
    if (k === "a2") setActive({ a2: true });
    if (k === "a3") setActive({ a3: true });
    if (k === "a4") setActive({ a4: true });
    if (k === "a5") setActive({ a5: true });
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
      className={scrollPosition > 300 ? "header add-box-shadow" : "header"}
      //className="header"
    >
      <ProgressBar />
      <div className="container-css">
        <div className="content">
          <div className="dot-mb" onClick={() => setOpenMenuMb(!openMenuMb)}>
            <img src={menu_icon} alt="anh"></img>
          </div>

          <div className="g-mb-h">
            <div
              className="logo-mb"
              onClick={() => {
                setOpenMenuMb(false);
                navigate("/");
                setActive({});
              }}
            >
              <img src={logo} alt="anh" />
            </div>
            <div className="btn-lienhe-mb" onClick={() => handleForm(true)}>
              Tư vấn vòng quay
            </div>
          </div>

          {/* /// */}
          <div
            className="menu-mb"
            style={openMenuMb ? { display: "block" } : { display: "none" }}
          >
            <li
              onClick={() => handleNavigate("a1", "san-pham")}
              className={active.a1 ? "active-h-mb" : ""}
            >
              sản phẩm
            </li>
            <li
              onClick={() => handleNavigate("a2", "bang-gia")}
              className={active.a2 ? "active-h-mb" : ""}
            >
              bảng giá
            </li>
            <li
              onClick={() => handleNavigate("a3", "case-study")}
              className={active.a3 ? "active-h-mb" : ""}
            >
              case study
            </li>
            <li
              onClick={() => handleNavigate("a4", "dich-vu-chuyen-sau")}
              className={active.a4 ? "active-h-mb" : ""}
            >
              dịch vụ chuyên sâu
            </li>
            <li
              onClick={() => handleNavigate("a5", "blogs")}
              className={active.a5 ? "active-h-mb" : ""}
            >
              Blogs
            </li>
            <div
              className="btn-menu"
              onClick={() => {
                handleForm(true);
                setOpenMenuMb(false);
              }}
            >
              Tư vấn vòng quay
            </div>
          </div>
          <div
            className="logo"
            onClick={() => {
              setOpenMenuMb(false);
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
              <li
                onClick={() => handleNavigate("a5", "blogs")}
                className={active.a5 ? "active-h" : ""}
              >
                Blogs
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
