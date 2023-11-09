import { AiTwotonePhone } from "react-icons/ai";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="phone">
        <AiTwotonePhone />
      </div>
      <div className="zalo">
        <img src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" />
      </div>
    </div>
  );
};

export default Contact;
