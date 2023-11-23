import "./Review.scss";
import comment from "../../../../image/comment.jpg";
import { Divider } from "antd";
const Review = (props) => {
  const { handleForm } = props;
  return (
    <>
      <p className="title-home">Phản hồi từ khách hàng</p>

      <div className="row-r">
        <div className="col-r">
          <img src={comment} alt="comment"></img>
        </div>
        <div className="col-r">
          <img src={comment} alt="comment"></img>
        </div>
        <div className="col-r">
          <img src={comment} alt="comment"></img>
        </div>
        <div className="col-r">
          <img src={comment} alt="comment"></img>
        </div>
      </div>
      <div className="center">
        <div className="now" onClick={() => handleForm(true)}>
          liên hệ với TM
        </div>
      </div>
      <Divider />
    </>
  );
};
export default Review;
