import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../assets/styles/Main.scss";

import { TypeAnimation } from "react-type-animation";

import ProfileImage from "../assets/images/my.png";

import FloatingSocial from "./FloatingSocial";

import { useTranslation } from "react-i18next";

function Main() {

  const translation = useTranslation();
const t = translation.t;

  return (

    <div className="container">

      <div className="about-section">

        <FloatingSocial />

        {/* STARS */}

        <div className="stars"></div>

        {/* BLACK HOLE */}

        <div className="blackhole"></div>

        {/* IMAGE */}

        <div className="image-wrapper">

          <img
            src={ProfileImage}
            alt="Tushar Agarwal"
          />

        </div>

        {/* CONTENT */}

        <div className="content">

          <h1>{String(t("hero_name"))}</h1>

          <p className="typing-text">

            <TypeAnimation
  key={translation.i18n.language}
  sequence={[
    String(t("hero_role1")),
    2000,

    String(t("hero_role2")),
    2000,

    String(t("hero_role3")),
    2000,

    String(t("hero_role4")),
    2000,
  ]}
  wrapper="span"
  speed={80}
  repeat={Infinity}
/>

          </p>

          <div className="mobile_social_icons">

            <a
              href="https://github.com/AgarwalTushar-20"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>

            <a
              href="https://linkedin.com/in/web33/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Main;