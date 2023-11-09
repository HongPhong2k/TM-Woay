import "./Video.scss";
const Video = () => {
  return (
    <div className="video">
      <h2>Video hướng dẫn</h2>

      <iframe
        width="1065"
        height="577"
        // width="640"
        // height="340"
        src="https://www.youtube.com/embed/1MjxaowyOSM"
        title="VÒNG QUAY MAY MẮN, HOẠT ĐỘNG MARKETING HIỆU QUẢ"
        className="youtube"
      ></iframe>
    </div>
  );
};

export default Video;
