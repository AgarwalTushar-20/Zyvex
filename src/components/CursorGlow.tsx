import { useEffect } from "react";
import "../assets/styles/CursorGlow.scss";

function CursorGlow() {
  useEffect(() => {
    const createSpark = (x: number, y: number) => {
      const spark = document.createElement("div");
      spark.className = "spark";

      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      createSpark(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}

export default CursorGlow;