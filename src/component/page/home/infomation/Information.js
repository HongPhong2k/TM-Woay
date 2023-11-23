import "./Information.scss";
import vongquaylagi from "../../../../image/vongquaylagi.png";
import visaosudung from "../../../../image/vì sao su dung.png";
import haychonTM from "../../../../image/haychonTM.png";
import article_4 from "../../../../image/home/article-4.png";
const Information = () => {
  return (
    <div className="information">
      <div className="row">
        <div className="col-xs-12 col-sm-6  col-xl-6 box-info">
          <h3>Thiết kế dễ dàng. Chỉ trong 5 phút.</h3>
          <p>
            Thư viện sáng tạo (Game Studio) với nhiều mẫu game. Tùy chỉnh linh
            hoạt theo nhu cầu của bạn với: màu sắc, logo thương hiệu, hình ảnh
            quà tặng...
          </p>
        </div>
        <div className="col-xs-12 col-sm-6 col-xl-6 img-info">
          <img src={vongquaylagi} alt="anh" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-xl-6 anh-mb box-info">
          <h3>Đa dạng mục tiêu. Phù hợp mọi chiến dịch.</h3>
          <p>
            Ứng dụng Gamification Marketing trên nền tảng WOAY giúp bạn tối ưu
            mọi loại hình chiến dịch Marketing: Nhận diện thương hiệu, Xúc tiến
            bán hàng, Thu thập dữ liệu người dùng…
          </p>
        </div>
        <div className="col-sm-6 col-xl-6 img-info">
          <img src={visaosudung} alt="anh" />
        </div>
        <div className="col-sm-6 col-xl-6 anh-pc box-info">
          <h3>Đa dạng mục tiêu. Phù hợp mọi chiến dịch.</h3>
          <p>
            Ứng dụng Gamification Marketing trên nền tảng WOAY giúp bạn tối ưu
            mọi loại hình chiến dịch Marketing: Nhận diện thương hiệu, Xúc tiến
            bán hàng, Thu thập dữ liệu người dùng…
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-xl-6 box-info">
          <h3>Tích hợp đa nền tảng, tự động hóa</h3>
          <p>
            Các game của WOAY rất dễ dàng phân phối trên nhiều nền tảng:
            Fanpage, Chatbot, Website, Wifi Marketing…; tích hợp với các hệ
            thống automation khác của DN như: CRM, SMS...
          </p>
        </div>
        <div className="col-sm-6 col-xl-6 img-info">
          <img src={haychonTM} alt="anh" />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-6 col-xl-6 anh-mb box-info">
          <h3>Quản trị tập trung: quà tặng, dữ liệu</h3>
          <p>
            Giúp bạn tối ưu nguồn lực trong việc vận hành chiến dịch trong việc
            quản trị người chơi, tình trạng quà tặng - trao quà… Báo cáo
            real-time hiệu quả chiến dịch.
          </p>
        </div>
        <div className="col-sm-6 col-xl-6 img-info">
          <img src={article_4} alt="anh" />
        </div>
        <div className="col-sm-6 col-xl-6 box-info anh-pc">
          <h3>Quản trị tập trung: quà tặng, dữ liệu</h3>
          <p>
            Giúp bạn tối ưu nguồn lực trong việc vận hành chiến dịch trong việc
            quản trị người chơi, tình trạng quà tặng - trao quà… Báo cáo
            real-time hiệu quả chiến dịch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
