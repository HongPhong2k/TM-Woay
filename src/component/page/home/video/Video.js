import "./Video.scss";
const Video = () => {
  return (
    <div className="video">
      <p className="title-home">Hướng dẫn</p>

      <iframe
        src="https://www.youtube.com/embed/1MjxaowyOSM"
        title="VÒNG QUAY MAY MẮN, HOẠT ĐỘNG MARKETING HIỆU QUẢ"
        className="youtube"
      ></iframe>
    </div>
  );
};

export default Video;
