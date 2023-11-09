import "./LandingPage.scss";
import banner from "../../image/p8.jpg";
import { AiTwotonePhone } from "react-icons/ai";
import Contact from "../contact/Contact";
import Information from "../infomation/Information";
import Price from "../price/Price";
import Partner from "../partner/Partner";
import Video from "../video/Video";
import Review from "../review/Review";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page">
        <div className="container">
          <div className="main">
            <img className="banner" src={banner} alt="anh"></img>
            <Information />
            <Price />
            <Partner />
            <Video />
            <Review />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
