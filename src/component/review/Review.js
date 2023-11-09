import "./Review.scss";
import comment from "../../image/comment.jpg";
import { Divider } from "antd";
const Review = () => {
  return (
    <>
      <h2>Phản hồi từ khách hàng</h2>
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
        <div className="now">liên hệ với TM</div>
      </div>
      <Divider />
    </>
  );
};
export default Review;
