import { useEffect, useRef, useState } from "react";
import Login from "./login";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/loading-animation.json";
import logo from "../assets/rewire-logo.png";
import bgVideo from "../assets/bg-animation.mp4";

import "../App.css";

export default function LandingWithLoader() {
  const bgRef = useRef(null);
  const [showLoader, setShowLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const MIN_MS = 4500;
    const FADE_MS = 350;
    let done = false;
    const start = performance.now();

    const finish = () => {
      if (done) return;
      done = true;

      const elapsed = performance.now() - start;
      const wait = Math.max(0, MIN_MS - elapsed);

      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => setShowLoader(false), FADE_MS);
      }, wait);
    };

    const video = bgRef.current;

    if (video && video.readyState >= 3) finish();
    else if (video) {
      video.addEventListener("canplaythrough", finish, { once: true });
      video.addEventListener("error", finish, { once: true });
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    const safety = setTimeout(finish, 4000);
    return () => clearTimeout(safety);
  }, []);

  return (
    <>
      {/* PRELOADER */}
      {showLoader && (
        <div className={`landing-preloader ${fadeOut ? "fade-out" : ""}`}>
          <video
            ref={bgRef}
            className="landing-bg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={bgVideo} type="video/mp4" />
          </video>

          <div className="preloader-overlay" />

          <div className="preloader-content">
            <img src={logo} className="preloader-logo" alt="Rewire & Conquer" />

            <div className="preloader-loading">
                <div className="preloader-text">
                    {"LOADING".split("").map((char, i) => (
                    <span key={i} style={{ animationDelay: `${i * 0.12}s` }}>
                        {char}
                    </span>
                    ))}
                </div>

                <Lottie
                    animationData={loaderAnimation}
                    loop
                    autoplay
                    className="preloader-icon"
                />
            </div>

          </div>
        </div>
      )}

      {/* LOGIN PAGE */}
      <Login />
    </>
  );
}
