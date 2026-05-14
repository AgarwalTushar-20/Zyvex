import React, { ReactNode, useRef } from "react";

import { motion } from "framer-motion";
import "../assets/styles/MagneticButton.scss";

interface MagneticProps {
  children: ReactNode;
}

function MagneticButton({ children }: MagneticProps) {

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {

    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform =
      `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {

    const element = ref.current;

    if (!element) return;

    element.style.transform =
      "translate(0px, 0px)";
  };

  return (

    <motion.div
      ref={ref}
      className="magnetic-button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
}

export default MagneticButton;