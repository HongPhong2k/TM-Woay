import "./Product.scss";
import p1 from "../../../../image/vong quay da thiet ke.jpg";
import p2 from "../../../../image/vong quay da thiet ke2.jpg";
import p3 from "../../../../image/vong quay da thiet ke3.jpg";
const Product = () => {
  return (
    <>
      <div className="css-title">
        <p className="title">Các mẫu thiết kế</p>
      </div>
      <div className="product">
        <div className="main">
          <img src={p1} alt="anh" />
          <img src={p2} alt="anh" />
          <img src={p3} alt="anh" />
        </div>
      </div>
    </>
  );
};
export default Product;
