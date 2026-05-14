import React, { useEffect, useState } from "react";

import "../assets/styles/ScrollProgress.scss";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const updateScrollProgress = () => {

      const currentScroll = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (currentScroll / height) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };

  }, []);

  return (

    <div className="progress-container">

      <div
        className="progress-bar"
        style={{
          width: `${scroll}%`,
        }}
      ></div>

    </div>
  );
}

export default ScrollProgress;