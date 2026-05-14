import React, { useEffect } from "react";
import CursorGlow from "./components/CursorGlow";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
// import FloatingSocial from "./components/FloatingSocial";
import ScrollProgress from "./components/ScrollProgress";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import FadeIn from "./components/FadeIn";

import "./index.scss";

function App() {

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

  }, []);

  return (

    <div className="main-container dark-mode">

      {/* WEBSITE LOADER */}
      <Loader />

      <ScrollProgress />


      <CursorGlow />

      <CursorGlow />

{/* <Navigation /> */}

      {/* NAVBAR */}
      <Navigation />

      {/* WEBSITE CONTENT */}
      <FadeIn transitionDuration={700}>

        <Main />

        <ScrollToTop />

        <Expertise />

        <Timeline />

        <Project />

        

        <Contact />

      </FadeIn>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;