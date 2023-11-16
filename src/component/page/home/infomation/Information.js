import "./Information.scss";
import vongquaylagi from "../../../../image/vongquaylagi.png";
import visaosudung from "../../../../image/vì sao su dung.png";
import haychonTM from "../../../../image/haychonTM.png";
const Information = () => {
  return (
    <div className="information">
      <div className="row ">
        <div className="col-xl-6 ">
          <h3>Vòng quay may mắn là gì ?</h3>
          <p>
            - Là một trò chơi rất phổ biến đối với mọi người. Hầu như ai cũng đã
            từng một lần chơi qua trò chơi này. Ngày xưa với những vòng quay
            thực tế. Với những vòng quay thường rất to và vướng nên chỉ những sự
            kiện lớn như hội chợ, khuyến mại hàng hóa...thì mới sử dụng đến.
          </p>
          <p>
            - Trong thời đại bùng nổ công nghệ như hiện nay. Việc các doanh
            nghiệp sử dụng vòng quay may mắn trên internet để làm truyền thông,
            tổ chức mini game, trao quà tới khách hàng,… được phổ biến hơn bao
            giờ hết.
          </p>
        </div>
        <div className="col-xl-6">
          <img src={vongquaylagi} alt="anh" />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <img src={visaosudung} alt="anh" />
        </div>
        <div className="col-xl-6">
          <h3>Vì sao nên sử dụng vòng quay may mắn làm Marketing ?</h3>
          <p>
            -Tăng tương tác, thu hút khách hàng nhanh chóng: Vòng quay may mắn
            là trò chơi có tính tương tác cao, vui nhộn và đánh đúng vào tâm lý
            “muốn dành chiến thắng” nên sẽ thu hút được sự chú ý nhanh chóng
          </p>
          <p>
            - Hiệu quả về chi phí: So với những phương án tiếp thị truyền thống
            khác như quảng cáo ngoài trời, tổ chức sự kiện, TVC,… thì trò chơi
            vòng quay may mắn dễ triển khai và tiết kiệm chi phí hơn rất nhiều.
          </p>
          <p>
            - Nâng cao lòng trung thành của khách hàng: Bằng cách cung cấp cho
            khách hàng một trải nghiệm trò chơi trúng thưởng thú vị, bạn có thể
            khiến họ cảm thấy hào hứng hơn với thương hiệu và nhiều khả năng sẽ
            trở lại mua sản phẩm.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <h3>Vì sao bạn nên hợp tác với TM Software ?</h3>
          <p>
            TM tự hào giới thiệu đến bạn giải pháp mới - vòng quay may mắn giải
            pháp tối ưu hiệu quả nhất cho marketing. Được phát triển dựa trên
            nền tảng công nghệ tiên tiến, vòng quay may mắn của chúng tôi mang
            đến những lợi ích tuyệt vời cho doanh nghiệp của bạn
          </p>
          <p>
            marketing online đã trở thành một trong những phương pháp quảng cáo
            hiệu quả nhất để đưa sản phẩm và dịch vụ đến tận tay khách hàng. Tuy
            nhiên, việc tìm kiếm phương pháp marketing hiệu quả tiết kiệm chi
            phí và tiện lợi nhanh chóng không phải lúc nào cũng dễ dàng. Hiểu
            được tâm lý đó, TM Software đã đưa ra giải pháp mới mang tên "Vòng
            quay may mắn" để giúp doanh nghiệp tăng cường hiệu quả marketing
            online một cách đáng kể mà chi phí lại phù hợp với yêu cầu
          </p>
        </div>
        <div className="col-xl-6">
          <img src={haychonTM} alt="anh" />
        </div>
      </div>
    </div>
  );
};

export default Information;
