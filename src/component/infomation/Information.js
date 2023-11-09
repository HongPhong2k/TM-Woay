import { useRef } from "react";
import "./Information.scss";
const Information = () => {
  const refA2 = useRef(null);
  const refV2 = useRef(null);
  const refA3 = useRef(null);
  const handleViewA1 = () => {
    refA2.current.style.display = "inline-block";
    refV2.current.style.display = "none";
  };
  return (
    <div className="information">
      <h2>Tổng quan</h2>
      <h4> Vòng Quay May Mắn là gì ?</h4>
      <ul>
        <li>
          Vòng Quay May Mắn là một trò chơi rất phổ biến đối với mọi người. Hầu
          như ai cũng đã từng một lần chơi qua trò chơi này. Ngày xưa với những
          vòng quay thực tế. Với những vòng quay thường rất to và vướng nên chỉ
          những sự kiện lớn như hội chợ; khuyến mại hàng hóa,… thì mới sử dụng
          đến. Nhưng với sự thú vị cũng như khả năng thu hút khách hàng của vòng
          quay may mắn thì ngày nay. Trong thời đại bùng nổ công nghệ như hiện
          nay. Việc các doanh nghiệp sử dụng vòng quay may mắn trên internet để
          làm truyền thông, tổ chức mini game, trao quà tới khách hàng,… được
          phổ biến hơn bao giờ hết.
        </li>
      </ul>
      <h4>Vì sao nên sử dụng vòng quay may mắn cho chương trình Marketing ?</h4>
      <ul>
        <li>
          TM tự hào giới thiệu đến bạn giải pháp mới - vòng quay may mắn giải
          pháp tối ưu hiệu quả nhất cho marketing. Được phát triển dựa trên nền
          tảng công nghệ tiên tiến, vòng quay may mắn của chúng tôi mang đến
          những lợi ích tuyệt vời cho doanh nghiệp của bạn{" "}
          <span id="dots">...</span>
        </li>
        <span id="more" ref={refA2}>
          <li>
            Vòng quay may mắn là một trong những hình thức Game tương tác phổ
            biến nhất hiện nay. Với ưu điểm dễ chơi, dễ trúng, loại mini game
            này đang được rất nhiều doanh nghiệp sử dụng như một giải pháp
            marketing thu hút khách hàng hiệu quả.
          </li>
          <li>
            Hiện nay, marketing online đã trở thành một trong những phương pháp
            quảng cáo hiệu quả nhất để đưa sản phẩm và dịch vụ đến tận tay khách
            hàng. Tuy nhiên, việc tìm kiếm phương pháp marketing hiệu quả tiết
            kiệm chi phí và tiện lợi nhanh chóng không phải lúc nào cũng dễ
            dàng. Với sự phát triển không ngừng của công nghệ, TM Software đã
            đưa ra giải pháp mới mang tên "Vòng quay may mắn" để giúp doanh
            nghiệp tăng cường hiệu quả marketing online một cách đáng kể.
          </li>
        </span>
        <div ref={refV2} className="view-more" onClick={handleViewA1}>
          Xem thêm
        </div>
      </ul>
      <h4>
        Vậy việc sử dụng vòng quay may mắn có lợi ích gì mà doanh nghiệp lại sử
        dụng nhiều đến vậy?
      </h4>
      <ul>
        <li>
          Tăng tương tác, thu hút khách hàng nhanh chóng: Vòng quay may mắn là
          trò chơi có tính tương tác cao, vui nhộn và đánh đúng vào tâm lý “muốn
          dành chiến thắng” nên sẽ thu hút được sự chú ý nhanh chóng
        </li>
        <li>
          Nâng cao lòng trung thành của khách hàng: Bằng cách cung cấp cho khách
          hàng một trải nghiệm trò chơi trúng thưởng thú vị, bạn có thể khiến họ
          cảm thấy hào hứng hơn với thương hiệu và nhiều khả năng sẽ trở lại mua
          sản phẩm.
        </li>
        <li>
          Hiệu quả về chi phí: So với những phương án tiếp thị truyền thống khác
          như quảng cáo ngoài trời, tổ chức sự kiện, TVC,… thì trò chơi vòng
          quay may mắn dễ triển khai và tiết kiệm chi phí hơn rất nhiều.
        </li>
        <li>
          Việc sử dụng vòng quay may mắn trúng quà là biện pháp marketing hiệu
          quả đang được sử dụng rất rộng rãi bởi các doanh nghiệp. Có thể kế đến
          các doanh nghiệp lớn như THẨM MỸ VIỆN , SPA, ĐÀO TẠO VỀ GOLF,
          F&B,.....họ đều sử dụng vòng quay may mắn trong chương trình marketing
          của mình .
        </li>
      </ul>
    </div>
  );
};

export default Information;
