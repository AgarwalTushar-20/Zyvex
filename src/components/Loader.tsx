import React, { useEffect, useState } from "react";
import "../assets/styles/Loader.scss";

function Loader() {

  const lines = [
    "Loading...",
    "Calibrating UI engine...",
    "Establishing secure connection...",
    "Welcome To My Digital Universe 👋"
  ];

  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // ✅ AUDIO (FIXED - separate useEffect)
  useEffect(() => {
   const audio = new Audio("/boot.mp3");
  audio.volume = 0.3;

  const enableSound = () => {

    audio.play()
      .then(() => console.log("Audio playing"))
      .catch((err) => console.log("Blocked:", err));

    window.removeEventListener("pointerdown", enableSound);
  };

  window.addEventListener("pointerdown", enableSound);

  return () => {
    window.removeEventListener("pointerdown", enableSound);
  };

}, []);
  // ✅ PROGRESS BAR
  useEffect(() => {

    const interval = setInterval(() => {

      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });

    }, 40);

    return () => clearInterval(interval);

  }, []);

  // ✅ TYPING EFFECT
  useEffect(() => {

    if (lineIndex >= lines.length) {
      setTimeout(() => setDone(true), 800);
      return;
    }

    const currentLine = lines[lineIndex];

    const timeout = setTimeout(() => {

      if (charIndex < currentLine.length) {

        setText((prev) => prev + currentLine.charAt(charIndex));

        setCharIndex((prev) => prev + 1);

      } else {

        setText((prev) => prev + "\n");

        setLineIndex((prev) => prev + 1);

        setCharIndex(0);
      }

    }, 25);

    return () => clearTimeout(timeout);

  }, [charIndex, lineIndex]);

  if (done) return null;

  return (

    <div className="loader-wrapper">

      {/* MATRIX BACKGROUND */}
      <div className="matrix"></div>

      {/* SCAN LINE */}
      <div className="scanline"></div>

      {/* TERMINAL */}
      <div className="terminal">

        <div className="header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <pre className="text">
          {text}
          <span className="cursor">|</span>
        </pre>

        {/* PROGRESS */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="percent">{progress}%</div>

      </div>
    </div>
  );
}

export default Loader;