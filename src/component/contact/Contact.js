import { AiTwotonePhone } from "react-icons/ai";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="center-p">
        <div className="phone">
          <AiTwotonePhone />
        </div>
      </div>
      <div
        className="zalo"
        onClick={() =>
          window.open("https://zalo.me/3440209727704010772", "_blank")
        }
      >
        <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" />
      </div>
    </div>
  );
};

export default Contact;
