import React, { useEffect, useState } from "react";
import "../assets/styles/Loader.scss";

const lines = [
  "Loading...",
  "Calibrating UI engine...",
  "Establishing secure connection...",
  "Welcome To My Digital Universe 👋"
];

function Loader() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  // AUDIO
  useEffect(() => {
    const audio = new Audio("/boot.mp3");
    audio.volume = 0.3;

    const enableSound = () => {
      audio.play().catch(() => {});
      window.removeEventListener("pointerdown", enableSound);
    };

    window.addEventListener("pointerdown", enableSound);

    return () => {
      window.removeEventListener("pointerdown", enableSound);
    };
  }, []);

  // PROGRESS BAR
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

  // TYPING EFFECT (FIXED)
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

  }, [charIndex, lineIndex]); // ✅ CLEAN (NO ESLINT ERROR NOW)

  if (done) return null;

  return (
    <div className="loader-wrapper">
      <div className="matrix"></div>
      <div className="scanline"></div>

      <div className="terminal">
        <pre className="text">
          {text}
          <span className="cursor">|</span>
        </pre>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="percent">{progress}%</div>
      </div>
    </div>
  );
}

export default Loader;