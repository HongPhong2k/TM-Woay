import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";
import { useState } from "react";
import FormInfo from "../form/Form";
import Contact from "../page/home/contact/Contact";
import ScrollToTop from "./ScrollTop";
const Layout = () => {
  const [isForm, setIsForm] = useState(false);
  const handleForm = (b) => {
    setIsForm(b);
  };
  return (
    <>
      <ScrollToTop />
      <div
        className="layout"
        style={
          isForm
            ? {
                pointerEvents: "none",
                backgroundColor: "#ccc",
                opacity: "0.2",
              }
            : {}
        }
      >
        <Header handleForm={handleForm} />
        <Outlet context={[isForm, handleForm]} />
        <Footer />
        <Contact handleForm={handleForm} />
      </div>
      {isForm && <FormInfo handleForm={handleForm} />}
    </>
  );
};
export default Layout;
