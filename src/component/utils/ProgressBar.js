import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(20);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollPercentage(scrollPercent);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      id="progress"
      // style={{
      //   height: "3px",
      //   width: "100%",
      //   position: "fixed",
      //   top: "91px",
      //   left: "0",
      //   right: "0",
      //   zIndex: "100",
      // }}
      style={{
        height: "3px",
        width: "100%",
        position: "absolute",
        bottom: "0",
        left: "0",
        zIndex: "100",
      }}
    >
      <div
        className="progress-fill"
        style={{
          height: "100%",
          backgroundColor: "#0984e3",
          width: `${scrollPercentage}%`,
          transition: "0.5s",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
