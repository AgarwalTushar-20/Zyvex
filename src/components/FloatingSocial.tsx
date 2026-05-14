import React, { useState } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import ShareIcon from "@mui/icons-material/Share";

import "../assets/styles/FloatingSocial.scss";

function FloatingSocial() {

  const [open, setOpen] = useState(false);

  return (

    <div
      className={`floating-social ${open ? "active" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >

      {/* MAIN BUTTON */}
      <div className="floating-trigger">
        <ShareIcon />
      </div>

      {/* SOCIAL ICONS */}

      <a
        href="https://github.com/AgarwalTushar-20"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>

      <a
        href="https://www.linkedin.com/in/web33/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>

      <a
        href="mailto:Tusharagarwal1910@gmail.com"
      >
        <EmailIcon />
      </a>

    </div>
  );
}

export default FloatingSocial;