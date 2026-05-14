import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">

      {/* glow line */}
      <div className="footer-glow"></div>

      {/* main text */}
      <h2 className="footer-heading">
        Building immersive digital experiences.
      </h2>
      <h3 className="footer-heading">
        Get In Touch.
      </h3>

      {/* social icons */}
      <div className="footer-socials">

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
          href="mailto:Tusharagrawal88888@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <EmailIcon />
        </a>

      </div>

      {/* availability */}
      <p className="footer-availability">
        🟢 Open to freelance & full-stack opportunities.
      </p>

      {/* bottom line */}
      <p className="footer-copy">
        © 2026 Zyvex — All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;