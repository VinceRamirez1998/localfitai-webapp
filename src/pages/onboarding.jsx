import "@/index.css";
import bgVideo from "@/assets/bg-animation.mp4";
import onboardingImage from "@/assets/onboarding-image.png";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/rewire-logo.png";

export default function Onboarding() {
    const navigate = useNavigate();
  return (
    <div className="onboarding-page">
      {/* BACKGROUND VIDEO */}
      <video
        className="onboarding-bg-video"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="onboarding-overlay">
        {/* LOGO */}
        <img
          src={logo}
          alt="Rewire & Conquer"
          className="onboarding-logo"
        />

        {/* CENTER CONTENT */}
        <div className="onboarding-content">
          <img
            src={onboardingImage}
            alt="App preview"
            className="onboarding-image"
          />

          <h1>Quick Fitness Surveys</h1>

          <p>
            Answer short surveys to help us understand your goals
            and build a plan that fits you.
          </p>

          <button
            className="onboarding-btn"
            onClick={() => navigate("/account-info")}
            >
            Begin survey →
            </button>

        </div>
      </div>
    </div>
  );
}
