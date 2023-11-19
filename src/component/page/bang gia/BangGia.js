import { useOutletContext } from "react-router-dom";
import Price from "../../price/Price";
import "./BangGia.scss";
const BangGia = () => {
  const [isForm, handleForm] = useOutletContext();
  return (
    <>
      <div className="bang-gia">
        <div className="container-css">
          <div className="title-bg">
            <p>Tăng độ nhận diện thương hiệu và tăng doanh số</p>
            <p>với nền tảng thiết kế của TM</p>
          </div>
          <div className="btn-dangki">
            <div className="text" onClick={() => handleForm(true)}>
              Đăng kí ngay
            </div>
          </div>

          <Price handleForm={handleForm} />
        </div>
      </div>
    </>
  );
};

export default BangGia;
