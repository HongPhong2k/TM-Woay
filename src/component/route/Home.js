import "./Home.scss";
import banner from "../../image/p8.jpg";
import { AiTwotonePhone } from "react-icons/ai";
import Price from "../price/Price";
import FormInfo from "../form/Form";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Information from "../page/home/infomation/Information";
import Video from "../page/home/video/Video";
import Contact from "../page/home/contact/Contact";
import Review from "../page/home/review/Review";
import Partner from "../page/home/partner/Partner";
const Home = (props) => {
  const [isForm, handleForm] = useOutletContext();
  return (
    <>
      <div className="home">
        <div className="container-css">
          <div className="main">
            <img className="banner" src={banner} alt="anh"></img>
            <Information />
            <Price handleForm={handleForm} />
            <Partner />
            <Video />
            <Review handleForm={handleForm} />
            <Contact handleForm={handleForm} />
          </div>
        </div>
      </div>
      {/* {isForm && <FormInfo handleForm={handleForm} />} */}
    </>
  );
};
export default Home;
