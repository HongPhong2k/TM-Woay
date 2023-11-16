import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";
import { useState } from "react";
import FormInfo from "../form/Form";
const Layout = () => {
  const [isForm, setIsForm] = useState(false);
  const handleForm = (b) => {
    setIsForm(b);
  };
  return (
    <>
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
        <Header />
        <Outlet context={[isForm, handleForm]} />
        <Footer />
      </div>
      {isForm && <FormInfo handleForm={handleForm} />}
    </>
  );
};
export default Layout;
