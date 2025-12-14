import "@/index.css";
import bgVideo from "@/assets/bg-animation.mp4";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/rewire-logo.png";
import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="login-page">
      {/* LEFT SIDE (VIDEO BG) */}
      <div className="login-left">
        <video
          className="bg-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="left-overlay">
          <img src={logo} alt="Rewire & Conquer" className="logo" />

          <h1>
            Train Smarter.
            <br />
            Not Harder.
          </h1>

          <p>
            Start with a simple survey and unlock a fitness journey built around
            you — with a partner that guides you every step.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="form-container">

          {/* MOBILE LOGO */}
          <div className="mobile-hero">
            <img src={logo} alt="Rewire & Conquer" className="mobile-logo" />
          </div>

          <h2>Create your Account</h2>
          <p className="subtitle">
            Start your fitness journey with a plan built around you.
          </p>

          <label>Name</label>
          <input value=""  type="text" placeholder="John Doe" />

          <label>Email</label>
          <input value="" type="email" placeholder="youremail@gmail.com" />

          <div className="password-row">
            <label>Password</label>
          </div>

          <div className="password-wrapper">
            <input
              value="" type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span>Terms & Policy</span>
            </label>
          </div>

          <button className="login-btn"
            onClick={() => navigate("/account-info")}>
            Create account
          </button>

          <p className="signup">
            Already have an account? <span onClick={() => navigate("/")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
